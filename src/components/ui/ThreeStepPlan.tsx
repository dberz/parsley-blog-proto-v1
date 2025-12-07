import { CTAButton } from "./CTAButton";
import Link from "next/link";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

interface ThreeStepPlanProps {
  steps: Step[];
  ctaHref: string;
  ctaLabel: string;
}

export function ThreeStepPlan({
  steps,
  ctaHref,
  ctaLabel,
}: ThreeStepPlanProps) {
  return (
    <div className="bg-[#F5F5F0] rounded-xl p-8 my-12">
      <h2 className="text-3xl font-bold text-[#0F4C3A] mb-2 text-center">
        Your 3-Step Plan
      </h2>
      <p className="text-gray-700 text-center mb-8">
        Simplify your path to better health
      </p>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {steps.map((step) => {
          const content = (
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#0F4C3A] flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
              </div>
              <div className="flex justify-center mb-3 text-[#0F4C3A]">
                {step.icon}
              </div>
              <h3 className="font-semibold text-[#0F4C3A] mb-2 text-lg">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          );

          if (step.href) {
            return (
              <Link
                key={step.number}
                href={step.href}
                className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                {content}
              </Link>
            );
          }

          return (
            <div
              key={step.number}
              className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              {content}
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <CTAButton href={ctaHref} variant="primary">
          {ctaLabel}
        </CTAButton>
      </div>
    </div>
  );
}



