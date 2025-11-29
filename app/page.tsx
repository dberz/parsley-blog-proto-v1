import Link from "next/link";
import { CTAButton } from "@/src/components/ui/CTAButton";

export default function Home() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-[#0F4C3A] mb-6">
          Parsley Health IA Prototype
        </h1>
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          This is a functional prototype demonstrating the new information
          architecture and internal linking patterns between Blog posts →
          Condition Hubs → Labs → Care.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <CTAButton href="/conditions" variant="primary">
            View Conditions
          </CTAButton>
          <CTAButton href="/blog" variant="primary">
            View Blog
          </CTAButton>
          <CTAButton href="/labs" variant="primary">
            View Labs
          </CTAButton>
          <CTAButton href="/care" variant="primary">
            View Care
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
