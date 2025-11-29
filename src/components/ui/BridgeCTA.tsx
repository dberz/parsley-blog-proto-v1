import { CTAButton } from "./CTAButton";

interface BridgeCTAProps {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export function BridgeCTA({
  title,
  body,
  ctaLabel,
  ctaHref,
}: BridgeCTAProps) {
  return (
    <div className="bg-[#F5F5F0] border-l-4 border-[#0F4C3A] p-8 my-10 rounded-r-lg shadow-sm">
      <h3 className="text-2xl font-bold text-[#0F4C3A] mb-3">{title}</h3>
      <p className="text-gray-700 mb-6 text-lg leading-relaxed">{body}</p>
      <CTAButton href={ctaHref} variant="primary">
        {ctaLabel}
      </CTAButton>
    </div>
  );
}

