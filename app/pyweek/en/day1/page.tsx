"use client";
import Link from "next/link";

export default function Day1En() {
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
              <Link href="/pyweek/en" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                ← Back
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Day Header */}
          <div className="mb-12 text-center">
            <div className="flex justify-center gap-2 mb-6">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                PyWeek Workshop
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">
                Day 1
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
              Day 1
            </h1>
            <p className="text-3xl text-gray-600 dark:text-gray-400 font-medium mb-2">
              Python Basics & Scientific Programming Intro
            </p>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              May 4, 2026 · 2–3 hours
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Overview */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Overview</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Learn Python fundamentals — variables, data types, loops, conditionals, functions, dictionaries, and file I/O with CSV. Introduction to NumPy, Pandas, Matplotlib, and SciPy with practical challenges.
              </p>
            </section>

            {/* First Half */}
            <section className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">First Half (1 hour)</h2>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Python Fundamentals</h3>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">✓</span>
                  <span>Variables and data types (int, float, string, list, dict, tuple)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">✓</span>
                  <span>Control flow: conditionals (if/elif/else) and loops (for/while)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">✓</span>
                  <span>Functions: definition, parameters, return values</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">✓</span>
                  <span>File I/O and CSV operations with practical examples</span>
                </li>
              </ul>
            </section>

            {/* Second Half */}
            <section className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Second Half (1 hour)</h2>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Scientific Libraries Introduction</h3>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">📦</span>
                  <span><strong>NumPy:</strong> Numerical computing and arrays</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">📦</span>
                  <span><strong>Pandas:</strong> Data manipulation and analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">📦</span>
                  <span><strong>Matplotlib:</strong> Data visualization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl mt-1">📦</span>
                  <span><strong>SciPy:</strong> Scientific computing</span>
                </li>
              </ul>
            </section>

            {/* Topics */}
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Topics Covered</h2>
              <div className="flex flex-wrap gap-3">
                {["Python Basics", "Data Types", "Functions", "File I/O", "NumPy", "Pandas", "Matplotlib"].map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-medium rounded-full text-lg border border-purple-300 dark:border-purple-700">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between pt-8">
              <Link
                href="/pyweek/en/day0"
                className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-black dark:text-white font-semibold rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition text-lg"
              >
                ← Day 0
              </Link>
              <Link
                href="/pyweek/en/day2"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition text-lg"
              >
                Day 2 →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
