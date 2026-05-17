export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          npm Security Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Security Risk Score for<br />
          <span className="text-[#58a6ff]">Every npm Package</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          Instantly analyze any npm package for security risks — maintainer activity, CVE history, suspicious code patterns, and more. Protect your supply chain before it's too late.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Scanning — $15/mo
          </a>
          <a href="#faq" className="px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors">
            Learn More
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span className="flex items-center gap-2"><span className="text-[#3fb950]">&#10003;</span> Real-time CVE lookup</span>
          <span className="flex items-center gap-2"><span className="text-[#3fb950]">&#10003;</span> Maintainer activity scoring</span>
          <span className="flex items-center gap-2"><span className="text-[#3fb950]">&#10003;</span> API access included</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$15<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to secure your dependencies</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited package scans",
              "Real-time vulnerability alerts",
              "Maintainer trust scoring",
              "Code pattern analysis",
              "REST API access",
              "CI/CD integration support",
              "Email security digests"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="text-[#3fb950] font-bold">&#10003;</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How is the security score calculated?</h3>
            <p className="text-[#8b949e] text-sm">We combine CVE vulnerability history, maintainer commit frequency, package age, download trends, and static code pattern analysis into a single 0–100 risk score updated in real time.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I integrate this into my CI/CD pipeline?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Every Pro plan includes full REST API access with JSON responses, making it easy to block deployments when a package score drops below your threshold.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What npm registries are supported?</h3>
            <p className="text-[#8b949e] text-sm">We support the public npmjs.com registry today, with support for private registries and GitHub Packages on the roadmap for enterprise customers.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} DepSecScore. All rights reserved.
      </footer>
    </main>
  );
}
