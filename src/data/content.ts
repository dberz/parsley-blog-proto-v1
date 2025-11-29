export type ConditionHub = {
  slug: string; // "mold-toxicity"
  name: string; // "Mold & Toxicity"
  shortName: string; // "Mold"
  description: string;
  seoSummary: string; // short meta description style text
  category: string; // e.g. "Detox & Toxicity", "Gut & Digestion", "Hormones & Fertility", "Brain & Mood", "Skin", "Heart & Metabolic", "Women's Health"
  isOverview: boolean; // true for parent hubs like "Gut Health", "Women's Health Overview"
  relatedSlugs: string[]; // slugs of related conditions
  primaryCareSlug: string; // "complex-chronic"
  primaryLabSlug?: string; // "mold-mycotoxin-panel"
  faq: { question: string; answer: string }[];
  relatedBlogSlugs: string[]; // ["mold-toxicity-symptoms"]
  // New fields for structured content
  commonSymptoms?: {
    brainAndMood?: string[];
    energyAndSleep?: string[];
    sinusAndBreathing?: string[];
    gutAndDigestion?: string[];
    other?: string[];
  };
  causes?: string[];
  riskFactors?: string[];
  whoItAffects?: string;
  whenToGetHelp?: string;
};

export type BlogPost = {
  slug: string; // "how-to-treat-mold-toxicity"
  title: string;
  author: string;
  reviewedBy?: string;
  publishedDate: string; // ISO string
  primaryConditionSlug: string; // "mold-toxicity"
  tldrBullets: string[];
  bodyHtml: string; // simple HTML article content
};

export type CareService = {
  slug: string; // "complex-chronic"
  name: string; // "Parsley Complex Chronic Care"
  heroCopy: string;
  whoItHelpsConditions: string[]; // ["mold-toxicity"]
};

export type LabsPanel = {
  slug: string; // "mold-mycotoxin-panel"
  name: string;
  price: string;
  description: string;
  relatedConditionSlug: string; // "mold-toxicity"
  biomarkers: string[];
  recommendedIf: string[]; // symptom tags
};

export const conditionHubs: ConditionHub[] = [
  {
    slug: "mold-toxicity",
    name: "Mold & Toxicity",
    shortName: "Mold",
    description:
      "Mold toxicity happens when ongoing exposure to mold and mycotoxins triggers inflammation and multi system symptoms across your brain, gut, hormones, and immune system.",
    seoSummary:
      "Learn how mold toxicity shows up, how it is diagnosed, and how a root cause approach can help you feel better.",
    category: "Detox & Toxicity",
    isOverview: false,
    relatedSlugs: ["gut-health", "bloating", "brain-fog", "histamine-intolerance", "autoimmune"],
    primaryCareSlug: "complex-chronic",
    primaryLabSlug: "mold-mycotoxin-panel",
    faq: [
      {
        question: "What is mold toxicity?",
        answer:
          "Mold toxicity is a chronic response to mold exposure and the toxins molds release. It can show up as fatigue, brain fog, congestion, digestive issues, and mood symptoms that do not resolve with simple treatments.",
      },
      {
        question: "How is mold toxicity diagnosed?",
        answer:
          "Diagnosis usually combines a detailed history of water damage or damp environments, symptom patterns, and lab testing for mycotoxins and related markers when appropriate.",
      },
      {
        question: "Can mold toxicity be cured?",
        answer:
          "With proper treatment including reducing exposure, supporting detox pathways, and addressing underlying health issues, many people see significant improvement in their symptoms. Recovery time varies based on exposure duration and individual factors.",
      },
      {
        question: "How long does recovery usually take?",
        answer:
          "Recovery time varies widely, typically ranging from several months to a year or more, depending on the severity of exposure, duration of symptoms, and how well you can reduce ongoing exposure.",
      },
    ],
    relatedBlogSlugs: ["mold-toxicity-symptoms"],
    commonSymptoms: {
      brainAndMood: [
        "Brain fog and trouble concentrating",
        "Memory problems",
        "Anxiety or depression",
        "Mood swings",
      ],
      energyAndSleep: [
        "Chronic fatigue that doesn't improve with sleep",
        "Sleep disturbances",
        "Weakness",
      ],
      sinusAndBreathing: [
        "Headaches",
        "Sinus pressure or congestion",
        "Post-nasal drip",
        "Shortness of breath or chest tightness",
      ],
      gutAndDigestion: [
        "Bloating",
        "Digestive issues",
        "Nausea",
        "Food sensitivities",
      ],
      other: [
        "Unexplained muscle or joint pain",
        "Sound, light, or chemical sensitivity",
        "Skin rashes",
        "Numbness and tingling",
      ],
    },
    causes: [
      "Exposure to water-damaged buildings",
      "Long-term exposure to damp environments",
      "Poor ventilation in living or work spaces",
      "Mycotoxins released by certain types of mold",
    ],
    riskFactors: [
      "Living or working in water-damaged buildings",
      "Poor ventilation",
      "Genetic susceptibility (MTHFR variants)",
      "Weakened immune system",
      "Pre-existing chronic health conditions",
    ],
    whoItAffects: "Anyone exposed to mold, but symptoms are more severe in people with genetic susceptibilities, weakened immune systems, or prolonged exposure.",
    whenToGetHelp: "If symptoms persist for more than a few months or keep coming back despite basic treatment, it's worth looking deeper with a functional medicine approach.",
  },
  {
    slug: "sleep-insomnia",
    name: "Sleep & Insomnia",
    shortName: "Sleep",
    description:
      "Sleep issues can stem from hormonal imbalances, stress, gut health problems, or underlying conditions. A root cause approach addresses the drivers behind poor sleep.",
    seoSummary:
      "Discover how sleep problems connect to hormones, stress, and gut health, and learn about personalized approaches to better rest.",
    category: "Brain & Mood",
    isOverview: false,
    relatedSlugs: ["hormones", "adrenal-cortisol", "gut-health"],
    primaryCareSlug: "complex-chronic",
    primaryLabSlug: "sleep-hormone-panel",
    faq: [
      {
        question: "What causes sleep problems",
        answer:
          "Sleep issues can be driven by hormonal imbalances, stress and cortisol dysregulation, gut health issues, or underlying medical conditions.",
      },
      {
        question: "How is insomnia treated",
        answer:
          "Treatment focuses on identifying root causes through testing, addressing hormonal imbalances, managing stress, and optimizing sleep hygiene.",
      },
    ],
    relatedBlogSlugs: [
      "melatonin-doesnt-help-everyone-sleep",
      "waking-up-in-the-middle-of-the-night",
    ],
  },
  {
    slug: "detox",
    name: "Detox & Liver",
    shortName: "Detox",
    description:
      "Supporting your body's natural detoxification pathways is essential for overall health, especially when dealing with environmental toxins, mold exposure, or chronic symptoms.",
    seoSummary:
      "Learn how to support your body's natural detoxification systems and liver health through a functional medicine approach.",
    category: "Detox & Toxicity",
    isOverview: false,
    relatedSlugs: ["mold-toxicity", "heavy-metals", "gut-health"],
    primaryCareSlug: "complex-chronic",
    faq: [
      {
        question: "What is detoxification",
        answer:
          "Detoxification is your body's natural process of eliminating toxins through the liver, kidneys, gut, and other pathways.",
      },
      {
        question: "How can I support detoxification",
        answer:
          "Supporting detox involves reducing toxin exposure, eating nutrient-dense foods, staying hydrated, and addressing underlying gut and liver health issues.",
      },
    ],
    relatedBlogSlugs: [
      "what-i-do-when-im-feeling-heavy-tired-and-toxic",
      "how-to-detox-from-sugar",
      "how-to-cleanse-your-liver",
    ],
  },
  {
    slug: "mthfr-genetics",
    name: "MTHFR & Genetics",
    shortName: "MTHFR",
    description:
      "MTHFR gene variants can affect how your body processes folate and other nutrients, potentially impacting energy, mood, and overall health.",
    seoSummary:
      "Understand how MTHFR gene variants may affect your health and what you can do about it.",
    category: "Hormones & Fertility",
    isOverview: false,
    relatedSlugs: ["fertility", "hormones", "mold-toxicity"],
    primaryCareSlug: "complex-chronic",
    faq: [
      {
        question: "What is MTHFR",
        answer:
          "MTHFR is a gene that helps your body process folate. Variants in this gene can affect how efficiently your body uses folate and other B vitamins.",
      },
      {
        question: "Should I get tested for MTHFR",
        answer:
          "Testing may be helpful if you have symptoms like fatigue, mood issues, or difficulty with certain medications, especially if other causes have been ruled out.",
      },
    ],
    relatedBlogSlugs: ["mthfr-mutation"],
  },
  {
    slug: "candida",
    name: "Candida",
    shortName: "Candida",
    description:
      "Candida overgrowth can cause digestive symptoms, fatigue, brain fog, and other systemic issues. A functional approach addresses the root causes.",
    seoSummary:
      "Learn about candida overgrowth, its symptoms, and how a root cause approach can help restore balance.",
    category: "Gut & Digestion",
    isOverview: false,
    relatedSlugs: ["gut-health", "sibo", "bloating"],
    primaryCareSlug: "complex-chronic",
    faq: [
      {
        question: "What is candida",
        answer:
          "Candida is a type of yeast that normally lives in your body. Overgrowth can occur when the balance is disrupted, leading to various symptoms.",
      },
      {
        question: "How is candida treated",
        answer:
          "Treatment involves addressing underlying causes like gut dysbiosis, supporting immune function, and using targeted interventions to restore balance.",
      },
    ],
    relatedBlogSlugs: [
      "how-to-cure-candida-naturally",
      "strongest-candida-killer",
    ],
  },
  {
    slug: "sibo",
    name: "SIBO",
    shortName: "SIBO",
    description:
      "Small Intestinal Bacterial Overgrowth occurs when bacteria that normally live in the colon grow in the small intestine, causing digestive symptoms.",
    seoSummary:
      "Understand SIBO symptoms, diagnosis, and treatment options through a functional medicine lens.",
    category: "Gut & Digestion",
    isOverview: false,
    relatedSlugs: ["gut-health", "bloating", "food-sensitivities"],
    primaryCareSlug: "complex-chronic",
    primaryLabSlug: "sibo-breath-test",
    faq: [
      {
        question: "What is SIBO",
        answer:
          "SIBO is an overgrowth of bacteria in the small intestine that can cause bloating, gas, diarrhea, constipation, and other digestive symptoms.",
      },
      {
        question: "How is SIBO diagnosed",
        answer:
          "SIBO is typically diagnosed through a breath test that measures gases produced by bacteria in the small intestine.",
      },
    ],
    relatedBlogSlugs: ["sibo-treatment", "sibo-symptoms"],
  },
  {
    slug: "histamine-intolerance",
    name: "Histamine Intolerance",
    shortName: "Histamine",
    description:
      "Histamine intolerance occurs when your body cannot break down histamine properly, leading to symptoms like headaches, hives, digestive issues, and more.",
    seoSummary:
      "Learn about histamine intolerance, its symptoms, and how to manage it through diet and lifestyle.",
    category: "Gut & Digestion",
    isOverview: false,
    relatedSlugs: ["gut-health", "food-sensitivities", "mold-toxicity"],
    primaryCareSlug: "complex-chronic",
    faq: [
      {
        question: "What is histamine intolerance",
        answer:
          "Histamine intolerance happens when your body accumulates too much histamine due to impaired breakdown, causing various symptoms.",
      },
      {
        question: "What are the symptoms",
        answer:
          "Symptoms can include headaches, hives, digestive issues, nasal congestion, and fatigue, often occurring after eating high-histamine foods.",
      },
    ],
    relatedBlogSlugs: ["histamine-intolerance"],
  },
  {
    slug: "thyroid",
    name: "Thyroid & Hashimoto's",
    shortName: "Thyroid",
    description:
      "Thyroid dysfunction, including Hashimoto's disease, affects energy, metabolism, mood, and many other aspects of health. A functional approach addresses root causes.",
    seoSummary:
      "Discover how thyroid health impacts your entire body and learn about comprehensive approaches to thyroid care.",
    category: "Hormones & Fertility",
    isOverview: false,
    relatedSlugs: ["hormones", "autoimmune", "gut-health"],
    primaryCareSlug: "complex-chronic",
    primaryLabSlug: "comprehensive-thyroid-panel",
    faq: [
      {
        question: "What is Hashimoto's disease",
        answer:
          "Hashimoto's is an autoimmune condition where your immune system attacks your thyroid gland, leading to hypothyroidism.",
      },
      {
        question: "How is thyroid dysfunction treated",
        answer:
          "Treatment may include thyroid hormone replacement, addressing underlying autoimmune triggers, supporting gut health, and managing stress.",
      },
    ],
    relatedBlogSlugs: [
      "thyroid-healing-tips",
      "manage-hashimotos-symptoms-flare-ups",
      "foods-support-thyroid-health",
    ],
  },
  {
    slug: "hormones",
    name: "Hormones",
    shortName: "Hormones",
    description:
      "Hormonal imbalances can affect energy, mood, weight, sleep, and many other aspects of health across all life stages.",
    seoSummary:
      "Learn about hormonal health and how imbalances can be addressed through a functional medicine approach.",
    category: "Hormones & Fertility",
    isOverview: true,
    relatedSlugs: ["thyroid", "pms-periods", "menopause", "fertility", "adrenal-cortisol"],
    primaryCareSlug: "complex-chronic",
    primaryLabSlug: "comprehensive-hormone-panel",
    faq: [
      {
        question: "What causes hormonal imbalances",
        answer:
          "Hormonal imbalances can be caused by stress, poor sleep, gut health issues, environmental toxins, and underlying medical conditions.",
      },
      {
        question: "How are hormones tested",
        answer:
          "Hormone testing may include blood tests, saliva tests, or urine tests depending on which hormones need to be evaluated.",
      },
    ],
    relatedBlogSlugs: [
      "seed-cycling-for-hormone-balance",
      "postpartum-hormones",
    ],
  },
  {
    slug: "pms-periods",
    name: "PMS & Period Health",
    shortName: "Periods",
    description:
      "Period symptoms like cramps, mood changes, and fatigue are common but not normal. A root cause approach can help you feel better throughout your cycle.",
    seoSummary:
      "Understand period health and learn how to address PMS and other menstrual symptoms naturally.",
    category: "Hormones & Fertility",
    isOverview: false,
    relatedSlugs: ["hormones", "menopause", "fertility"],
    primaryCareSlug: "complex-chronic",
    faq: [
      {
        question: "What causes PMS",
        answer:
          "PMS can be related to hormonal imbalances, nutrient deficiencies, inflammation, and stress.",
      },
      {
        question: "How can I improve my period health",
        answer:
          "Improving period health involves balancing hormones, supporting gut health, managing stress, and ensuring adequate nutrition.",
      },
    ],
    relatedBlogSlugs: [
      "ways-to-combat-fatigue-before-period",
      "how-to-regulate-your-period-naturally",
    ],
  },
  {
    slug: "adrenal-cortisol",
    name: "Adrenal & Cortisol",
    shortName: "Adrenals",
    description:
      "Adrenal dysfunction and cortisol imbalances can cause fatigue, stress, sleep issues, and other symptoms. Supporting adrenal health is key to overall wellness.",
    seoSummary:
      "Learn about adrenal health, cortisol balance, and how to support your body's stress response system.",
    category: "Hormones & Fertility",
    isOverview: false,
    relatedSlugs: ["hormones", "sleep-insomnia"],
    primaryCareSlug: "complex-chronic",
    primaryLabSlug: "cortisol-panel",
    faq: [
      {
        question: "What are the adrenal glands",
        answer:
          "The adrenal glands produce hormones including cortisol, which helps your body respond to stress and maintain energy levels.",
      },
      {
        question: "What causes adrenal dysfunction",
        answer:
          "Chronic stress, poor sleep, infections, and other stressors can lead to adrenal dysfunction and cortisol imbalances.",
      },
    ],
    relatedBlogSlugs: ["cortisol-detox"],
  },
  {
    slug: "bloating",
    name: "Bloating",
    shortName: "Bloating",
    description:
      "Chronic bloating can be a sign of underlying gut health issues like SIBO, food sensitivities, or digestive dysfunction.",
    seoSummary:
      "Understand what causes chronic bloating and learn about root cause approaches to address it.",
    category: "Gut & Digestion",
    isOverview: false,
    relatedSlugs: ["gut-health", "sibo", "food-sensitivities"],
    primaryCareSlug: "complex-chronic",
    faq: [
      {
        question: "What causes bloating",
        answer:
          "Bloating can be caused by SIBO, food sensitivities, gut dysbiosis, constipation, or other digestive issues.",
      },
      {
        question: "How is bloating treated",
        answer:
          "Treatment depends on the root cause and may include dietary changes, gut healing protocols, and addressing underlying conditions.",
      },
    ],
    relatedBlogSlugs: ["fiber-bloating-gas-cramps", "why-am-i-always-bloated"],
  },
  {
    slug: "gut-health",
    name: "Gut Health",
    shortName: "Gut",
    description:
      "Gut health affects your entire body, from digestion to immunity, mood, and energy. A functional approach addresses the root causes of gut issues.",
    seoSummary:
      "Discover how gut health impacts your whole body and learn about comprehensive approaches to digestive wellness.",
    category: "Gut & Digestion",
    isOverview: true,
    relatedSlugs: ["sibo", "bloating", "food-sensitivities", "candida"],
    primaryCareSlug: "complex-chronic",
    faq: [
      {
        question: "Why is gut health important",
        answer:
          "Your gut affects digestion, immune function, mood, energy, and many other aspects of health through the gut-brain axis.",
      },
      {
        question: "How can I improve my gut health",
        answer:
          "Improving gut health involves eating a diverse, fiber-rich diet, managing stress, getting enough sleep, and addressing any underlying conditions.",
      },
    ],
    relatedBlogSlugs: [
      "stomach-gurgling-digestive-issues",
      "how-to-stimulate-vagus-nerve-exercises",
      "digestive-bitters-benefits",
    ],
  },
  {
    slug: "autoimmune",
    name: "Autoimmune",
    shortName: "Autoimmune",
    description:
      "Autoimmune conditions occur when your immune system attacks your own tissues. A functional medicine approach addresses root causes and supports immune balance.",
    seoSummary:
      "Learn about autoimmune conditions and how a root cause approach can help manage symptoms and support healing.",
    category: "Other",
    isOverview: true,
    relatedSlugs: ["thyroid", "gut-health", "inflammation"],
    primaryCareSlug: "complex-chronic",
    faq: [
      {
        question: "What causes autoimmune disease",
        answer:
          "Autoimmune conditions can be triggered by genetics, environmental factors, infections, gut health issues, and chronic stress.",
      },
      {
        question: "How are autoimmune conditions treated",
        answer:
          "Treatment focuses on reducing inflammation, supporting gut health, managing stress, and addressing underlying triggers.",
      },
    ],
    relatedBlogSlugs: ["signs-autoimmune-disease"],
  },
  {
    slug: "brain-fog",
    name: "Brain Fog",
    shortName: "Brain Fog",
    description:
      "Brain fog can be caused by many factors including mold exposure, candida, thyroid issues, nutrient deficiencies, or chronic inflammation.",
    seoSummary:
      "Understand what causes brain fog and learn about root cause approaches to improve mental clarity.",
    category: "Brain & Mood",
    isOverview: false,
    relatedSlugs: ["mold-toxicity", "candida", "thyroid", "sleep-insomnia"],
    primaryCareSlug: "complex-chronic",
    faq: [
      {
        question: "What causes brain fog",
        answer:
          "Brain fog can be caused by mold exposure, candida overgrowth, thyroid dysfunction, nutrient deficiencies, inflammation, or poor sleep.",
      },
      {
        question: "How is brain fog treated",
        answer:
          "Treatment depends on the root cause and may involve addressing underlying conditions, optimizing nutrition, and supporting brain health.",
      },
    ],
    relatedBlogSlugs: ["beat-brain-fog"],
  },
  {
    slug: "heart-health",
    name: "Heart Health",
    shortName: "Heart",
    description:
      "Heart health involves more than just cholesterol. A functional approach looks at inflammation, metabolic health, and other factors that affect cardiovascular wellness.",
    seoSummary:
      "Learn about comprehensive approaches to heart health that go beyond traditional metrics.",
    category: "Heart & Metabolic",
    isOverview: false,
    relatedSlugs: ["inflammation"],
    primaryCareSlug: "complex-chronic",
    faq: [
      {
        question: "What affects heart health",
        answer:
          "Heart health is affected by inflammation, metabolic health, stress, sleep, nutrition, and other lifestyle factors.",
      },
      {
        question: "How can I support my heart health",
        answer:
          "Supporting heart health involves managing inflammation, maintaining healthy blood sugar, managing stress, and eating a nutrient-dense diet.",
      },
    ],
    relatedBlogSlugs: ["dangerous-low-blood-pressure-woman"],
  },
  {
    slug: "menopause",
    name: "Menopause",
    shortName: "Menopause",
    description:
      "Menopause brings hormonal changes that can affect many aspects of health. A functional approach can help you navigate this transition smoothly.",
    seoSummary:
      "Learn about menopause and how to manage symptoms through a functional medicine approach.",
    category: "Hormones & Fertility",
    isOverview: false,
    relatedSlugs: ["hormones", "pms-periods"],
    primaryCareSlug: "complex-chronic",
    faq: [
      {
        question: "What is menopause",
        answer:
          "Menopause is the natural transition when your periods stop permanently, typically occurring in your 40s or 50s.",
      },
      {
        question: "How can I manage menopause symptoms",
        answer:
          "Managing menopause symptoms may involve hormone support, lifestyle changes, stress management, and addressing underlying health issues.",
      },
    ],
    relatedBlogSlugs: ["menopause-protocol"],
  },
  {
    slug: "fertility",
    name: "Fertility",
    shortName: "Fertility",
    description:
      "Fertility is influenced by many factors including hormones, thyroid function, gut health, and overall wellness. A functional approach addresses these comprehensively.",
    seoSummary:
      "Discover how functional medicine can support your fertility journey by addressing root causes.",
    category: "Hormones & Fertility",
    isOverview: false,
    relatedSlugs: ["hormones", "thyroid", "mthfr-genetics"],
    primaryCareSlug: "complex-chronic",
    faq: [
      {
        question: "What affects fertility",
        answer:
          "Fertility can be affected by hormonal imbalances, thyroid function, gut health, stress, nutrition, and underlying medical conditions.",
      },
      {
        question: "How can I improve my fertility",
        answer:
          "Improving fertility involves optimizing hormones, supporting thyroid function, improving gut health, managing stress, and ensuring adequate nutrition.",
      },
    ],
    relatedBlogSlugs: [
      "what-happens-to-your-body-after-a-miscarriage",
      "how-to-prepare-for-pregnancy",
    ],
  },
  {
    slug: "inflammation",
    name: "Inflammation",
    shortName: "Inflammation",
    description:
      "Chronic inflammation underlies many health conditions. Understanding and addressing the root causes of inflammation is key to long-term wellness.",
    seoSummary:
      "Learn about chronic inflammation, its causes, and how to reduce it through lifestyle and functional medicine approaches.",
    category: "Heart & Metabolic",
    isOverview: false,
    relatedSlugs: ["autoimmune", "gut-health"],
    primaryCareSlug: "complex-chronic",
    faq: [
      {
        question: "What causes chronic inflammation",
        answer:
          "Chronic inflammation can be caused by poor diet, stress, lack of sleep, gut health issues, environmental toxins, and underlying medical conditions.",
      },
      {
        question: "How can I reduce inflammation",
        answer:
          "Reducing inflammation involves eating an anti-inflammatory diet, managing stress, getting enough sleep, and addressing underlying health issues.",
      },
    ],
    relatedBlogSlugs: ["dairy-and-inflammation"],
  },
  {
    slug: "heavy-metals",
    name: "Heavy Metals",
    shortName: "Heavy Metals",
    description:
      "Heavy metal exposure can contribute to chronic symptoms. Testing and safe detoxification protocols can help reduce your body's burden.",
    seoSummary:
      "Learn about heavy metal exposure, testing, and safe approaches to reducing your body's toxic burden.",
    category: "Detox & Toxicity",
    isOverview: false,
    relatedSlugs: ["mold-toxicity", "detox"],
    primaryCareSlug: "complex-chronic",
    primaryLabSlug: "heavy-metals-panel",
    faq: [
      {
        question: "What are heavy metals",
        answer:
          "Heavy metals like lead, mercury, and cadmium are toxic substances that can accumulate in your body and cause health problems.",
      },
      {
        question: "How are heavy metals tested",
        answer:
          "Heavy metals can be tested through blood, urine, or hair analysis to assess your body's burden.",
      },
    ],
    relatedBlogSlugs: ["the-real-story-on-heavy-metals"],
  },
  {
    slug: "acne",
    name: "Acne",
    shortName: "Acne",
    description:
      "Acne is often related to hormonal imbalances, gut health, or inflammation. A functional approach addresses these root causes.",
    seoSummary:
      "Understand the root causes of acne and learn about functional medicine approaches to clear skin.",
    category: "Skin",
    isOverview: false,
    relatedSlugs: ["hormones", "gut-health"],
    primaryCareSlug: "complex-chronic",
    faq: [
      {
        question: "What causes acne",
        answer:
          "Acne can be caused by hormonal imbalances, gut health issues, inflammation, or other underlying factors.",
      },
      {
        question: "How is acne treated",
        answer:
          "Treatment focuses on addressing root causes like hormonal imbalances and gut health, rather than just treating symptoms.",
      },
    ],
    relatedBlogSlugs: ["acne-causes-treatments"],
  },
  {
    slug: "food-sensitivities",
    name: "Food Sensitivities",
    shortName: "Food Sensitivities",
    description:
      "Food sensitivities can cause digestive symptoms, inflammation, and other health issues. Identifying and addressing them is key to feeling better.",
    seoSummary:
      "Learn about food sensitivities, how to identify them, and how to manage them for better health.",
    category: "Gut & Digestion",
    isOverview: false,
    relatedSlugs: ["gut-health", "bloating", "sibo"],
    primaryCareSlug: "complex-chronic",
    faq: [
      {
        question: "What are food sensitivities",
        answer:
          "Food sensitivities are delayed reactions to foods that can cause digestive symptoms, inflammation, and other health issues.",
      },
      {
        question: "How are food sensitivities identified",
        answer:
          "Food sensitivities can be identified through elimination diets, food sensitivity testing, or working with a healthcare provider.",
      },
    ],
    relatedBlogSlugs: ["why-am-i-suddenly-lactose-intolerant"],
  },
  {
    slug: "womens-health",
    name: "Women's Health Overview",
    shortName: "Women's Health",
    description:
      "Women's health encompasses hormonal health, reproductive health, and many other aspects unique to women's bodies and life stages.",
    seoSummary:
      "Explore comprehensive approaches to women's health across all life stages.",
    category: "Women's Health",
    isOverview: true,
    relatedSlugs: ["hormones", "fertility", "menopause", "pms-periods"],
    primaryCareSlug: "complex-chronic",
    faq: [
      {
        question: "What does women's health include",
        answer:
          "Women's health includes hormonal health, reproductive health, bone health, and many other aspects unique to women.",
      },
    ],
    relatedBlogSlugs: [],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "mold-toxicity-symptoms",
    title: "12 Mold Toxicity Symptoms You Should Not Ignore",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-01-15",
    primaryConditionSlug: "mold-toxicity",
    tldrBullets: [
      "Mold exposure can cause vague symptoms across your brain, gut, hormones, and immune system.",
      "Common signs include brain fog, fatigue, sinus issues, and unexplained pain or mood changes.",
      "A root cause approach uses history, targeted testing, and personalized treatment rather than only treating each symptom on its own.",
    ],
    bodyHtml: `
      <h2>What is mold toxicity?</h2>
      <p>Mold toxicity occurs when ongoing exposure to mold and mycotoxins triggers inflammation and multi-system symptoms. Unlike visible mold growth, mycotoxins are invisible chemicals that molds release into the air, which can impact your brain, immune system, gut, and hormones.</p>
      <p>Many people live with persistent symptoms like brain fog, fatigue, congestion, or body aches without realizing that mold exposure might be part of the story. Standard medical workups may look normal, which can leave you feeling dismissed or confused.</p>
      
      <h2>12 mold toxicity symptoms you should not ignore</h2>
      <p>Mold toxicity can cause a wide range of symptoms that affect multiple body systems. Here are 12 common symptoms to watch for:</p>
      <ol class="list-decimal ml-6 space-y-3">
        <li><strong>Brain fog and trouble concentrating</strong> - Difficulty thinking clearly or remembering things</li>
        <li><strong>Chronic fatigue</strong> - Persistent tiredness that doesn't improve with sleep</li>
        <li><strong>Headaches and sinus pressure</strong> - Frequent headaches or feeling of pressure in your sinuses</li>
        <li><strong>Post-nasal drip</strong> - Constant need to clear your throat</li>
        <li><strong>Shortness of breath or chest tightness</strong> - Difficulty breathing or feeling like you can't take a deep breath</li>
        <li><strong>Digestive issues</strong> - Bloating, loose stools, nausea, or other gut problems</li>
        <li><strong>Unexplained muscle or joint pain</strong> - Aches and pains without clear cause</li>
        <li><strong>Mood changes</strong> - Anxiety, depression, or mood swings</li>
        <li><strong>Sensitivity to light, sound, or chemicals</strong> - Overwhelmed by normal stimuli</li>
        <li><strong>Skin rashes</strong> - Unexplained skin irritation or rashes</li>
        <li><strong>Numbness and tingling</strong> - Pins and needles sensations</li>
        <li><strong>Weakness</strong> - Feeling weak or having reduced strength</li>
      </ol>
      
      <h2>What to do if you think you have mold toxicity</h2>
      <p>If you recognize these symptoms and suspect mold exposure, it's important to take action:</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Document your symptoms</strong> - Keep track of when symptoms started and any potential exposure to water-damaged buildings</li>
        <li><strong>Consider environmental testing</strong> - If you suspect mold in your home or workplace, consider professional testing</li>
        <li><strong>Schedule a visit with a functional medicine clinician</strong> - A clinician trained in environmental medicine can help assess your situation</li>
        <li><strong>Get appropriate testing</strong> - Lab testing for mycotoxins and related markers can help confirm exposure</li>
      </ul>
      <p><strong>When to seek urgent care:</strong> If you experience severe symptoms like difficulty breathing, chest pain, or severe allergic reactions, seek immediate medical attention.</p>
      
      <h2>How Parsley Health can help</h2>
      <p>At Parsley Health, our clinicians understand that mold toxicity requires a comprehensive approach. We combine:</p>
      <ul class="list-disc ml-6 space-y-2">
        <li>Detailed history taking to identify potential exposure</li>
        <li>Targeted lab testing for mycotoxins and related markers</li>
        <li>Personalized treatment plans that address root causes</li>
        <li>Ongoing support from clinicians and health coaches</li>
      </ul>
      <p>If you see yourself in these symptoms, working with a clinician who understands mold toxicity can give you a clear plan instead of guessing on your own.</p>
    `,
  },
  {
    slug: "melatonin-doesnt-help-everyone-sleep",
    title: "Why Melatonin Doesn't Help Everyone Sleep",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-02-01",
    primaryConditionSlug: "sleep-insomnia",
    tldrBullets: [
      "Melatonin works for some but not others due to individual differences in circadian rhythms.",
      "Underlying causes like hormonal imbalances or stress may need to be addressed.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "waking-up-in-the-middle-of-the-night",
    title: "Why You Keep Waking Up in the Middle of the Night",
    author: "Parsley Health",
    publishedDate: "2024-02-10",
    primaryConditionSlug: "sleep-insomnia",
    tldrBullets: [
      "Waking up at night can be caused by blood sugar imbalances, stress, or hormonal issues.",
      "Addressing root causes is more effective than just treating the symptom.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "what-i-do-when-im-feeling-heavy-tired-and-toxic",
    title: "What I Do When I'm Feeling Heavy, Tired, and Toxic",
    author: "Parsley Health",
    publishedDate: "2024-01-20",
    primaryConditionSlug: "detox",
    tldrBullets: [
      "Feeling heavy and toxic can indicate your body needs detox support.",
      "Simple lifestyle changes can help support your body's natural detoxification pathways.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "how-to-detox-from-sugar",
    title: "How to Detox From Sugar: A Complete Guide",
    author: "Parsley Health",
    publishedDate: "2024-01-25",
    primaryConditionSlug: "detox",
    tldrBullets: [
      "Sugar detox involves gradually reducing sugar intake and supporting your body through the process.",
      "Addressing underlying cravings and blood sugar imbalances is key to long-term success.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "how-to-cleanse-your-liver",
    title: "How to Cleanse Your Liver Naturally",
    author: "Parsley Health",
    publishedDate: "2024-02-05",
    primaryConditionSlug: "detox",
    tldrBullets: [
      "Your liver naturally detoxifies your body, but you can support it through diet and lifestyle.",
      "Focus on nutrient-dense foods, hydration, and reducing toxin exposure.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "mthfr-mutation",
    title: "MTHFR Mutation: What You Need to Know",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-01-30",
    primaryConditionSlug: "mthfr-genetics",
    tldrBullets: [
      "MTHFR gene variants can affect how your body processes folate and B vitamins.",
      "Understanding your genetic variants can help guide personalized nutrition and supplementation.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "how-to-cure-candida-naturally",
    title: "How to Cure Candida Naturally: A Complete Guide",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-02-15",
    primaryConditionSlug: "candida",
    tldrBullets: [
      "Candida overgrowth requires a multi-faceted approach including diet, gut healing, and addressing root causes.",
      "Supporting your immune system and gut health is essential for long-term success.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "strongest-candida-killer",
    title: "The Strongest Natural Candida Killers",
    author: "Parsley Health",
    publishedDate: "2024-02-20",
    primaryConditionSlug: "candida",
    tldrBullets: [
      "Certain natural compounds can help address candida overgrowth.",
      "Working with a healthcare provider ensures safe and effective treatment.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "sibo-treatment",
    title: "SIBO Treatment: A Functional Medicine Approach",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-02-25",
    primaryConditionSlug: "sibo",
    tldrBullets: [
      "SIBO treatment involves addressing bacterial overgrowth and underlying causes.",
      "A comprehensive approach includes antimicrobials, diet, and gut healing protocols.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "sibo-symptoms",
    title: "SIBO Symptoms: What to Look For",
    author: "Parsley Health",
    publishedDate: "2024-03-01",
    primaryConditionSlug: "sibo",
    tldrBullets: [
      "SIBO can cause bloating, gas, diarrhea, constipation, and other digestive symptoms.",
      "If you suspect SIBO, testing can help confirm the diagnosis.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "histamine-intolerance",
    title: "Histamine Intolerance: Symptoms and Solutions",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-03-05",
    primaryConditionSlug: "histamine-intolerance",
    tldrBullets: [
      "Histamine intolerance occurs when your body can't break down histamine properly.",
      "A low-histamine diet and supporting DAO enzyme function can help manage symptoms.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "thyroid-healing-tips",
    title: "Thyroid Healing Tips: A Functional Medicine Guide",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-03-10",
    primaryConditionSlug: "thyroid",
    tldrBullets: [
      "Thyroid health involves more than just medication.",
      "Supporting gut health, reducing inflammation, and managing stress are all important.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "manage-hashimotos-symptoms-flare-ups",
    title: "How to Manage Hashimoto's Symptoms and Flare-Ups",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-03-15",
    primaryConditionSlug: "thyroid",
    tldrBullets: [
      "Hashimoto's flare-ups can be managed by addressing triggers like stress, infections, and food sensitivities.",
      "Supporting immune function and reducing inflammation are key strategies.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "foods-support-thyroid-health",
    title: "Foods That Support Thyroid Health",
    author: "Parsley Health",
    publishedDate: "2024-03-20",
    primaryConditionSlug: "thyroid",
    tldrBullets: [
      "Certain nutrients are essential for thyroid function, including iodine, selenium, and zinc.",
      "Eating a nutrient-dense diet supports overall thyroid health.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "seed-cycling-for-hormone-balance",
    title: "Seed Cycling for Hormone Balance: Does It Work?",
    author: "Parsley Health",
    publishedDate: "2024-03-25",
    primaryConditionSlug: "hormones",
    tldrBullets: [
      "Seed cycling involves eating specific seeds during different phases of your cycle.",
      "While research is limited, some people find it helpful for hormonal balance.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "postpartum-hormones",
    title: "Understanding Postpartum Hormones",
    author: "Parsley Health",
    publishedDate: "2024-04-01",
    primaryConditionSlug: "hormones",
    tldrBullets: [
      "Postpartum hormonal changes are normal but can cause significant symptoms.",
      "Supporting your body through nutrition, rest, and stress management can help.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "ways-to-combat-fatigue-before-period",
    title: "Ways to Combat Fatigue Before Your Period",
    author: "Parsley Health",
    publishedDate: "2024-04-05",
    primaryConditionSlug: "pms-periods",
    tldrBullets: [
      "Fatigue before your period is often related to hormonal fluctuations.",
      "Supporting blood sugar balance and addressing nutrient needs can help.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "how-to-regulate-your-period-naturally",
    title: "How to Regulate Your Period Naturally",
    author: "Parsley Health",
    publishedDate: "2024-04-10",
    primaryConditionSlug: "pms-periods",
    tldrBullets: [
      "Irregular periods can often be addressed through lifestyle changes.",
      "Supporting hormonal balance through diet, stress management, and sleep is key.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "cortisol-detox",
    title: "Cortisol Detox: How to Lower High Cortisol Naturally",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-04-15",
    primaryConditionSlug: "adrenal-cortisol",
    tldrBullets: [
      "High cortisol can contribute to many health issues including weight gain and sleep problems.",
      "Supporting your body's stress response through lifestyle changes can help balance cortisol.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "fiber-bloating-gas-cramps",
    title: "Fiber, Bloating, Gas, and Cramps: What's the Connection?",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-04-20",
    primaryConditionSlug: "bloating",
    tldrBullets: [
      "Fiber can cause bloating if introduced too quickly or if you have underlying gut issues.",
      "Gradually increasing fiber and addressing gut health can help reduce symptoms.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "why-am-i-always-bloated",
    title: "Why Am I Always Bloated? Common Causes and Solutions",
    author: "Parsley Health",
    publishedDate: "2024-04-25",
    primaryConditionSlug: "bloating",
    tldrBullets: [
      "Chronic bloating often indicates an underlying gut health issue.",
      "SIBO, food sensitivities, and gut dysbiosis are common causes.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "stomach-gurgling-digestive-issues",
    title: "Stomach Gurgling and Other Digestive Issues: What They Mean",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-05-01",
    primaryConditionSlug: "gut-health",
    tldrBullets: [
      "Stomach gurgling can be normal or indicate digestive issues.",
      "Persistent symptoms may warrant investigation into gut health.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "how-to-stimulate-vagus-nerve-exercises",
    title: "How to Stimulate Your Vagus Nerve: Exercises and Benefits",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-05-05",
    primaryConditionSlug: "gut-health",
    tldrBullets: [
      "The vagus nerve connects your brain and gut, affecting digestion and stress response.",
      "Simple exercises can help stimulate the vagus nerve and support gut health.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "digestive-bitters-benefits",
    title: "Digestive Bitters: Benefits and How to Use Them",
    author: "Parsley Health",
    publishedDate: "2024-05-10",
    primaryConditionSlug: "gut-health",
    tldrBullets: [
      "Digestive bitters can help stimulate digestion and support gut health.",
      "They work by triggering digestive enzymes and improving nutrient absorption.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "signs-autoimmune-disease",
    title: "Early Signs of Autoimmune Disease",
    author: "Parsley Health",
    publishedDate: "2024-05-15",
    primaryConditionSlug: "autoimmune",
    tldrBullets: [
      "Early signs of autoimmune disease can be subtle and vary widely.",
      "Fatigue, joint pain, and digestive issues are common early symptoms.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "beat-brain-fog",
    title: "How to Beat Brain Fog: A Complete Guide",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-05-20",
    primaryConditionSlug: "brain-fog",
    tldrBullets: [
      "Brain fog can have many causes including mold exposure, candida, and thyroid issues.",
      "Addressing root causes is more effective than just treating symptoms.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "dangerous-low-blood-pressure-woman",
    title: "Dangerous Low Blood Pressure in Women: What to Know",
    author: "Parsley Health",
    publishedDate: "2024-05-25",
    primaryConditionSlug: "heart-health",
    tldrBullets: [
      "Low blood pressure can cause symptoms like dizziness and fatigue.",
      "Understanding the cause is important for proper treatment.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "menopause-protocol",
    title: "Menopause Protocol: A Functional Medicine Approach",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-06-01",
    primaryConditionSlug: "menopause",
    tldrBullets: [
      "Menopause brings significant hormonal changes that affect many aspects of health.",
      "A comprehensive approach addresses symptoms while supporting long-term health.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "what-happens-to-your-body-after-a-miscarriage",
    title: "What Happens to Your Body After a Miscarriage",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-06-05",
    primaryConditionSlug: "fertility",
    tldrBullets: [
      "Miscarriage affects both physical and emotional health.",
      "Supporting your body through recovery is important for healing.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "how-to-prepare-for-pregnancy",
    title: "How to Prepare for Pregnancy: A Preconception Guide",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-06-10",
    primaryConditionSlug: "fertility",
    tldrBullets: [
      "Preparing for pregnancy involves optimizing your health before conception.",
      "Addressing nutritional needs, hormonal balance, and underlying health issues is important.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "dairy-and-inflammation",
    title: "Dairy and Inflammation: What's the Connection?",
    author: "Parsley Health",
    publishedDate: "2024-06-15",
    primaryConditionSlug: "inflammation",
    tldrBullets: [
      "Dairy can contribute to inflammation in some people.",
      "Understanding your individual response is key to making dietary decisions.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "the-real-story-on-heavy-metals",
    title: "The Real Story on Heavy Metals and Your Health",
    author: "Parsley Health",
    publishedDate: "2024-06-20",
    primaryConditionSlug: "heavy-metals",
    tldrBullets: [
      "Heavy metal exposure can contribute to chronic health issues.",
      "Testing and safe detoxification protocols can help reduce your body's burden.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "acne-causes-treatments",
    title: "Acne Causes and Treatments: A Functional Medicine Approach",
    author: "Parsley Health",
    reviewedBy: "Parsley clinician",
    publishedDate: "2024-06-25",
    primaryConditionSlug: "acne",
    tldrBullets: [
      "Acne is often related to hormonal imbalances or gut health issues.",
      "Addressing root causes is more effective than just treating symptoms.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
  {
    slug: "why-am-i-suddenly-lactose-intolerant",
    title: "Why Am I Suddenly Lactose Intolerant?",
    author: "Parsley Health",
    publishedDate: "2024-07-01",
    primaryConditionSlug: "food-sensitivities",
    tldrBullets: [
      "Lactose intolerance can develop suddenly due to gut health changes.",
      "Addressing underlying gut issues may help improve tolerance.",
    ],
    bodyHtml: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`,
  },
];

export const careServices: CareService[] = [
  {
    slug: "complex-chronic",
    name: "Parsley Complex Chronic Care",
    heroCopy:
      "Membership based care for people with complex chronic issues like mold toxicity, autoimmune conditions, gut problems, and hormone imbalances.",
    whoItHelpsConditions: [
      "mold-toxicity",
      "sleep-insomnia",
      "detox",
      "mthfr-genetics",
      "candida",
      "sibo",
      "histamine-intolerance",
      "thyroid",
      "hormones",
      "pms-periods",
      "adrenal-cortisol",
      "bloating",
      "gut-health",
      "autoimmune",
      "brain-fog",
      "heart-health",
      "menopause",
      "fertility",
      "inflammation",
      "heavy-metals",
      "acne",
      "food-sensitivities",
      "womens-health",
    ],
  },
];

export const labsPanels: LabsPanel[] = [
  {
    slug: "mold-mycotoxin-panel",
    name: "Comprehensive Mold and Mycotoxin Panel",
    price: "$299",
    description:
      "An advanced panel that checks for common mycotoxins and related markers so you and your clinician can understand how mold exposure may be affecting your body.",
    relatedConditionSlug: "mold-toxicity",
    biomarkers: [
      "Common urinary mycotoxins",
      "Inflammatory markers",
      "Oxidative stress markers",
      "Key detoxification pathways",
    ],
    recommendedIf: [
      "Persistent fatigue",
      "Ongoing brain fog",
      "History of water damaged buildings",
      "Sensitivity to smells or chemicals",
    ],
  },
  {
    slug: "sleep-hormone-panel",
    name: "Sleep and Hormone Panel",
    price: "$249",
    description:
      "Comprehensive testing for hormones and markers that affect sleep quality, including cortisol, melatonin, and sex hormones.",
    relatedConditionSlug: "sleep-insomnia",
    biomarkers: [
      "Cortisol levels throughout the day",
      "Melatonin levels",
      "Sex hormones",
      "Stress markers",
    ],
    recommendedIf: [
      "Difficulty falling asleep",
      "Waking up frequently",
      "Feeling tired despite adequate sleep",
      "Hormonal imbalances",
    ],
  },
  {
    slug: "cortisol-panel",
    name: "Cortisol and Stress Panel",
    price: "$199",
    description:
      "Measure your cortisol levels throughout the day to understand your body's stress response and identify imbalances.",
    relatedConditionSlug: "adrenal-cortisol",
    biomarkers: [
      "Cortisol at multiple time points",
      "DHEA-S",
      "Stress response markers",
    ],
    recommendedIf: [
      "Chronic stress",
      "Fatigue",
      "Difficulty managing stress",
      "Sleep issues",
    ],
  },
  {
    slug: "comprehensive-thyroid-panel",
    name: "Comprehensive Thyroid Panel",
    price: "$179",
    description:
      "Complete thyroid testing including TSH, free T3, free T4, reverse T3, and thyroid antibodies to assess thyroid function comprehensively.",
    relatedConditionSlug: "thyroid",
    biomarkers: [
      "TSH",
      "Free T3",
      "Free T4",
      "Reverse T3",
      "Thyroid antibodies",
    ],
    recommendedIf: [
      "Fatigue",
      "Weight changes",
      "Hair loss",
      "Mood changes",
      "Temperature sensitivity",
    ],
  },
  {
    slug: "comprehensive-hormone-panel",
    name: "Comprehensive Hormone Panel",
    price: "$349",
    description:
      "Complete hormone testing for sex hormones, adrenal hormones, and other key markers that affect hormonal balance.",
    relatedConditionSlug: "hormones",
    biomarkers: [
      "Estrogen",
      "Progesterone",
      "Testosterone",
      "Cortisol",
      "DHEA-S",
    ],
    recommendedIf: [
      "Hormonal imbalances",
      "Irregular periods",
      "Mood changes",
      "Fatigue",
      "Weight changes",
    ],
  },
  {
    slug: "sibo-breath-test",
    name: "SIBO Breath Test",
    price: "$199",
    description:
      "Non-invasive breath test to detect small intestinal bacterial overgrowth by measuring hydrogen and methane gases.",
    relatedConditionSlug: "sibo",
    biomarkers: [
      "Hydrogen gas levels",
      "Methane gas levels",
      "Baseline and post-glucose measurements",
    ],
    recommendedIf: [
      "Chronic bloating",
      "Gas and cramping",
      "Diarrhea or constipation",
      "Food sensitivities",
    ],
  },
  {
    slug: "heavy-metals-panel",
    name: "Heavy Metals Panel",
    price: "$249",
    description:
      "Comprehensive testing for toxic heavy metals including lead, mercury, cadmium, and arsenic to assess your body's toxic burden.",
    relatedConditionSlug: "heavy-metals",
    biomarkers: [
      "Lead",
      "Mercury",
      "Cadmium",
      "Arsenic",
      "Other toxic metals",
    ],
    recommendedIf: [
      "Unexplained symptoms",
      "History of exposure",
      "Chronic fatigue",
      "Neurological symptoms",
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((b) => b.slug === slug);
}

export function getConditionBySlug(slug: string): ConditionHub | undefined {
  return conditionHubs.find((c) => c.slug === slug);
}

export function getCareBySlug(slug: string): CareService | undefined {
  return careServices.find((c) => c.slug === slug);
}

export function getLabsBySlug(slug: string): LabsPanel | undefined {
  return labsPanels.find((l) => l.slug === slug);
}
