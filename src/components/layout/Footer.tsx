import { Link } from 'react-router-dom';
import { useLang } from '../../lib/useLang';
import { navLinks } from '../../data/routes';
import { asset } from '../../lib/assets';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-ink text-white">
      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <img src={asset("kasaji-logo-full.png")} alt={t.common.logoAlt} className="h-12 w-auto brightness-0 invert" />
            <p className="mt-6 max-w-md text-[16px] leading-8 text-white/68">{t.footer.body}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:justify-items-end">
            <Link to="/" className="text-white/70 transition hover:text-white">{t.nav.home}</Link>
            {navLinks.map(({ key, href }) => <Link key={key} to={href} className="text-white/70 transition hover:text-white">{t.nav[key]}</Link>)}
            <Link to="/request-demo" className="text-white/70 transition hover:text-white">{t.nav.demo}</Link>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-[14px] text-white/50">© {new Date().getFullYear()} {t.common.brand}. {t.footer.copyright}</div>
      </div>
    </footer>
  );
}
