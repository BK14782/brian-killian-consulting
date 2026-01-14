// src/lib/ga.ts
export const GA_MEASUREMENT_ID = "G-9556P3Q5N4";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const gaEvent = (
  action: string,
  params: Record<string, any> = {}
) => {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", action, params);
};
