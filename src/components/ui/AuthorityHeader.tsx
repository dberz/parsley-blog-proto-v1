import Link from "next/link";

interface AuthorityHeaderProps {
  authorName: string;
  authorCredentials?: string;
  authorRole?: string;
  authorLink?: string;
  updatedDate: string;
  publishedDate?: string;
  readTimeMinutes: number;
}

export function AuthorityHeader({
  authorName,
  authorCredentials,
  authorRole,
  authorLink,
  updatedDate,
  publishedDate,
  readTimeMinutes,
}: AuthorityHeaderProps) {
  const formattedUpdatedDate = new Date(updatedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const initials = authorName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-gray-200">
      {/* Author with Avatar */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-[#0F4C3A] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
          {initials}
        </div>
        <div>
          <div className="text-sm text-gray-600 mb-1">By</div>
          <div>
            {authorLink ? (
              <Link
                href={authorLink}
                className="font-semibold text-[#0F4C3A] hover:underline text-base"
              >
                {authorName}
              </Link>
            ) : (
              <span className="font-semibold text-[#0F4C3A] text-base">
                {authorName}
              </span>
            )}
            {authorCredentials && (
              <span className="text-gray-600 ml-1 text-base">
                , {authorCredentials}
              </span>
            )}
            {authorRole && (
              <span className="text-gray-600 ml-1 text-sm">· {authorRole}</span>
            )}
          </div>
        </div>
      </div>

      {/* Date and Read Time */}
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <div>
          <span className="font-medium">Updated:</span> {formattedUpdatedDate}
        </div>
        {publishedDate && publishedDate !== updatedDate && (
          <div>
            <span className="font-medium">Published:</span>{" "}
            {new Date(publishedDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        )}
        <div className="font-medium">{readTimeMinutes} min read</div>
      </div>
    </div>
  );
}



