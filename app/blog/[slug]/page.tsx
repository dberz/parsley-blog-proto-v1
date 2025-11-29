import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getBlogBySlug,
  getConditionBySlug,
  getCareBySlug,
  labsPanels,
  conditionHubs,
} from "@/src/data/content";
import { Breadcrumbs } from "@/src/components/ui/Breadcrumbs";
import { Card } from "@/src/components/ui/Card";
import { CTAButton } from "@/src/components/ui/CTAButton";
import { BridgeCTA } from "@/src/components/ui/BridgeCTA";
import { Section } from "@/src/components/ui/Section";
import { ClinicalAttribution } from "@/src/components/ui/ClinicalAttribution";
import { WhyTrustParsley } from "@/src/components/ui/WhyTrustParsley";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const condition = getConditionBySlug(blog.primaryConditionSlug);
  if (!condition) {
    notFound();
  }

  const labs = labsPanels.find(
    (l) => l.relatedConditionSlug === condition.slug
  );
  const care = getCareBySlug(condition.primaryCareSlug);
  if (!care) {
    notFound();
  }

  // Find related conditions for internal linking
  const relatedConditions = condition.relatedSlugs
    .slice(0, 3)
    .map((s) => getConditionBySlug(s))
    .filter((c): c is NonNullable<typeof c> => c !== undefined);

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: condition.name, href: `/conditions/${condition.slug}` },
          { label: blog.title },
        ]}
      />

      <h1 className="text-5xl font-bold text-[#0F4C3A] mb-6 leading-tight">
        {blog.title}
      </h1>

      <ClinicalAttribution
        authorName={blog.author}
        authorRole="at Parsley Health"
        authorLink="/team"
        reviewedByName={blog.reviewedBy || "Dr. Sarah Johnson"}
        reviewedByCredentials="MD"
        reviewedByRole="Functional Medicine Physician"
        reviewedByLink="/team/sarah-johnson"
        publishedDate={blog.publishedDate}
        reviewedDate={blog.publishedDate}
      />

      <Link
        href={`/conditions/${condition.slug}`}
        className="text-sm text-[#0F4C3A] hover:text-[#1a6b52] mb-8 inline-block font-medium"
      >
        Learn more about {condition.name} →
      </Link>

      {/* TL;DR */}
      <div className="bg-[#F5F5F0] border border-gray-200 rounded-xl p-8 mb-10">
        <h3 className="font-bold text-[#0F4C3A] mb-4 text-lg">TL;DR</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {blog.tldrBullets.map((bullet, index) => (
            <li key={index} className="leading-relaxed">{bullet}</li>
          ))}
        </ul>
        <p className="mt-4 text-gray-700 leading-relaxed">
          {condition.name === "Mold & Toxicity"
            ? "Mold toxicity can cause persistent symptoms that don't respond to typical treatments. Parsley Health clinicians can help diagnose and treat mold toxicity through a comprehensive root cause approach."
            : `If you're experiencing these symptoms, Parsley Health can help diagnose and treat ${condition.name.toLowerCase()} through a comprehensive root cause approach.`}
        </p>
      </div>

      {/* Bridge CTA */}
      <BridgeCTA
        title={`Still struggling with possible ${condition.shortName} issues?`}
        body={`If you recognize these symptoms, our clinicians can help you understand whether ${condition.name.toLowerCase()} is part of the picture and design a plan to feel better.`}
        ctaLabel={`Get care for ${condition.name}`}
        ctaHref={`/conditions/${condition.slug}`}
      />

      {/* Body Content with Structure */}
      <div className="prose prose-neutral max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: blog.bodyHtml }} />
        
        {/* Internal linking within content */}
        <div className="mt-8 p-6 bg-[#F5F5F0] rounded-lg">
          <h3 className="text-lg font-semibold text-[#0F4C3A] mb-3">
            Related conditions
          </h3>
          <p className="text-gray-700 mb-3">
            {condition.name} often overlaps with other conditions. Learn more
            about:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {relatedConditions.map((related) => (
              <li key={related.slug}>
                <Link
                  href={`/conditions/${related.slug}`}
                  className="text-[#0F4C3A] hover:underline"
                >
                  {related.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* When to Seek Urgent Care */}
      <Card className="mb-10 border-l-4 border-red-500">
        <h3 className="font-semibold text-[#0F4C3A] mb-2">
          When to seek urgent care
        </h3>
        <p className="text-gray-700 text-sm">
          If you experience severe symptoms like difficulty breathing, chest
          pain, or severe allergic reactions, seek immediate medical attention.
          For persistent symptoms that don't improve, schedule a visit with a
          healthcare provider.
        </p>
      </Card>

      {/* Next Steps */}
      <Section title="Next steps">
        <div className="grid md:grid-cols-3 gap-6">
          <Card title={`${condition.name} overview`}>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {condition.seoSummary}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Learn about symptoms, diagnosis, and treatment options.
            </p>
            <CTAButton href={`/conditions/${condition.slug}`} variant="primary">
              View condition
            </CTAButton>
          </Card>

          {labs && (
            <Card title={labs.name}>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {labs.description}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Understand how testing can help identify root causes.
              </p>
              <CTAButton href={`/labs/${labs.slug}`} variant="primary">
                View panel
              </CTAButton>
            </Card>
          )}

          <Card title={care.name}>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {care.heroCopy}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Get personalized care from clinicians who understand complex
              chronic conditions.
            </p>
            <CTAButton href={`/care/${care.slug}`} variant="primary">
              See care details
            </CTAButton>
          </Card>
        </div>
      </Section>

      {/* E-E-A-T: Why Trust Parsley */}
      <WhyTrustParsley />

      {/* Sources */}
      <Section title="Sources">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              • Shoemaker, R. C., & House, D. E. (2006). Sick building syndrome
              in water-damaged buildings: Generalizability of the biotoxin
              pathway.{" "}
              <span className="italic">
                Journal of Environmental Health
              </span>
              .
            </li>
            <li>
              • Brewer, J. H., et al. (2013). Detection of mycotoxins in
              patients with chronic fatigue syndrome.{" "}
              <span className="italic">Toxins</span>.
            </li>
            <li>
              • Rea, W. J., et al. (2003). Effects of toxic exposure to molds
              and mycotoxins in building-related illnesses.{" "}
              <span className="italic">Archives of Environmental Health</span>.
            </li>
            <li>
              • Hope, J. (2013). A review of the mechanism of injury and
              treatment approaches for illness resulting from exposure to
              water-damaged buildings, mold, and mycotoxins.{" "}
              <span className="italic">Scientific World Journal</span>.
            </li>
          </ul>
        </div>
      </Section>

      {/* Footer Disclaimer */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-600 leading-relaxed">
          <strong>Medical disclaimer:</strong> Information on this page is for
          educational purposes only and does not replace medical advice. If you
          have concerns about your health, please consult with a healthcare
          provider.{" "}
          <Link href="/disclaimer" className="text-[#0F4C3A] hover:underline">
            View full disclaimer
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
