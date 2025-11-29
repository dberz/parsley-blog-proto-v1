import Link from "next/link";

export function WhyTrustParsley() {
  return (
    <div className="bg-[#F5F5F0] border-l-4 border-[#0F4C3A] p-6 rounded-r-lg mb-8">
      <h3 className="text-xl font-bold text-[#0F4C3A] mb-4">Why trust Parsley Health</h3>
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-start">
          <span className="text-[#0F4C3A] mr-2">•</span>
          <span>
            Board certified clinicians trained in functional medicine
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-[#0F4C3A] mr-2">•</span>
          <span>
            Thousands of patients treated for complex chronic conditions
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-[#0F4C3A] mr-2">•</span>
          <span>
            Care plans informed by peer-reviewed research and clinical experience
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-[#0F4C3A] mr-2">•</span>
          <span>
            Comprehensive approach that addresses root causes, not just symptoms
          </span>
        </li>
      </ul>
      <div className="mt-4">
        <Link
          href="/care/our-approach"
          className="text-[#0F4C3A] hover:underline font-medium text-sm"
        >
          Learn more about our approach →
        </Link>
      </div>
    </div>
  );
}

