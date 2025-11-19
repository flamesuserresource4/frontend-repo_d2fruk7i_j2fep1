export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-slate-600 text-sm">
            <div className="font-semibold text-slate-900">Budaörs Industrial Logistics Center</div>
            <div>info@example.com • +36 1 234 5678</div>
            <div>H-2040 Budaörs, Hungary</div>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Impressum</a>
          </div>
        </div>
        <div className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  );
}
