import { labsPanels } from "@/src/data/content";
import { Card } from "@/src/components/ui/Card";
import { CTAButton } from "@/src/components/ui/CTAButton";

export default function LabsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Lab Panels</h1>
      <div className="grid gap-6">
        {labsPanels.map((labs) => (
          <Card key={labs.slug}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {labs.name}
            </h2>
            <div className="text-lg font-semibold text-gray-900 mb-2">
              {labs.price}
            </div>
            <p className="text-gray-700 mb-4">{labs.description}</p>
            <CTAButton href={`/labs/${labs.slug}`} variant="primary">
              View panel
            </CTAButton>
          </Card>
        ))}
      </div>
    </div>
  );
}




