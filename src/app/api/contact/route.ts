import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, inquiryType, message } = body;

    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // HubSpot integration — submit contact to HubSpot CRM
    const hubspotToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN;

    if (hubspotToken) {
      const hubspotPayload = {
        properties: {
          firstname: name.split(" ")[0],
          lastname: name.split(" ").slice(1).join(" ") || "",
          email,
          phone: phone || "",
          company: company || "",
          hs_lead_status: "NEW",
          message,
          // Tag by inquiry type for routing
          lifecyclestage: "lead",
        },
      };

      await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${hubspotToken}`,
        },
        body: JSON.stringify(hubspotPayload),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
