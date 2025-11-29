import Link from "next/link";
import { CTAButton } from "@/src/components/ui/CTAButton";

export default function NotFound() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">Page not found</p>
      <CTAButton href="/" variant="primary">
        Go home
      </CTAButton>
    </div>
  );
}

