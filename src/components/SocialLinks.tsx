import { SOCIALS } from "@/lib/constants";

type Key = (typeof SOCIALS)[number]["key"];

/** Proste ikony liniowe (zwykłe linki, bez wtyczek i skryptów serwisów). */
function Icon({ name }: { name: Key }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "instagram")
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
      </svg>
    );
  if (name === "facebook")
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <path d="M15.5 8h-1.6c-1 0-1.9.8-1.9 1.9V21" />
        <path d="M9.5 13h5.5" />
      </svg>
    );
  return (
    <svg {...common}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M8 11v6" />
      <circle cx="8" cy="7.8" r="0.6" fill="currentColor" />
      <path d="M12 17v-6" />
      <path d="M12 13.5c0-1.6 1.1-2.5 2.4-2.5s2.1.9 2.1 2.5V17" />
    </svg>
  );
}

export function SocialLinks({
  className = "socials",
  labels = false,
  only,
}: {
  className?: string;
  labels?: boolean;
  only?: Key[];
}) {
  const list = only ? SOCIALS.filter((s) => only.includes(s.key)) : SOCIALS;
  return (
    <ul className={className} aria-label="Nasze profile">
      {list.map((s) => (
        <li key={s.key}>
          <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={labels ? undefined : s.name} title={s.name}>
            <Icon name={s.key} />
            {labels && <span>{s.name}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
