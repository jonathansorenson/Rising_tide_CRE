// GA4 event tracking helpers
// These functions wrap gtag() calls for key conversion events

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
}

export function trackFormSubmission(formType: string) {
  gtag("event", "form_submission", {
    form_type: formType,
  });
}

export function trackCTAClick(ctaName: string, page: string) {
  gtag("event", "cta_click", {
    cta_name: ctaName,
    page_location: page,
  });
}

export function trackPropertyView(propertyId: string, propertyName: string) {
  gtag("event", "property_view", {
    property_id: propertyId,
    property_name: propertyName,
  });
}

export function trackDownload(fileName: string) {
  gtag("event", "file_download", {
    file_name: fileName,
  });
}

export function trackJobView(jobTitle: string) {
  gtag("event", "job_view", {
    job_title: jobTitle,
  });
}
