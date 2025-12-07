interface KeyTakeawaysProps {
  bullets: string[];
}

export function KeyTakeaways({ bullets }: KeyTakeawaysProps) {
  // Helper function to wrap key entities in <strong> tags
  const enhanceBullet = (bullet: string): string => {
    // Skip if already contains HTML tags (to avoid double-processing)
    if (bullet.includes("<strong>") || bullet.includes("<em>")) {
      return bullet;
    }

    // Common medical/health entities to emphasize (order matters - longer phrases first)
    // Enhanced for snippet optimization
    const patterns = [
      /(brain fog|brain fog and)/gi,
      /(static shocks|static shock)/gi,
      /(root cause|functional medicine|personalized treatment)/gi,
      /(gut health|microbiome|digestive issues|immune system)/gi,
      /(vitamin d|vitamin b12|vitamin b|magnesium|zinc|iron|folate)/gi,
      /(mold|mycotoxin|toxin|detox|detoxification)/gi,
      /(inflammation|autoimmune|chronic fatigue)/gi,
      /(hormone|thyroid|cortisol|estrogen|testosterone)/gi,
      /(fatigue|anxiety|depression|mood changes)/gi,
      /(sinus|congestion|headaches|digestive)/gi,
    ];

    let enhanced = bullet;
    patterns.forEach((pattern) => {
      enhanced = enhanced.replace(pattern, (match) => {
        // Don't wrap if already wrapped
        return `<strong>${match}</strong>`;
      });
    });

    return enhanced;
  };

  return (
    <div className="bg-gray-50 p-8 mb-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <h3 className="font-semibold text-[#0F4C3A] mb-5 text-xl">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed text-lg">
        {bullets.map((bullet, index) => (
          <li
            key={index}
            dangerouslySetInnerHTML={{ __html: enhanceBullet(bullet) }}
          />
        ))}
      </ul>
    </div>
  );
}

