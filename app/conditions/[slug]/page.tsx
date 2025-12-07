import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getConditionBySlug,
  getCareBySlug,
  getLabsBySlug,
} from "@/src/data/content";
import { Breadcrumbs } from "@/src/components/ui/Breadcrumbs";
import { CTAButton } from "@/src/components/ui/CTAButton";
import { FAQAccordion } from "@/src/components/ui/FAQAccordion";
import { Chip } from "@/src/components/ui/Chip";

interface ConditionPageProps {
  params: Promise<{ slug: string }>;
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

      {/* ============================================ */}
      {/* CONTAINER 1: THE EMPATHY HEADER (White Background) */}
      {/* ============================================ */}
      <div className="mb-12">
        <h1 className="text-5xl font-serif font-bold text-[#0F4C3A] mb-4 leading-tight">
          {condition.name}
        </h1>
        
        {/* Simple Byline */}
        <div className="text-sm text-gray-500 mb-8">
          By Parsley Health | Medically Reviewed by{" "}
          <Link href="/team/sarah-johnson" className="text-[#0F4C3A] hover:underline">
            Dr. Sarah Johnson, MD
          </Link>{" "}
          | Updated {new Date("2024-12-01").toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        {/* Validation Intro Text - Large Serif */}
        <p className="text-3xl font-serif text-gray-900 leading-relaxed mb-8 max-w-4xl">
          Feeling unheard? You aren't crazy. If your standard labs are 'normal' but you still feel sick, we look deeper to find the root cause.
        </p>

        <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-4xl">
          {condition.description}
          {topSymptoms.length > 0 && (
            <> Common symptoms include {topSymptoms.join(" and ")}.</>
          )}
        </p>
      </div>

      {/* ============================================ */}
      {/* CONTAINER 2: THE PROBLEM (Light Gray Background) */}
      {/* ============================================ */}
      <div className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20">
        {/* Symptoms Section */}
        <div id="symptoms" className="mb-12">
          <h2 className="text-4xl font-serif font-bold text-[#0F4C3A] mb-12">Common symptoms of {condition.name.toLowerCase()}</h2>
          {condition.commonSymptoms ? (
            <>
              {/* Simplified 2-Column Bullet List */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  ...(condition.commonSymptoms.brainAndMood || []).slice(0, 2),
                  ...(condition.commonSymptoms.energyAndSleep || []).slice(0, 2),
                  ...(condition.commonSymptoms.sinusAndBreathing || []).slice(0, 1),
                  ...(condition.commonSymptoms.gutAndDigestion || []).slice(0, 1),
                ]
                  .slice(0, 6)
                  .map((symptom, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#0F4C3A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-800 leading-relaxed text-lg">{symptom}</span>
                    </div>
                  ))}
              </div>

              {/* Body System Breakdown Accordion - Minimalist Text Link */}
              <FAQAccordion
                items={[
                  {
                    question: "+ View Full Symptom List",
                    answer: (
                      <div className="grid md:grid-cols-3 gap-6 pt-4">
                        <div>
                          <h4 className="font-semibold text-[#0F4C3A] mb-3 text-base">Neurological</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed mb-4">
                            <li>Brain fog</li>
                            <li>Memory loss</li>
                            <li>Inability to find words</li>
                            <li>Anxiety</li>
                            <li>Depression</li>
                            <li>Insomnia</li>
                            <li>Dizziness/vertigo</li>
                          </ul>
                          <p className="text-xs text-gray-600 leading-relaxed mb-3">
                            Neurological symptoms of mold toxicity occur because mycotoxins can cross the blood-brain barrier and directly affect brain function. <strong>Brain fog</strong> differs from <strong>memory loss</strong> in that fog creates a feeling of mental cloudiness and difficulty concentrating, while memory loss involves actual difficulty recalling past events or information. <strong>Word-finding difficulties</strong> are particularly common—you know what you want to say but can't retrieve the word. <strong>Anxiety and depression spikes</strong> often occur because mycotoxins disrupt neurotransmitter function, particularly affecting serotonin and dopamine pathways. These symptoms often worsen in damp environments or after exposure to water-damaged buildings, and may fluctuate based on exposure levels.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#0F4C3A] mb-3 text-base">Physical</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed mb-4">
                            <li>Static shocks (classic sign)</li>
                            <li>Metallic taste in mouth</li>
                            <li>Joint pain</li>
                            <li>Muscle weakness</li>
                            <li>Unexplained fatigue</li>
                            <li>Ice pick pain</li>
                            <li>Night sweats</li>
                            <li>Unexplained weight gain</li>
                          </ul>
                          <p className="text-xs text-gray-600 leading-relaxed mb-3">
                            <strong>Static shocks</strong> are a key mold differentiator—they occur because mycotoxins disrupt the electrical conductivity of your body's tissues, creating an imbalance that manifests as static electricity. This symptom is so specific to mold toxicity that many clinicians consider it a diagnostic clue. <strong>Ice pick pain</strong> refers to sudden, sharp, stabbing pains that come and go unpredictably, often in the head or joints. The <strong>metallic taste</strong> results from mycotoxins affecting taste receptors or from detoxification processes releasing stored toxins. <strong>Night sweats</strong> occur as your body attempts to eliminate toxins through the skin during sleep. <strong>Unexplained weight gain</strong> often relates to leptin resistance—mycotoxins can disrupt leptin signaling, making it difficult for your brain to recognize when you're full, leading to increased appetite and metabolic dysfunction.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#0F4C3A] mb-3 text-base">Respiratory/Immune</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed mb-4">
                            <li>Shortness of breath</li>
                            <li>Chronic sinus congestion</li>
                            <li>Recurring infections</li>
                            <li>Chemical sensitivities (reacting to perfumes)</li>
                            <li>Air hunger</li>
                            <li>Post-nasal drip</li>
                          </ul>
                          <p className="text-xs text-gray-600 leading-relaxed mb-3">
                            Respiratory symptoms occur when mold spores and mycotoxins trigger immune responses in the airways. <strong>Air hunger</strong> is a distinct sensation where you feel like you can't get enough air, even when breathing normally—this differs from shortness of breath and often indicates systemic inflammation affecting lung function. <strong>Chronic sinus congestion</strong> and <strong>post-nasal drip</strong> result from the body's attempt to flush out inhaled mold spores and mycotoxins, creating constant mucus production. <strong>Recurring infections</strong> happen because mycotoxins suppress immune function, making you more susceptible to bacterial and viral invaders. <strong>Chemical sensitivities</strong> develop as the immune system becomes overwhelmed and starts reacting to multiple triggers—this is often called "mast cell activation" and can cause reactions to perfumes, cleaning products, and other environmental chemicals that never bothered you before.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </>
          ) : (
            <div className="text-gray-700 leading-relaxed text-lg">
              <p className="mb-4">
                Symptoms of {condition.name.toLowerCase()} can vary widely and may include:
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
        </div>
      </div>

      {/* ============================================ */}
      {/* CONTAINER 3: THE SOLUTION (White Background) */}
      {/* ============================================ */}
      <div className="py-20">
        {/* Diagnosis Section */}
        <div id="diagnosis" className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-[#0F4C3A] mb-12">Diagnosis and testing</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              A functional medicine clinician will take a detailed history, review your symptom patterns, and may order targeted lab testing to understand what's driving your symptoms and how to best address them.
            </p>
            {labs && (
              <div className="mt-8">
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
                <Link href={`/labs/${labs.slug}`} className="text-[#0F4C3A] hover:text-[#1a6b52] font-medium underline underline-offset-2">
                  View {condition.shortName.toLowerCase()} panel →
                </Link>
              </div>
            )}

            {/* Testing Deep Dive Accordion */}
            <div className="mt-12">
              <FAQAccordion
                items={[
                  {
                    question: "+ View Testing Deep Dive",
                    answer: (
                      <div className="space-y-6 pt-4">
                        <div>
                          <h4 className="font-semibold text-[#0F4C3A] mb-3 text-lg">The Failure of Standard Blood Tests</h4>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Standard <strong>IgE allergy tests</strong> fail to detect mold toxicity because they test for <strong>allergic reactions</strong>, not <strong>toxicity</strong>. An allergy occurs when your immune system recognizes mold spores as foreign invaders and produces IgE antibodies to fight them. However, mold toxicity is different—it occurs when mycotoxins (toxic chemicals produced by molds) enter your body and cause cellular damage, inflammation, and multi-system symptoms. Your body may not produce IgE antibodies to mycotoxins because they're not allergens—they're poisons. This is why someone can have severe mold toxicity symptoms but test negative on standard allergy panels. Additionally, standard blood tests only measure what's currently circulating in your bloodstream, but mycotoxins are fat-soluble and tend to store in fatty tissues, organs, and the brain, making them difficult to detect in routine blood work.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#0F4C3A] mb-3 text-lg">The Parsley Method: Urine Mycotoxin Testing</h4>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Urine Mycotoxin Testing</strong> is the gold standard for detecting mold toxicity because it measures the actual toxic compounds (mycotoxins) that molds produce, not just allergic reactions. This test analyzes a urine sample for specific mycotoxins that have been processed by your liver and are being eliminated through your kidneys. The test looks for common mycotoxins including <strong>Ochratoxin A</strong> (produced by Aspergillus and Penicillium species, linked to kidney damage and immune suppression), <strong>Aflatoxin</strong> (produced by Aspergillus flavus, one of the most carcinogenic mycotoxins, associated with liver damage), and <strong>Trichothecenes</strong> (produced by Stachybotrys, Fusarium, and other water-damaged building molds, known for causing severe neurological symptoms and immune suppression). The test also measures <strong>Gliotoxin</strong> (produced by Aspergillus fumigatus, suppresses immune function) and <strong>Citrinin</strong> (produced by Penicillium and Aspergillus, linked to kidney toxicity). By identifying which specific mycotoxins are present in your body, clinicians can tailor treatment protocols to address the specific toxins affecting you.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#0F4C3A] mb-3 text-lg">Genetics: HLA-DR Gene Testing</h4>
                          <p className="text-gray-700 leading-relaxed">
                            <strong>HLA-DR gene testing</strong> is crucial because approximately 25% of the population carries genetic variants that impair their ability to recognize and eliminate mycotoxins. The HLA-DR (Human Leukocyte Antigen-DR) genes code for proteins that help your immune system identify foreign substances, including mycotoxins. Certain variants, particularly HLA-DR 4-3-53, HLA-DR 7-2-2, and HLA-DR 13-6-2, create a "susceptibility" to mold toxicity—your immune system doesn't recognize mycotoxins as threats, so they accumulate in your body instead of being eliminated. People with these genetic variants often experience more severe symptoms and require longer treatment protocols. Understanding your genetic susceptibility helps clinicians determine treatment intensity, predict recovery timelines, and explain why some people develop severe symptoms after minimal exposure while others remain unaffected. This genetic testing is typically done through a simple cheek swab or blood test and provides valuable information for personalized treatment planning.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* The Functional Perspective - Moved Here */}
        <div id="functional-perspective" className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-[#0F4C3A] mb-12">The Functional Perspective</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Conventional Approach Column */}
            <div>
              <h3 className="text-xl font-semibold text-gray-600 mb-6">
                Conventional Approach
              </h3>
              <ul className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <li>Relies on basic allergy tests (IgE) or air quality checks that miss hidden mold.</li>
                <li>Treats surface symptoms: Nasal sprays, antidepressants, or sleep aids.</li>
              </ul>
            </div>

            {/* Root-Cause Approach Column */}
            <div>
              <h3 className="text-xl font-semibold text-[#0F4C3A] mb-6">
                Root-Cause Approach
              </h3>
              <ul className="space-y-4 text-gray-900 leading-relaxed text-lg">
                <li>Functional medicine looks at advanced testing like Urine Mycotoxin panels to see if toxins are stored in your body, plus genetic (HLA-DR) susceptibility testing.</li>
                <li>A root-cause approach removes the source: Prescription binders (Charcoal, Clay) can pull toxins out, while glutathione supports liver detoxification pathways.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Treatment Section */}
        <div id="treatment" className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-[#0F4C3A] mb-12">{`How ${condition.name.toLowerCase()} is treated`}</h2>
          <div className="space-y-12 text-gray-700 leading-relaxed text-lg">
            <p>
              Treatment for {condition.name.toLowerCase()} takes a comprehensive approach that addresses root causes rather than just managing symptoms. Here's what a root-cause treatment plan typically includes:
            </p>

            <div>
              <h3 className="text-2xl font-semibold text-[#0F4C3A] mb-4">
                Remove Exposure and Reduce Toxin Burden
              </h3>
              <p>
                The first step in treating {condition.name.toLowerCase()} is identifying and eliminating sources of exposure. This may involve environmental testing, working with remediation specialists, and making lifestyle adjustments to reduce ongoing exposure.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0F4C3A] mb-4">
                Support Detoxification and Gut Health
              </h3>
              <p>
                Supporting your body's natural detoxification pathways is essential for recovery. This includes optimizing liver function, supporting methylation pathways, and ensuring adequate nutrient status. Gut health plays a crucial role in detoxification, as a healthy microbiome helps bind and eliminate toxins.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0F4C3A] mb-4">
                Calm the Immune System and Reduce Inflammation
              </h3>
              <p>
                Chronic inflammation is often a key driver of symptoms in {condition.name.toLowerCase()}. A functional medicine approach works to identify inflammatory triggers and support immune balance through targeted nutrition, stress management, and lifestyle modifications.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0F4C3A] mb-4">
                Rebuild Resilience and Long-term Health
              </h3>
              <p>
                Long-term recovery involves rebuilding your nervous system resilience and overall health. This includes optimizing nutrition, managing stress, improving sleep quality, and developing sustainable lifestyle habits that support your body's natural healing capacity.
              </p>
            </div>

            {/* Protocol Details Accordion */}
            <div className="mt-12">
              <FAQAccordion
                items={[
                  {
                    question: "+ View Protocol Details",
                    answer: (
                      <div className="space-y-6 pt-4">
                        <div>
                          <h4 className="font-semibold text-[#0F4C3A] mb-3 text-lg">Binders: The Foundation of Detoxification</h4>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Binders</strong> are substances that bind to mycotoxins in your digestive tract, preventing them from being reabsorbed into your bloodstream. This is crucial because of a process called <strong>enterohepatic recirculation</strong>—your liver processes toxins and sends them to your intestines via bile, but if they're not bound and eliminated, they get reabsorbed back into your bloodstream, creating a toxic cycle. <strong>Activated Charcoal</strong> is a highly porous form of carbon that adsorbs (binds to its surface) a wide range of mycotoxins, particularly effective for Ochratoxin A and Aflatoxin. <strong>Bentonite Clay</strong> is a natural clay with a negative charge that attracts positively charged mycotoxins, and it also helps heal gut lining damage. <strong>Zeolite</strong> is a crystalline mineral with a cage-like structure that traps mycotoxins inside, making it particularly effective for smaller molecules. Prescription binders like <strong>Cholestyramine</strong> and <strong>Welchol</strong> are often used for severe cases—they're bile acid sequestrants that bind mycotoxins in the intestines. Binders must be taken away from food and medications (typically 30-60 minutes before or 2 hours after) to avoid binding nutrients, and they're usually rotated every few months to prevent adaptation.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#0F4C3A] mb-3 text-lg">Antifungals: Addressing Colonization</h4>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Many people with mold toxicity also have <strong>mold colonization</strong>—mold growing inside their bodies, particularly in the sinuses and gut. This creates a constant source of mycotoxin exposure even after leaving a contaminated environment. <strong>Nasal sprays</strong> containing antifungals like <strong>Amphotericin B</strong> or <strong>Itraconazole</strong> are used to treat sinus colonization, which is common because the sinuses provide a warm, moist environment perfect for mold growth. <strong>Oral antifungals</strong> like <strong>Nystatin</strong> (which stays in the gut and doesn't absorb systemically) or prescription antifungals like <strong>Fluconazole</strong> or <strong>Voriconazole</strong> may be used for gut colonization or systemic fungal infections. Natural antifungals like <strong>Oregano oil</strong>, <strong>Caprylic acid</strong>, and <strong>Grapefruit seed extract</strong> are often used as supportive therapies. Treatment duration varies based on colonization severity and individual response, typically ranging from several weeks to several months.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#0F4C3A] mb-3 text-lg">Liver Support: Glutathione and NAC</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Your liver is responsible for processing and eliminating mycotoxins through two phases of detoxification. <strong>Glutathione</strong> is your body's master antioxidant and is essential for Phase II detoxification, where toxins are made water-soluble and ready for elimination. However, mycotoxins deplete glutathione stores, creating a vicious cycle. <strong>Liposomal Glutathione</strong> is preferred because the liposomal delivery system protects glutathione from being broken down in the digestive tract, allowing more to reach your cells. Typical dosing ranges from 250-500mg twice daily. <strong>N-Acetyl Cysteine (NAC)</strong> is a precursor to glutathione—your body converts NAC into glutathione, helping rebuild depleted stores. NAC also helps break down mucus in the sinuses and lungs, which is helpful for respiratory symptoms. Typical dosing is 600-1200mg twice daily. Other liver support nutrients include <strong>Milk Thistle</strong> (silymarin), <strong>Alpha-Lipoic Acid</strong>, and <strong>B-vitamins</strong> (especially B12, B6, and Folate) which support methylation pathways. These supplements work synergistically with binders to support your body's natural detoxification processes.
                          </p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* CONTAINER 4: THE GIFT (Light Green Tint) */}
      {/* ============================================ */}
      <div className="bg-green-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-serif font-bold text-[#0F4C3A] mb-4">Start Healing Today (Free Advice)</h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl">
            These dietary and lifestyle changes can support your body's natural healing processes.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-[#0F4C3A] mb-6">Foods to Eat</h3>
              <ul className="space-y-4 text-gray-800 leading-relaxed text-lg mb-6">
                <li><strong>Arugula</strong> and other bitter greens stimulate bile production, helping your liver process and eliminate toxins.</li>
                <li><strong>Broccoli</strong> and other cruciferous vegetables contain sulforaphane, which activates Phase II detoxification pathways.</li>
                <li><strong>Olive oil and avocado</strong> provide healthy fats essential for transporting and eliminating fat-soluble mycotoxins.</li>
              </ul>
              <div className="bg-white/50 p-4 rounded-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Bitters</strong> like <strong>Arugula</strong> and <strong>Dandelion greens</strong> stimulate bile flow, which is essential for eliminating fat-soluble mycotoxins. Bile acts as a natural detergent, emulsifying toxins so they can be properly processed and eliminated. <strong>Cruciferous vegetables</strong> (broccoli, cauliflower, Brussels sprouts, cabbage) contain <strong>Sulforaphane</strong>, a powerful compound that activates Phase II detoxification enzymes in your liver, helping convert toxins into water-soluble forms that can be excreted. <strong>Adequate hydration</strong> (aim for half your body weight in ounces of water daily) is crucial because mycotoxins are eliminated through urine, and dehydration can slow this process. Include healthy fats like <strong>olive oil</strong>, <strong>avocado</strong>, and <strong>coconut oil</strong> in moderation—mycotoxins are fat-soluble and need healthy fats for proper transport, but excessive fat can slow digestion and reduce binder effectiveness.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0F4C3A] mb-6">Foods to Avoid</h3>
              <ul className="space-y-4 text-gray-800 leading-relaxed text-lg mb-6">
                <li><strong>Sugar</strong> feeds fungal overgrowth in your gut and can worsen inflammation.</li>
                <li><strong>Yeast</strong> and fermented foods may trigger cross-reactions if you're sensitive to mold.</li>
                <li><strong>Alcohol</strong> places additional stress on your liver, which is already working hard to process mycotoxins.</li>
              </ul>
              <div className="bg-white/50 p-4 rounded-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>High-sugar fruits</strong> like <strong>Bananas</strong> and <strong>Grapes</strong> should be avoided because sugar feeds fungal overgrowth in your gut, creating an environment where mold can thrive. <strong>Fermented foods</strong> including <strong>Kombucha</strong>, <strong>Kefir</strong>, <strong>Sauerkraut</strong>, and <strong>Kimchi</strong> contain live cultures that may cross-react if you're sensitive to mold species. <strong>Cheese</strong> (especially aged varieties) often contains mold and mycotoxins, and the high fat content can slow digestion, reducing binder effectiveness. <strong>Alcohol</strong> places significant stress on your liver, which is already working overtime to process mycotoxins—it also depletes glutathione and B-vitamins needed for detoxification. <strong>Mushrooms</strong> should be avoided because they're fungi and may trigger immune reactions or cross-reactions in people with mold sensitivity. Processed grains (especially corn and wheat) are often contaminated with mycotoxins during storage, so choose fresh, organic options if grains are included in your diet.
                </p>
              </div>
            </div>
          </div>

          {/* Lifestyle Tip */}
          <div className="mt-12 pt-12 border-t border-green-200">
            <h3 className="text-2xl font-semibold text-[#0F4C3A] mb-4">Lifestyle Support</h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Sweating via sauna or exercise is a primary detox pathway.</strong> Regular sauna sessions (15-20 minutes, 3-4 times per week) or moderate exercise that makes you sweat can help your body eliminate stored toxins through the skin. Always stay hydrated and listen to your body—if you feel lightheaded, stop immediately.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* CONTAINER 5: THE ASK (Dark Brand Background) */}
      {/* ============================================ */}
      <div className="bg-[#0F4C3A] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Ready to go deeper?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Book your comprehensive testing.
          </p>
          <CTAButton href={`/care/${care.slug}`} variant="secondary" className="text-lg px-8 py-4 bg-white text-[#0F4C3A] hover:bg-gray-100">
            Get started
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
