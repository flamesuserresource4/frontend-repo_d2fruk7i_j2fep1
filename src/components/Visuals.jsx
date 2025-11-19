export default function Visuals() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white aspect-video flex items-center justify-center text-slate-500">
            <span className="text-sm">Aerial rendering placeholder</span>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white aspect-video flex items-center justify-center text-slate-500">
            <span className="text-sm">Warehouse interior placeholder</span>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white aspect-video flex items-center justify-center text-slate-500">
            <span className="text-sm">Site plan placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
