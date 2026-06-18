import { SITE_CONFIG } from "@news/config";

export function SiteLogo() {
  return (
    <span
      className="
          text-2xl
          font-black
          tracking-tight
        "
    >
      {SITE_CONFIG.name}
    </span>
  );
}
