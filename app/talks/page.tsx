"use client";
import Link from "next/link";
import { useState } from "react";

export default function Talks() {
  const [filter, setFilter] = useState("All");

  const filterOptions = ["All", "Past", "Upcoming"];

  const talks = [
    {
      title: "Beyond Univariate Envelope Brain Modeling: Increasing EEG response accuracy with the multivariate Amplitude-Binned TRF model",
      event: "Munich Brain Day 2025",
      type: "Poster",
      status: "Past",
      date: "May 2025",
      authors: "Imamaliyev, E., Bleichner, M.",
      doi: "10.13140/RG.2.2.31742.65602",
      link: "https://github.com/Elnurimamaliyev/AMBI4NS",
      linkText: "View Repository",
      description: "Presented research on multivariate amplitude-binned envelope techniques for improved neural response prediction using temporal response functions (TRF) with EEG data.",
      image: "/images/talks/amb4ns_talk.png"
    },
    {
      title: "The Coupleccino Model - Computational Modeling of the Effects of Caffeine on Electrically Coupled Retzius Cells using Hodgkin-Huxley Neuron model",
      event: "Interdisciplinary College (IK) 2025",
      type: "Poster",
      status: "Past",
      date: "July 2024",
      authors: "Imamaliyev, E., Duken, M.",
      doi: "10.13140/RG.2.2.11609.99687",
      link: "https://github.com/Elnurimamaliyev/Coupleccino-HH-Model",
      linkText: "View Repository",
      description: "Showcased computational neuroscience work modeling caffeine's effects on gap-junction conductance in coupled neurons and its impact on neural alertness and spike features.",
      image: "/images/talks/coupleccino_talk.png"
    },
    {
      title: "German Pre-CHI 2026 - Lab Tour",
      event: "German Pre-CHI 2026",
      type: "Lab Demo",
      status: "Upcoming",
      date: "2026",
      link: "https://www.hcilab.org/event/german-pre-chi-2026/",
      linkText: "Event Website",
      description: "Lab tour for the German Pre-CHI 2026 conference.",
      image: "/images/talks/pre_chi_talk.png"
    }
];

  const filteredTalks = talks.filter((talk) => {
    if (filter === "All") return true;
    return talk.status === filter;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation Header */}
      <nav className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold text-black dark:text-white">
              Elnur Imamaliyev
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/cv" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                CV
              </Link>
              <Link href="/projects" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                Projects
              </Link>
              <Link href="/talks" className="hover:text-gray-600 dark:hover:text-gray-400 transition font-medium">
                Talks
              </Link>
              <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4">Talks & Presentations</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Posters and presentations at academic conferences and workshops.
          </p>

          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === option
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTalks.map((talk, index) => (
            <article key={index} className="flex flex-col bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-3xl p-6">
              {talk.image && (
                <div className="mb-6 rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center shrink-0" style={{ maxHeight: "200px" }}>
                  <img
                    src={talk.image}
                    alt={talk.title}
                    className="w-full h-full object-contain max-h-[200px]"
                  />
                </div>
              )}
              
              <div className="flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-2 py-1 text-[10px] font-bold rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    {talk.type}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">{talk.date}</span>
                </div>

                <div className="mb-3">
                  <h2 className="text-lg font-bold text-black dark:text-white leading-snug cursor-default">
                    {talk.title}
                  </h2>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">{talk.event}</p>
                  {talk.authors && <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{talk.authors}</p>}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                  {talk.description}
                </p>

                <div className="mt-auto space-y-2">
                  {talk.doi && (
                    <div>
                      <a
                        href={`https://doi.org/${talk.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline text-sm font-medium transition"
                      >
                        DOI: {talk.doi} →
                      </a>
                    </div>
                  )}
                  {talk.link && (
                    <div>
                      <a
                        href={talk.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline text-sm font-medium transition"
                      >
                        {talk.linkText} →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
