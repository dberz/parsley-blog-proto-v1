import Link from "next/link";

interface DoctorsTakeProps {
  doctorName: string;
  doctorCredentials: string;
  doctorRole: string;
  doctorLink?: string;
  quote: string;
}

export function DoctorsTake({
  doctorName,
  doctorCredentials,
  doctorRole,
  doctorLink,
  quote,
}: DoctorsTakeProps) {
  const initials = doctorName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="bg-white border-l-4 border-[#0F4C3A] rounded-r-lg p-8 my-10 shadow-sm">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-[#0F4C3A] flex items-center justify-center text-white font-semibold text-lg">
            {initials}
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-3">
            {doctorLink ? (
              <Link
                href={doctorLink}
                className="font-semibold text-[#0F4C3A] hover:underline text-lg"
              >
                {doctorName}, {doctorCredentials}
              </Link>
            ) : (
              <span className="font-semibold text-[#0F4C3A] text-lg">
                {doctorName}, {doctorCredentials}
              </span>
            )}
            <span className="text-gray-600 ml-2 text-sm">· {doctorRole}</span>
          </div>
          <blockquote className="text-gray-800 text-lg leading-relaxed italic">
            "{quote}"
          </blockquote>
        </div>
      </div>
    </div>
  );
}



