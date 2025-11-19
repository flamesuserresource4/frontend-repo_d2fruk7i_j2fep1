export default function Values() {
  const points = [
    { title: 'Prime location', desc: 'Direct M1–M7 access' },
    { title: 'Flexible warehouse units', desc: '1,500–10,000+ m²' },
    { title: 'High bay height', desc: '10–12 m' },
    { title: 'Energy-efficient', desc: 'Low operating cost' },
    { title: 'Truck-logistics infrastructure', desc: 'Docks, ramps' },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-base font-semibold text-slate-900">{p.title}</div>
              <div className="mt-1 text-slate-600 text-sm">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
