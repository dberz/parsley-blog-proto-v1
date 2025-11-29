import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getConditionBySlug,
  getCareBySlug,
  getLabsBySlug,
  blogPosts,
  conditionHubs,
} from "@/src/data/content";
import { Breadcrumbs } from "@/src/components/ui/Breadcrumbs";
import { Card } from "@/src/components/ui/Card";
import { CTAButton } from "@/src/components/ui/CTAButton";
import { FAQAccordion } from "@/src/components/ui/FAQAccordion";
import { Section } from "@/src/components/ui/Section";
import { ClinicalAttribution } from "@/src/components/ui/ClinicalAttribution";
import { WhyTrustParsley } from "@/src/components/ui/WhyTrustParsley";
import { Chip } from "@/src/components/ui/Chip";

interface ConditionPageProps {
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

export default async function ConditionPage({ params }: ConditionPageProps) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    notFound();
  }

  const care = getCareBySlug(condition.primaryCareSlug);
  if (!care) {
    notFound();
  }

  const labs = condition.primaryLabSlug
    ? getLabsBySlug(condition.primaryLabSlug)
    : undefined;

  const relatedBlogs = blogPosts.filter(
    (b) => b.primaryConditionSlug === condition.slug
  );

  const relatedConditions = condition.relatedSlugs
    .map((s) => getConditionBySlug(s))
    .filter((c): c is NonNullable<typeof c> => c !== undefined);

  // Get top symptoms for lead paragraph
  const topSymptoms = condition.commonSymptoms
    ? [
        ...(condition.commonSymptoms.brainAndMood || []).slice(0, 2),
        ...(condition.commonSymptoms.energyAndSleep || []).slice(0, 1),
      ].slice(0, 2)
    : ["fatigue", "brain fog"];

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Conditions", href: "/conditions" },
          { label: condition.name },
        ]}
      />

      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-[#0F4C3A] mb-6 leading-tight">
          {condition.name}
        </h1>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          {condition.description}
          {topSymptoms.length > 0 && (
            <> Common symptoms include {topSymptoms.join(" and ")}.</>
          )}
        </p>

        <div className="flex flex-wrap gap-4 mb-6">
          <CTAButton href={`/care/${care.slug}`} variant="primary">
            Get care for {condition.name}
          </CTAButton>
          {labs && (
            <CTAButton href={`#diagnosis`} variant="secondary">
              View {condition.shortName.toLowerCase()} testing panel
            </CTAButton>
          )}
        </div>

        <ClinicalAttribution
          reviewedByName="Dr. Sarah Johnson"
          reviewedByCredentials="MD"
          reviewedByRole="Functional Medicine Physician at Parsley Health"
          reviewedByLink="/team/sarah-johnson"
          reviewedDate="2024-12-01"
        />
      </div>

      {/* Mobile Anchor Nav */}
      <div className="md:hidden mb-8 pb-4 border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="flex space-x-6 overflow-x-auto">
          <a
            href="#at-a-glance"
            className="text-sm text-[#0F4C3A] font-medium whitespace-nowrap hover:text-[#1a6b52]"
          >
            Overview
          </a>
          <a
            href="#symptoms"
            className="text-sm text-[#0F4C3A] font-medium whitespace-nowrap hover:text-[#1a6b52]"
          >
            Symptoms
          </a>
          <a
            href="#causes"
            className="text-sm text-[#0F4C3A] font-medium whitespace-nowrap hover:text-[#1a6b52]"
          >
            Causes
          </a>
          <a
            href="#diagnosis"
            className="text-sm text-[#0F4C3A] font-medium whitespace-nowrap hover:text-[#1a6b52]"
          >
            Diagnosis
          </a>
          <a
            href="#treatment"
            className="text-sm text-[#0F4C3A] font-medium whitespace-nowrap hover:text-[#1a6b52]"
          >
            Treatment
          </a>
        </div>
      </div>

      {/* At a Glance */}
      <Section id="at-a-glance" title="At a glance">
        <Card>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[#0F4C3A] mb-2">What it is</h3>
              <p className="text-gray-700 mb-4">{condition.description}</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0F4C3A] mb-2">
                Common symptoms
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                {condition.commonSymptoms ? (
                  <>
                    {condition.commonSymptoms.brainAndMood
                      ?.slice(0, 3)
                      .map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    {condition.commonSymptoms.energyAndSleep
                      ?.slice(0, 2)
                      .map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                  </>
                ) : (
                  <>
                    <li>Brain fog</li>
                    <li>Fatigue</li>
                    <li>Sinus issues</li>
                    <li>Digestive problems</li>
                  </>
                )}
              </ul>
            </div>
            {condition.whoItAffects && (
              <div>
                <h3 className="font-semibold text-[#0F4C3A] mb-2">
                  Who it affects
                </h3>
                <p className="text-gray-700">{condition.whoItAffects}</p>
              </div>
            )}
            {condition.whenToGetHelp && (
              <div>
                <h3 className="font-semibold text-[#0F4C3A] mb-2">
                  When to get help
                </h3>
                <p className="text-gray-700">{condition.whenToGetHelp}</p>
              </div>
            )}
          </div>
        </Card>
      </Section>

      {/* Symptoms Section */}
      <Section id="symptoms" title={`Common symptoms of ${condition.name.toLowerCase()}`}>
        {condition.commonSymptoms ? (
          <div className="grid md:grid-cols-2 gap-8">
            {condition.commonSymptoms.brainAndMood && (
              <div>
                <h3 className="font-semibold text-[#0F4C3A] mb-3 text-lg">
                  Brain and mood
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {condition.commonSymptoms.brainAndMood.map((symptom, i) => (
                    <li key={i}>{symptom}</li>
                  ))}
                </ul>
              </div>
            )}
            {condition.commonSymptoms.energyAndSleep && (
              <div>
                <h3 className="font-semibold text-[#0F4C3A] mb-3 text-lg">
                  Energy and sleep
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {condition.commonSymptoms.energyAndSleep.map((symptom, i) => (
                    <li key={i}>{symptom}</li>
                  ))}
                </ul>
              </div>
            )}
            {condition.commonSymptoms.sinusAndBreathing && (
              <div>
                <h3 className="font-semibold text-[#0F4C3A] mb-3 text-lg">
                  Sinus and breathing
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {condition.commonSymptoms.sinusAndBreathing.map(
                    (symptom, i) => (
                      <li key={i}>{symptom}</li>
                    )
                  )}
                </ul>
              </div>
            )}
            {condition.commonSymptoms.gutAndDigestion && (
              <div>
                <h3 className="font-semibold text-[#0F4C3A] mb-3 text-lg">
                  Gut and digestion
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {condition.commonSymptoms.gutAndDigestion.map(
                    (symptom, i) => (
                      <li key={i}>{symptom}</li>
                    )
                  )}
                </ul>
              </div>
            )}
            {condition.commonSymptoms.other && (
              <div>
                <h3 className="font-semibold text-[#0F4C3A] mb-3 text-lg">
                  Other symptoms
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {condition.commonSymptoms.other.map((symptom, i) => (
                    <li key={i}>{symptom}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
              Symptoms of {condition.name.toLowerCase()} can vary widely and may
              include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fatigue</li>
              <li>Brain fog</li>
              <li>Digestive issues</li>
              <li>Mood changes</li>
              <li>Sleep problems</li>
            </ul>
          </div>
        )}
      </Section>

      {/* Causes and Risk Factors */}
      {(condition.causes || condition.riskFactors) && (
        <Section id="causes" title={`What causes ${condition.name.toLowerCase()}`}>
          {condition.causes && (
            <div className="mb-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                {condition.description} Common causes include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                {condition.causes.map((cause, i) => (
                  <li key={i}>{cause}</li>
                ))}
              </ul>
            </div>
          )}
          {condition.riskFactors && (
            <div>
              <h3 className="font-semibold text-[#0F4C3A] mb-3 text-lg">
                Risk factors
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                {condition.riskFactors.map((factor, i) => (
                  <li key={i}>{factor}</li>
                ))}
              </ul>
            </div>
          )}
        </Section>
      )}

      {/* Diagnosis and Testing */}
      <Section id="diagnosis" title="Diagnosis and testing">
        <p className="text-gray-700 mb-6 leading-relaxed">
          A Parsley clinician will take a detailed history, review your symptom
          patterns, and may order targeted lab testing to understand what's
          driving your symptoms and how to best address them.
        </p>

        {labs && (
          <Card className="mb-6">
            <h3 className="text-xl font-semibold text-[#0F4C3A] mb-3">
              {labs.name}
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {labs.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {labs.biomarkers.map((biomarker, index) => (
                <Chip key={index} label={biomarker} />
              ))}
            </div>
            <CTAButton href={`/labs/${labs.slug}`} variant="primary">
              View {condition.shortName.toLowerCase()} panel
            </CTAButton>
          </Card>
        )}

        <div className="mt-6">
          <h3 className="font-semibold text-[#0F4C3A] mb-3">
            Other labs we may use
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
            <li>Comprehensive metabolic panel</li>
            <li>Inflammatory markers</li>
            <li>Immune function markers</li>
            <li>Gut health markers</li>
          </ul>
        </div>
      </Section>

      {/* Treatment and Care */}
      <Section id="treatment" title={`How we treat ${condition.name.toLowerCase()}`}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <h3 className="font-semibold text-[#0F4C3A] mb-3">
              Remove exposure
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The first step is identifying and removing sources of mold
              exposure in your environment. This may involve environmental
              testing and remediation.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-[#0F4C3A] mb-3">
              Support detox and gut health
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Supporting your body's natural detoxification pathways and
              repairing gut health helps reduce symptoms like brain fog and
              digestive issues.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-[#0F4C3A] mb-3">
              Calm the immune system
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Reducing inflammation and supporting immune balance helps prevent
              symptom flares and supports long-term recovery.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-[#0F4C3A] mb-3">
              Rebuild resilience
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Long-term recovery involves rebuilding your nervous system and
              overall resilience through targeted nutrition, stress management,
              and lifestyle support.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <CTAButton href={`/care/${care.slug}`} variant="primary">
            See care options
          </CTAButton>
        </div>
      </Section>

      {/* What to Expect */}
      <Section title="What to expect with Parsley care">
        <div className="bg-[#F5F5F0] rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-[#0F4C3A] mb-2">
                Initial visit
              </h3>
              <p className="text-gray-700 text-sm">
                Your clinician will take a comprehensive history, review
                symptoms, and order targeted testing to understand your unique
                situation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0F4C3A] mb-2">Testing</h3>
              <p className="text-gray-700 text-sm">
                Based on your history and symptoms, your clinician may recommend
                specific lab panels to identify root causes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0F4C3A] mb-2">
                Follow-up care
              </h3>
              <p className="text-gray-700 text-sm">
                Regular check-ins with your clinician and health coach help you
                stay on track and adjust your plan as needed.
              </p>
            </div>
          </div>
          <div className="text-center">
            <CTAButton href={`/care/${care.slug}`} variant="primary">
              See membership details
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* Expert Care and E-E-A-T */}
      <Section title="Expert care">
        <div className="mb-6">
          <ClinicalAttribution
            reviewedByName="Dr. Sarah Johnson"
            reviewedByCredentials="MD"
            reviewedByRole="Functional Medicine Physician at Parsley Health"
            reviewedByLink="/team/sarah-johnson"
            reviewedDate="2024-12-01"
          />
          <p className="text-gray-700 leading-relaxed">
            {condition.name} is treated by our clinicians who specialize in
            complex chronic conditions and environmental medicine.
          </p>
        </div>
        <WhyTrustParsley />
      </Section>

      {/* FAQ */}
      <Section title="Frequently asked questions">
        <FAQAccordion items={condition.faq} />
      </Section>

      {/* Related Content */}
      <Section id="resources" title={`Best resources on ${condition.shortName}`}>
        {relatedBlogs.length > 0 && (
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#0F4C3A] mb-6">
              Articles and guides
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBlogs.slice(0, 5).map((blog) => {
                const excerpt = getExcerpt(blog.bodyHtml, 120);
                return (
                  <Card key={blog.slug}>
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-[#0F4C3A] uppercase tracking-wide">
                        Guide
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-[#0F4C3A] mb-2">
                      {blog.title}
                    </h4>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {excerpt}
                    </p>
                    <CTAButton href={`/blog/${blog.slug}`} variant="secondary">
                      Read article
                    </CTAButton>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {relatedConditions.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-[#0F4C3A] mb-6">
              Related conditions
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedConditions.map((related) => (
                <Card key={related.slug}>
                  <h4 className="text-lg font-semibold text-[#0F4C3A] mb-2">
                    {related.name}
                  </h4>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {related.seoSummary}
                  </p>
                  <CTAButton
                    href={`/conditions/${related.slug}`}
                    variant="secondary"
                  >
                    Learn more
                  </CTAButton>
                </Card>
              ))}
            </div>
          </div>
        )}
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
