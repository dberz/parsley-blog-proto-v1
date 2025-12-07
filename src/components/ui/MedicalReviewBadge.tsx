import Link from "next/link";

interface MedicalReviewBadgeProps {
  reviewerName: string;
  reviewerCredentials: string;
  reviewerLink?: string;
  lastUpdated: string;
}

export function MedicalReviewBadge({
  reviewerName,
  reviewerCredentials,
  reviewerLink,
  lastUpdated,
}: MedicalReviewBadgeProps) {
  const formattedDate = new Date(lastUpdated).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex items-center gap-3 mb-6 p-3 bg-[#F5F5F0] rounded-lg border border-[#0F4C3A]/10">
      <div className="w-10 h-10 rounded-full bg-[#0F4C3A] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
        {reviewerName
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()}
      </div>
      <div className="flex-1">
        <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">
          Medically Reviewed
        </div>
        <div className="text-sm text-gray-900">
          {reviewerLink ? (
            <Link
              href={reviewerLink}
              className="font-semibold text-[#0F4C3A] hover:underline"
            >
              {reviewerName}, {reviewerCredentials}
            </Link>
          ) : (
            <span className="font-semibold text-[#0F4C3A]">
              {reviewerName}, {reviewerCredentials}
            </span>
          )}
          <span className="text-gray-600"> · Last Updated: {formattedDate}</span>
        </div>
      </div>
    </div>
  );
}



