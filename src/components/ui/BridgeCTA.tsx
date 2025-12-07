import { CTAButton } from "./CTAButton";

interface BridgeCTAProps {
  title: string;
  subhead?: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export function BridgeCTA({
  title,
  subhead,
  body,
  ctaLabel,
  ctaHref,
}: BridgeCTAProps) {
  return (
    <div className="bg-[#E8F5E9] border-2 border-[#0F4C3A]/30 p-10 my-12 rounded-xl shadow-md relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#0F4C3A]"></div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-[#0F4C3A] mb-2">{title}</h3>
        {subhead && (
          <p className="text-lg font-semibold text-[#0F4C3A]/80 mb-4">
            {subhead}
          </p>
        )}
        <p className="text-gray-800 mb-6 text-lg leading-relaxed">{body}</p>
        <CTAButton href={ctaHref} variant="primary">
          {ctaLabel}
        </CTAButton>
      </div>
    </div>
  );
}

