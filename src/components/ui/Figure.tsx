interface FigureProps {
  children: React.ReactNode;
  caption?: string;
  className?: string;
}

export function Figure({ children, caption, className = "" }: FigureProps) {
  return (
    <figure className={`my-8 ${className}`}>
      <div className="bg-[#F5F5F0] border border-gray-200 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
        {children}
      </div>
      {caption && (
        <figcaption className="mt-4 text-sm text-gray-600 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}



