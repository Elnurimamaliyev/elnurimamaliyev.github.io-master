import Link from "next/link";

export default function Home() {
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
      <main className="max-w-2xl mx-auto px-6 py-16">
        {/* Bio Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
            Elnur Imamaliyev
          </h1>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I recently finished my master's in computational neuroscience with an interdisciplinary background in cognitive modeling and machine learning. I did my master's thesis in HCI; more specifically, I developed an XR user study in Unity-3D (C#), used the LSL framework for multimodal physiological data collection (eye-tracker and EEG) to understand the Stimulus Preceding Negativity pattern as an implicit trigger for adaptive mixed reality.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I have graduated from Computational Neuroscience, and I want to do my Ph.D in wearables as well as psychological sensing.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Feel free to reach out to me via email or connect with me on LinkedIn if you would like to know more about me or my work.
          </p>
        </section>

        {/* Contact & Social Links */}
        <section className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex gap-6 text-sm">
            <a 
              href="mailto:imamaliyevelnur@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/elnurimamaliyev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/Elnurimamaliyev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
            <a 
              href="https://scholar.google.com/citations?hl=en&user=19zrLnIAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Google Scholar
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
