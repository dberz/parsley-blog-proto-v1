import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getCareBySlug,
  conditionHubs,
} from "@/src/data/content";
import { Breadcrumbs } from "@/src/components/ui/Breadcrumbs";
import { Card } from "@/src/components/ui/Card";
import { CTAButton } from "@/src/components/ui/CTAButton";
import { Chip } from "@/src/components/ui/Chip";
import { Section } from "@/src/components/ui/Section";

interface CarePageProps {
  params: Promise<{ slug: string }>;
}

export default async function CarePage({ params }: CarePageProps) {
  const { slug } = await params;
  const care = getCareBySlug(slug);

  if (!care) {
    notFound();
  }

  const conditionsForCare = conditionHubs.filter((ch) =>
    care.whoItHelpsConditions.includes(ch.slug)
  );

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Care", href: "/care" },
          { label: care.name },
        ]}
      />

      <div className="mb-10">
        <h1 className="text-5xl font-bold text-[#0F4C3A] mb-6 leading-tight">{care.name}</h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">{care.heroCopy}</p>
        <div className="flex flex-wrap gap-4">
          <CTAButton href="#" variant="primary">
            Book now
          </CTAButton>
          <CTAButton href="#" variant="secondary">
            Check eligibility
          </CTAButton>
        </div>
      </div>

      <Section title="Who we help">
        <div className="flex flex-wrap gap-3">
          {conditionsForCare.map((condition) => (
            <Chip
              key={condition.slug}
              label={condition.name}
              href={`/conditions/${condition.slug}`}
            />
          ))}
        </div>
      </Section>

      <Section title="How it works">
        <div className="space-y-4">
          <Card>
            <h3 className="font-semibold text-gray-900 mb-2">1. Order labs or bring recent labs</h3>
            <p className="text-gray-700">
              Start with comprehensive lab testing to understand your current health status.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900 mb-2">2. Meet with your clinician for a deep dive visit</h3>
            <p className="text-gray-700">
              Your clinician will review your history, symptoms, and lab results to create a personalized plan.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-gray-900 mb-2">3. Follow a personalized plan with ongoing support</h3>
            <p className="text-gray-700">
              Work with your care team to implement your plan and adjust as needed.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <Link
          href="/conditions"
          className="text-green-600 hover:text-green-700"
        >
          Explore conditions →
        </Link>
      </Section>
    </div>
  );
}

