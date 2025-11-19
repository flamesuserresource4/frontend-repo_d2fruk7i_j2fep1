import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Budaörs • New development
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
              Budaörs Industrial Logistics Center
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-700 max-w-xl">
              Prime-location industrial warehouse space for long-term logistics operations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow-sm hover:bg-slate-800 transition">
                Request Details
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-50 transition">
                Download Brochure
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-sm text-slate-600">
              <div>
                <div className="font-semibold text-slate-900">Q1 2026</div>
                Estimated delivery
              </div>
              <div>
                <div className="font-semibold text-slate-900">10–12 m</div>
                High bay height
              </div>
              <div>
                <div className="font-semibold text-slate-900">M1–M7</div>
                Prime connectivity
              </div>
            </div>
          </div>
          <div className="relative h-[320px] sm:h-[420px] md:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
