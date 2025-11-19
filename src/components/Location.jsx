export default function Location() {
  const bullets = [
    'Strategic logistics hub within Budapest metro area',
    'Immediate M1–M7 highway interchange access',
    'Established industrial ecosystem and services',
    'Skilled labor availability and public transport links',
  ];

  return (
    <section className="bg-slate-50" id="location">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Location</h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white h-80 flex items-center justify-center text-slate-500">
            <span className="text-sm">Map placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
