export default function ProjectDetails() {
  const items = [
    { label: 'Construction', value: 'In progress' },
    { label: 'Estimated delivery', value: 'Q1 2026' },
    { label: 'Suitable for', value: 'E-commerce logistics, fulfillment centers, light manufacturing, wholesale distribution' },
    { label: 'Security', value: '24/7 surveillance, gated access' },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Project details</h2>
            <p className="mt-3 text-slate-600 max-w-md">Purpose-built industrial warehouse complex designed for scalable, long-term logistics operations in Budaörs.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map(i => (
              <div key={i.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs uppercase tracking-wide text-slate-500">{i.label}</div>
                <div className="mt-2 text-slate-900 font-medium">{i.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
