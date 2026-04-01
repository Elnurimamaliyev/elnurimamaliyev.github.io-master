import Link from "next/link";

export default function CV() {
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
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4">Curriculum Vitae</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            <a href="/files/cv.pdf" className="text-blue-600 dark:text-blue-400 hover:underline">
              Download PDF
            </a>
          </p>
        </div>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">
            Education
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">
                Master of Science in Computational Neuroscience
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Ludwig Maximilian University of Munich</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">2024 | Munich, Germany</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Thesis: EEG-Based Implicit Intent Detection for Adaptive Mixed Reality Interfaces
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">
            Experience
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-white">
                Research Assistant - HCI & Wearables
              </h3>
              <p className="text-gray-600 dark:text-gray-400">LMU Munich</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">2023 - 2024</p>
              <ul className="mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                <li>• XR user study development with Unity-3D</li>
                <li>• Multimodal physiological data collection (EEG, eye-tracking)</li>
                <li>• Analysis of Stimulus Preceding Negativity patterns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">
            Skills
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Programming & Development</h3>
              <p className="text-gray-700 dark:text-gray-300">C#, Python, JavaScript, TypeScript, C++</p>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Tools & Frameworks</h3>
              <p className="text-gray-700 dark:text-gray-300">Unity, LSL (Lab Streaming Layer), React, Next.js, TensorFlow</p>
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white mb-2">Areas of Expertise</h3>
              <p className="text-gray-700 dark:text-gray-300">HCI, Wearable Computing, EEG Analysis, XR/VR Development, Cognitive Modeling, Machine Learning</p>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">
            Publications
          </h2>
          <div className="space-y-4">
            <div className="border-l-2 border-blue-600 pl-4">
              <h3 className="font-semibold text-black dark:text-white">
                Anticipation Before Action: EEG-Based Implicit Intent Detection for Adaptive Gaze Interaction in Mixed Reality
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Chiossi, F., Imamaliyev, E., Bleichner, M., & Mayer, S.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">ACM CHI 2026 (Main Conference, Full Paper)</p>
              <a href="https://arxiv.org/abs/2601.18750" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                arXiv:2601.18750
              </a>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-2xl font-bold text-black dark:text-white mb-6 border-b border-gray-200 dark:border-gray-800 pb-2">
            Languages
          </h2>
          <div className="space-y-2">
            <p className="text-gray-700 dark:text-gray-300">English - Fluent (C1)</p>
            <p className="text-gray-700 dark:text-gray-300">Russian - Native</p>
            <p className="text-gray-700 dark:text-gray-300">German - Intermediate (B2)</p>
          </div>
        </section>
      </main>
    </div>
  );
}
