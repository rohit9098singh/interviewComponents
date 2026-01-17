"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

export default function UTMTracker({
  cookieDays = 30,
  overwrite = false,
}: {
  cookieDays?: number;
  overwrite?: boolean;
}) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    UTM_KEYS.forEach((key) => {
      const value = params.get(key);
      if (!value) return;

      const existing = document.cookie
        .split("; ")
        .find((c) => c.startsWith(key + "="));

      if (existing && !overwrite) return;

      const expires = new Date(
        Date.now() + cookieDays * 864e5
      ).toUTCString();

      document.cookie = `${key}=${encodeURIComponent(
        value
      )}; path=/; expires=${expires}; SameSite=Lax`;
    });
  }, [cookieDays, overwrite]);

  return null;
}
