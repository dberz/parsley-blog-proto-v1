interface PullQuoteProps {
  quote: string;
  author?: string;
}

export function PullQuote({ quote, author }: PullQuoteProps) {
  return (
    <div className="my-12 py-8 px-8 border-l-4 border-[#0F4C3A] bg-[#F5F5F0] rounded-r-lg">
      <blockquote className="text-2xl font-serif text-[#0F4C3A] italic leading-relaxed mb-2">
        "{quote}"
      </blockquote>
      {author && (
        <cite className="text-sm text-gray-600 not-italic">
          — {author}
        </cite>
      )}
    </div>
  );
}



