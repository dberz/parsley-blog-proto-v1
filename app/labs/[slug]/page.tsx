import { notFound } from "next/navigation";
import {
  getLabsBySlug,
  getConditionBySlug,
  getCareBySlug,
  blogPosts,
} from "@/src/data/content";
import { Breadcrumbs } from "@/src/components/ui/Breadcrumbs";
import { Card } from "@/src/components/ui/Card";
import { CTAButton } from "@/src/components/ui/CTAButton";
import { Chip } from "@/src/components/ui/Chip";
import { Section } from "@/src/components/ui/Section";

interface LabsPageProps {
  params: Promise<{ slug: string }>;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function getExcerpt(html: string, maxLength: number = 150): string {
  const text = stripHtml(html);
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export default async function LabsPage({ params }: LabsPageProps) {
  const { slug } = await params;
  const labs = getLabsBySlug(slug);

  if (!labs) {
    notFound();
  }

  const condition = getConditionBySlug(labs.relatedConditionSlug);
  if (!condition) {
    notFound();
  }

  const care = getCareBySlug(condition.primaryCareSlug);
  if (!care) {
    notFound();
  }

  const relatedBlog = blogPosts.find(
    (b) => b.primaryConditionSlug === condition.slug
  );

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Labs", href: "/labs" },
          { label: labs.name },
        ]}
      />

      <div className="mb-10">
        <h1 className="text-5xl font-bold text-[#0F4C3A] mb-6 leading-tight">{labs.name}</h1>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-3xl font-bold text-[#0F4C3A]">
            {labs.price}
          </span>
          <span className="px-4 py-2 bg-[#F5F5F0] text-[#0F4C3A] rounded-full text-sm font-medium border border-[#0F4C3A]/20">
            HSA / FSA eligible
          </span>
        </div>
        <CTAButton href="#" variant="primary">
          Buy panel
        </CTAButton>
      </div>

      <Card className="bg-[#F5F5F0] border-l-4 border-[#0F4C3A] mb-10">
        <h3 className="text-2xl font-bold text-[#0F4C3A] mb-3">
          Abnormal results? Do not panic
        </h3>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Unlike many at home kits, Parsley Health is a medical practice. If
          your results are out of range, our clinicians can help you interpret
          them and manage next steps.
        </p>
        <CTAButton href={`/care/${care.slug}`} variant="primary">
          Upgrade to medical care
        </CTAButton>
      </Card>

      <Section title="What this panel measures">
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {labs.biomarkers.map((biomarker, index) => (
            <li key={index}>{biomarker}</li>
          ))}
        </ul>
      </Section>

      <Section title="Is this panel right for you">
        <p className="text-gray-700 mb-4">
          This panel is recommended if you have been experiencing persistent
          symptoms that may be related to mold exposure, or if you have a
          history of living or working in water-damaged buildings.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {labs.recommendedIf.map((item, index) => (
            <Chip key={index} label={item} />
          ))}
        </div>
        <div className="mt-4">
          <Chip
            label={condition.name}
            href={`/conditions/${condition.slug}`}
          />
        </div>
      </Section>

      <Section title="Learn more">
        <div className="grid md:grid-cols-2 gap-6">
          <Card title={`${condition.name} overview`}>
            <p className="text-gray-700 mb-4">{condition.seoSummary}</p>
            <CTAButton href={`/conditions/${condition.slug}`} variant="primary">
              View condition
            </CTAButton>
          </Card>

          {relatedBlog && (
            <Card title={relatedBlog.title}>
              <p className="text-gray-700 mb-4">
                {getExcerpt(relatedBlog.bodyHtml)}
              </p>
              <CTAButton href={`/blog/${relatedBlog.slug}`} variant="primary">
                Read article
              </CTAButton>
            </Card>
          )}
        </div>
      </Section>
    </div>
  );
}

