export function getUTMs() {
  const cookies = document.cookie.split("; ");

  const utms: Record<string, string | null> = {
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    utm_term: null,
    utm_content: null,
  };

  cookies.forEach((cookie) => {
    const [key, value] = cookie.split("=");
    if (key in utms) {
      utms[key] = decodeURIComponent(value);
    }
  });

  return utms;
}
