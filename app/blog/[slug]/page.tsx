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
import { WhyTrustParsley } from "@/src/components/ui/WhyTrustParsley";
import { KeyTakeaways } from "@/src/components/ui/KeyTakeaways";
import { StickyTableOfContents } from "@/src/components/ui/StickyTableOfContents";
import { PullQuote } from "@/src/components/ui/PullQuote";
import { SourcesToggle } from "@/src/components/ui/SourcesToggle";
import {
  calculateReadTime,
  extractHeadings,
  injectHeadingIds,
  insertBridgeCTAAfterSecondH2,
} from "@/src/utils/blogUtils";

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

  // Process content for headings and read time
  let processedBodyHtml = injectHeadingIds(blog.bodyHtml);
  const headings = extractHeadings(processedBodyHtml);
  const readTime = calculateReadTime(blog.bodyHtml);
  
  // Use updatedDate if available, otherwise fall back to publishedDate
  const updatedDate = blog.publishedDate; // In future, add updatedDate field to BlogPost type

  // Create Bridge CTA HTML to insert after second H2 - Editorial Pause Style
  const bridgeCTAHtml = `
    <div class="bridge-cta-wrapper my-16 text-center">
      <p class="text-2xl font-serif italic text-gray-700 mb-4 leading-relaxed">Still feeling off? Our doctors look deeper.</p>
      <a href="/care/${care.slug}" class="text-[#0F4C3A] hover:text-[#1a6b52] font-medium underline underline-offset-2 text-lg">Check Eligibility →</a>
    </div>
  `;

  // Insert Bridge CTA after second H2
  processedBodyHtml = insertBridgeCTAAfterSecondH2(processedBodyHtml, bridgeCTAHtml);

  return (
    <div className="relative lg:pr-[20rem] xl:pr-[22rem]">
      {/* Unified Header - Clean White Background */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: condition.name, href: `/conditions/${condition.slug}` },
          { label: blog.title },
        ]}
      />

      <h1 className="text-5xl font-bold text-[#0F4C3A] mb-3 leading-tight mt-6">
        {blog.title}
      </h1>

      {/* Simple Byline - Neutral Gray */}
      <div className="text-sm text-gray-500 mb-8">
        By {blog.author}
        {blog.reviewedBy && (
          <> | Medically Reviewed by {blog.reviewedBy}</>
        )}
        {" | Updated "}
        {new Date(updatedDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        {" · "}
        {readTime} min read
      </div>

      <Link
        href={`/conditions/${condition.slug}`}
        className="text-sm text-[#0F4C3A] hover:text-[#1a6b52] mb-8 inline-block font-medium"
      >
        Learn more about {condition.name} →
      </Link>

      {/* Lead Paragraph - Editorial Style */}
      <p className="text-xl text-gray-800 leading-relaxed mb-8 font-serif max-w-3xl">
        Feeling unheard? You are not alone. We look deeper to find the root cause.
      </p>

      {/* Key Takeaways (Enhanced TL;DR) */}
      <KeyTakeaways bullets={blog.tldrBullets} />

      {/* Sticky Table of Contents (Desktop Only) */}
      <StickyTableOfContents headings={headings} />

      {/* Root Cause Pull Quote - First strategic placement */}
      <div className="max-w-4xl">
        <PullQuote
          quote="Normal is not the same as optimal. At Parsley Health, we look beyond standard reference ranges to understand what's truly happening in your body."
        />
      </div>

      {/* Body Content with Structure */}
      <div className="prose prose-neutral max-w-4xl mb-12 prose-lg prose-headings:mt-12">
        <div dangerouslySetInnerHTML={{ __html: processedBodyHtml }} />
        
        {/* Root Cause Pull Quote - Second strategic placement */}
        <PullQuote
          quote="A root cause approach means we don't just treat symptoms—we find what's driving them and address it at the source."
        />
        
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
      <div className="max-w-4xl">
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
      </div>

      {/* Next Steps */}
      <div className="max-w-4xl">
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
      </div>

      {/* E-E-A-T: Why Trust Parsley */}
      <div className="max-w-4xl">
        <WhyTrustParsley />
      </div>

      {/* Sources & Citations Toggle */}
      <div className="max-w-4xl">
        <SourcesToggle
          sources={[
            {
              id: 1,
              citation:
                'Shoemaker, R. C., & House, D. E. (2006). Sick building syndrome in water-damaged buildings: Generalizability of the biotoxin pathway. <span class="italic">Journal of Environmental Health</span>.',
            },
            {
              id: 2,
              citation:
                'Brewer, J. H., et al. (2013). Detection of mycotoxins in patients with chronic fatigue syndrome. <span class="italic">Toxins</span>.',
            },
            {
              id: 3,
              citation:
                'Rea, W. J., et al. (2003). Effects of toxic exposure to molds and mycotoxins in building-related illnesses. <span class="italic">Archives of Environmental Health</span>.',
            },
            {
              id: 4,
              citation:
                'Hope, J. (2013). A review of the mechanism of injury and treatment approaches for illness resulting from exposure to water-damaged buildings, mold, and mycotoxins. <span class="italic">Scientific World Journal</span>.',
            },
          ]}
        />
      </div>

      {/* Footer Disclaimer */}
      <div className="max-w-4xl mt-12 pt-8 border-t border-gray-200">
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
