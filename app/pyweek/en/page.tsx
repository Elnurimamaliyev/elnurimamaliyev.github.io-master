"use client";
import Link from "next/link";

export default function PyWeekEn() {
  const days = [
    {
      title: "Day 0 — Environment Setup",
      date: "Before May 4",
      duration: "1–2 hours",
      description: "Prepare your development environment before the workshop. Install Python, essential libraries, and configure your code editor. Verify all installations work correctly.",
      topics: ["Python Installation", "Virtual Environments", "pip", "IDE Setup"],
      dayNum: 0
    },
    {
      title: "Day 1 — Python Basics & Scientific Programming Intro",
      date: "May 4, 2026",
      duration: "2–3 hours",
      description: "Learn Python fundamentals — variables, data types, loops, conditionals, functions, dictionaries, and file I/O with CSV. Introduction to NumPy, Pandas, Matplotlib, and SciPy with practical challenges.",
      topics: ["Python Basics", "Data Types", "Functions", "File I/O", "NumPy", "Pandas", "Matplotlib"],
      dayNum: 1
    },
    {
      title: "Day 2 — Assignment Analysis & AI-Powered Prototyping",
      date: "May 6, 2026",
      duration: "2–3 hours",
      description: "Review homework solutions from Day 1. Learn rapid prototyping with AI tools — ChatGPT, Claude, and Copilot. Master prompt engineering techniques and live demos of effective coding workflows.",
      topics: ["Code Review", "AI Tools", "Prompt Engineering", "Prototyping", "ChatGPT", "Claude", "Copilot"],
      dayNum: 2
    },
    {
      title: "Day 3 — Evaluation & Development Roadmap",
      date: "May 8, 2026",
      duration: "2–3 hours",
      description: "Student presentations of their AI-assisted prototypes. Evaluation criteria: functionality, code quality, AI usage, presentation clarity. Open discussion and resources for self-development.",
      topics: ["Presentations", "Code Quality", "Evaluation", "Best Practices", "Resources"],
      dayNum: 3
    }
  ];

  const assignments = [
    {
      title: "Bioinformatics Challenge",
      description: "Apply Python and data analysis to biological sequence analysis or protein structure prediction."
    },
    {
      title: "Neuroscience Challenge",
      description: "Work with signal processing and neural data analysis using NumPy and SciPy."
    },
  ];

  const outcomes = [
    { title: "Python Fundamentals", description: "Variables, data types, loops, conditionals, functions, and file I/O operations" },
    { title: "Scientific Libraries", description: "NumPy for numerical computing, Pandas for data manipulation, Matplotlib for visualization" },
    { title: "Data Analysis", description: "Read, process, and visualize CSV data; statistical analysis with SciPy" },
    { title: "AI-Assisted Development", description: "Prompt engineering and rapid prototyping with ChatGPT, Claude, and GitHub Copilot" }
  ];

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
              <Link href="/talks" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                Talks
              </Link>
              <Link href="/teaching" className="hover:text-gray-600 dark:hover:text-gray-400 transition">
                Teaching
              </Link>
              <Link href="/pyweek/en" className="hover:text-gray-600 dark:hover:text-gray-400 transition font-medium">
                PyWeek
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
        {/* Language Switch Link */}
        <div className="flex justify-end mb-12">
          <Link
            href="/pyweek/az"
            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 transition"
          >
            🇦🇿 Azərbaycanca
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
              Workshop
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">
              Complete
            </span>
          </div>

          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            🐍 PyWeek
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8 font-medium">
            Scientific Programming & Data Analysis Workshop
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mb-12">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              PyWeek is a 3-day Python-based workshop designed for STEM students entering scientific programming 
              — no prior coding experience required. Over 3 days, learn Python fundamentals, data analysis, and 
              AI-assisted prototyping through hands-on projects and practical challenges.
            </p>
          </div>

          {/* Key Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Duration</p>
              <p className="text-lg font-bold text-black dark:text-white">3 Days</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Format</p>
              <p className="text-lg font-bold text-black dark:text-white">Online</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Level</p>
              <p className="text-lg font-bold text-black dark:text-white">Beginner</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Language</p>
              <p className="text-lg font-bold text-black dark:text-white">Python</p>
            </div>
          </div>
        </div>

        {/* Days Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            Workshop Curriculum
          </h2>

          <div className="space-y-6">
            {days.map((day, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                      {day.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      📅 {day.date} · ⏱ {day.duration}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {day.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {day.topics.map((topic, topicIdx) => (
                    <span key={topicIdx} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                      {topic}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/pyweek/en/day${day.dayNum}`}
                  className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition text-sm"
                >
                  View Slides →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Homework Challenges */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            Domain-Specific Challenges
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            After Day 1, participants will receive domain-specific challenges aligned with their research interests:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assignments.map((assignment, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                  {assignment.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {assignment.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            What You'll Learn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="font-semibold text-black dark:text-white flex items-center gap-2">
                  <span className="text-lg">✅</span> {outcome.title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm ml-6 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            📥 Resources & Downloads
          </h2>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800 rounded-2xl p-8">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              All practical examples, Jupyter Notebooks, and additional materials are available on the resources page:
            </p>
            <Link
              href="/pyweek/en/resources"
              className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
            >
              🔗 Go to All Resources →
            </Link>
          </div>
        </section>

        {/* Technology Stack */}
        <section>
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {["Python", "NumPy", "Pandas", "Matplotlib", "SciPy", "Jupyter", "ChatGPT", "Claude", "GitHub Copilot"].map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
