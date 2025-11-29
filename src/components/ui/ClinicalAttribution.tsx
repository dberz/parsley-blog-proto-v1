import Link from "next/link";

interface ClinicalAttributionProps {
  authorName?: string;
  authorCredentials?: string;
  authorRole?: string;
  authorLink?: string;
  reviewedByName?: string;
  reviewedByCredentials?: string;
  reviewedByRole?: string;
  reviewedByLink?: string;
  reviewedDate?: string;
  publishedDate?: string;
}

export function ClinicalAttribution({
  authorName,
  authorCredentials,
  authorRole,
  authorLink,
  reviewedByName,
  reviewedByCredentials,
  reviewedByRole,
  reviewedByLink,
  reviewedDate,
  publishedDate,
}: ClinicalAttributionProps) {
  return (
    <div className="text-sm text-gray-600 mb-6 space-y-1">
      {authorName && (
        <div>
          By{" "}
          {authorLink ? (
            <Link href={authorLink} className="text-[#0F4C3A] hover:underline font-medium">
              {authorName}
            </Link>
          ) : (
            <span className="font-medium">{authorName}</span>
          )}
          {authorCredentials && `, ${authorCredentials}`}
          {authorRole && ` – ${authorRole}`}
          {publishedDate && (
            <>
              {" · "}
              {new Date(publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </>
          )}
        </div>
      )}
      {reviewedByName && (
        <div>
          Medically reviewed by{" "}
          {reviewedByLink ? (
            <Link href={reviewedByLink} className="text-[#0F4C3A] hover:underline font-medium">
              {reviewedByName}
            </Link>
          ) : (
            <span className="font-medium">{reviewedByName}</span>
          )}
          {reviewedByCredentials && `, ${reviewedByCredentials}`}
          {reviewedByRole && ` – ${reviewedByRole}`}
          {reviewedDate && (
            <>
              {" · "}
              Last reviewed{" "}
              {new Date(reviewedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
}

