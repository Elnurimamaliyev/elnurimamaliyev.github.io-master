"use client";
import Link from "next/link";

export default function PyWeekAz() {
  const days = [
    {
      title: "Gün 0 — Quraşdırma",
      date: "Başlamadan öncə",
      duration: "15 dəqiqə",
      description: "Workshopdan əvvəl komputerinizi tapşırıqlar üçün hazırlayın: Python-u, lazımi kitabxanaları və kod redaktorunuzu (VS code) quraşdırın.",
      topics: ["VS Code", "Tapşırıq dataları"]
    },
    {
      title: "Gün 1 — Python Əsasları və Elmi Proqramlaşdırmaya Giriş",
      date: "4 May 2026",
      duration: "2–3 saat",
      description: "Python əsaslarını öyrənin — dəyişənlər, məlumat tipləri, dövrələr, şərtlər, funksiyalar, lüğətlər və CSV ilə fayl işləri. NumPy, Pandas, Matplotlib və SciPy-a praktiki nümunələrlə giriş.",
      topics: ["Python Əsasları", "Məlumat Tipləri", "Funksiyalar", "Fayl I/O", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      title: "Gün 2 — Tapşırıqların Analizi və AI-dəstəkli Prototipləmə",
      date: "6 May 2026",
      duration: "2–3 saat",
      description: "1-ci günün ev tapşırıqlarının həlli müzakirə olunacaq. ChatGPT, Claude və Copilot ilə sürətli prototipləmə öyrənin. Effektiv kodlaşdırma iş axını üçün prompt mühəndisliyi texnikası.",
      topics: ["Kod Nəzərdən Keçirilməsi", "AI Alətləri", "Prompt Mühəndisliyi", "Prototipləmə", "ChatGPT", "Claude", "Copilot"]
    },
    {
      title: "Gün 3 — Qiymətləndirmə və İnkişaf Yolları",
      date: "8 May 2026",
      duration: "2–3 saat",
      description: "Tələbələrin AI-dəstəkli prototiplərinin təqdimatı. Qiymətləndirmə meyarları: funksionallıq, kod keyfiyyəti, AI istifadəsi, təqdimat keyfiyyəti. Açıq müzakirə və resurslar.",
      topics: ["Təqdimatlar", "Kod Keyfiyyəti", "Qiymətləndirmə", "Ən Yaxşı Praktikalar", "Resurslar"]
    }
  ];

  const assignments = [
    {
      title: "Bioinformatika Tapşırığı",
      description: "Biologiya sekans analizi və ya protein struktur proqnozuna Python və məlumat analizi tətbiq edin."
    },
    {
      title: "Neyroelm Tapşırığı",
      description: "NumPy və SciPy istifadə edərək sinyal işləmə və neyral məlumatlar analizi ilə işləyin."
    },
  ];

  const outcomes = [
    { title: "Python Əsasları", description: "Dəyişənlər, məlumat tipləri, dövrələr, şərtlər, funksiyalar və fayl I/O əməliyyatları" },
    { title: "Elmi Kitabxanalar", description: "Rəqəmli hesablamalar üçün NumPy, məlumat manipulyasiyası üçün Pandas, vizualizasiya üçün Matplotlib" },
    { title: "Məlumat Analizi", description: "CSV məlumatları oxuyun, emal edin və vizualizasiya edin; SciPy ilə statistik analiz" },
    { title: "AI-dəstəkli Prototipləmə", description: "ChatGPT, Claude və GitHub Copilot ilə düzgün prompt verə bilmə və sürətli prototipləmə" }
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
              <Link href="/pyweek/az" className="hover:text-gray-600 dark:hover:text-gray-400 transition font-medium">
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
            href="/pyweek/en"
            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 transition"
          >
            🇬🇧 English
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
              Workshop
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">
              Tamamlanmış
            </span>
          </div>

          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
            🐍 PyWeek
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8 font-medium">
            Elmi Proqramlaşdırma və Məlumat Analizi Workshopu
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mb-12">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              PyWeek elmi proqramlamaya giriş edən STEM tələbələri üçün üçün hazırlanmış python əsaslı 3 günlük workshopdur 
              — workshopa başlamaq üçün heç proqramlaşdırma təcrübəsi tələb olunmur. 3 gün boyunca Python əsasları, məlumat 
              (data) analizi, və AI-dəstəkli prototipləmə haqqında məlumat veriləcək və praktiki layihələr keçiriləcəkdir.
            </p>
          </div>

          {/* Key Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Müddət</p>
              <p className="text-lg font-bold text-black dark:text-white">3 Gün</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Format</p>
              <p className="text-lg font-bold text-black dark:text-white">Online</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Səviyyə</p>
              <p className="text-lg font-bold text-black dark:text-white">Başlanğıc</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Dil</p>
              <p className="text-lg font-bold text-black dark:text-white">Python</p>
            </div>
          </div>
        </div>

        {/* Days Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            Workshop Proqramı
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
                  href={`/pyweek/az/day${idx}`}
                  className="inline-block px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition text-sm"
                >
                  Slaydlara Bax →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Homework Challenges */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            Sahə-spesifik Tapşırıqlar
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            1-ci günün sonundan sonra iştirakçılar öz tədqiqat maraqlarına uyğun sahəyə xas tapşırıqlar alacaqlar:
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
            Nələr Öyrənəcəksiniz
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
            📥 Mənbələr & Yükləmələr
          </h2>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800 rounded-2xl p-8">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Bütün praktiki nümunələr, Jupyter Notebook-lar və əlavə mənabələr aşağıdakı səhifədə mövcuddur:
            </p>
            <Link
              href="/pyweek/az/resources"
              className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
            >
              🔗 Bütün Mənbələrə Keçid →
            </Link>
          </div>
        </section>

        {/* Technology Stack */}
        <section>
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
            Texnologiya Yığını
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
