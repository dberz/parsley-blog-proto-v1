import { careServices } from "@/src/data/content";
import { Card } from "@/src/components/ui/Card";
import { CTAButton } from "@/src/components/ui/CTAButton";

export default function CarePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Care Programs</h1>
      <div className="grid gap-6">
        {careServices.map((care) => (
          <Card key={care.slug}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {care.name}
            </h2>
            <p className="text-gray-700 mb-4">{care.heroCopy}</p>
            <CTAButton href={`/care/${care.slug}`} variant="primary">
              View care program
            </CTAButton>
          </Card>
        ))}
      </div>
    </div>
  );
}

