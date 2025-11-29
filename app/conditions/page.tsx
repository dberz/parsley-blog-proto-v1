"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { conditionHubs } from "@/src/data/content";
import { Card } from "@/src/components/ui/Card";

const categories = [
  "All",
  "Gut & Digestion",
  "Hormones & Fertility",
  "Brain & Mood",
  "Detox & Toxicity",
  "Skin",
  "Heart & Metabolic",
  "Women's Health",
  "Other",
];

export default function ConditionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredConditions = useMemo(() => {
    let filtered = conditionHubs;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((c) => c.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query) ||
          c.seoSummary.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  // Group by category
  const groupedConditions = useMemo(() => {
    const groups: Record<string, typeof conditionHubs> = {};
    filteredConditions.forEach((condition) => {
      const cat = condition.category || "Other";
      if (!groups[cat]) {
        groups[cat] = [];
      }
      groups[cat].push(condition);
    });
    return groups;
  }, [filteredConditions]);

  const categoryOrder = [
    "Gut & Digestion",
    "Detox & Toxicity",
    "Hormones & Fertility",
    "Brain & Mood",
    "Heart & Metabolic",
    "Skin",
    "Women's Health",
    "Other",
  ];

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-[#0F4C3A] mb-4">
          Conditions we treat
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
          These pages help you understand symptoms, testing options, and how
          Parsley treats each condition through a root cause approach.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-10 space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conditions or symptoms"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F4C3A] focus:border-transparent text-lg"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-[#0F4C3A] text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-[#F5F5F0]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grouped Conditions */}
      {Object.keys(groupedConditions).length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No conditions found matching your search.
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {categoryOrder
            .filter((cat) => groupedConditions[cat]?.length > 0)
            .map((category) => (
              <div key={category}>
                <h2 className="text-3xl font-bold text-[#0F4C3A] mb-6">
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedConditions[category].map((condition) => (
                    <Link
                      key={condition.slug}
                      href={`/conditions/${condition.slug}`}
                      className="block"
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                        <h3 className="text-xl font-bold text-[#0F4C3A] mb-3">
                          {condition.name}
                        </h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {condition.seoSummary}
                        </p>
                        <span className="text-[#0F4C3A] font-medium text-sm hover:underline">
                          Learn more →
                        </span>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
