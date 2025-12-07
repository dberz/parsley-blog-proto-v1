interface EmpathyHeaderProps {
  message?: string;
  variant?: "default" | "validation";
}

export function EmpathyHeader({
  message,
  variant = "default",
}: EmpathyHeaderProps) {
  const defaultMessage =
    variant === "validation"
      ? "Feeling unheard? You aren't crazy. If your standard labs are 'normal' but you still feel sick, we look deeper to find the root cause."
      : "Feeling unheard? You are not alone. We look deeper to find the root cause.";

  const displayMessage = message || defaultMessage;

  return (
    <div className="bg-[#E8F5E9]/50 border border-[#0F4C3A]/20 rounded-xl p-6 mb-8 flex items-start gap-4 w-full">
      <div className="flex-shrink-0">
        {variant === "validation" ? (
          <svg
            className="w-8 h-8 text-[#0F4C3A]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ) : (
          <svg
            className="w-8 h-8 text-[#0F4C3A]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        )}
      </div>
      <p className="text-gray-800 text-lg leading-relaxed font-medium">
        {displayMessage}
      </p>
    </div>
  );
}

