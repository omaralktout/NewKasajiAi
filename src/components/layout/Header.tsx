import { Link, NavLink } from 'react-router-dom';
import { Globe2, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useLang } from '../../lib/useLang';
import { navLinks } from '../../data/routes';
import { asset } from '../../lib/assets';

const navItemClass = (isActive: boolean) =>
  `rounded-full px-3 py-2 text-[14px] font-medium transition xl:px-4 2xl:px-5 ${
    isActive
      ? 'bg-[#4B5596]/10 text-[#4B5596]'
      : 'text-ink/78 hover:bg-[#4B5596]/8 hover:text-[#4B5596]'
  }`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const close = () => setOpen(false);
  const switchLang = () => setLang(lang === 'en' ? 'ar' : 'en');

  return (
    <header className="fixed inset-x-0 top-0 z-[100] pt-4 sm:pt-5 lg:pt-6">
      <div className="mx-auto w-full max-w-[1720px] px-4 sm:px-6 lg:px-8 2xl:px-10">
        <div className="flex min-h-[78px] items-center justify-between gap-4 rounded-full border border-white/75 bg-white/94 px-4 shadow-[0_18px_70px_rgba(75,85,150,0.16)] backdrop-blur-xl sm:min-h-[84px] sm:px-5 lg:min-h-[92px] lg:px-7 xl:px-9 2xl:px-10">
        <Link
  to="/"
  className="flex shrink-0 items-center gap-2 sm:gap-3"
  onClick={close}
  aria-label={t.common.homeAria}
>
  <img
    src={asset("kasaji-logo-full.png")}
    alt={t.common.logoAlt}
    className="h-12 w-12 object-contain sm:h-14 sm:w-14 lg:h-[66px] lg:w-[66px] xl:h-[72px] xl:w-[72px]"
  />

  <img
    src={asset("kasajiai.png")}
    alt={t.common.logoWordmarkAlt}
    className="h-[26px] w-auto object-contain sm:h-[30px] lg:h-[36px] xl:h-[40px]"
  />
</Link>

          <nav className="hidden items-center gap-1 lg:flex xl:gap-2 2xl:gap-3">
            {navLinks.map(({ key, href }) => (
              <NavLink
                key={key}
                to={href}
                className={({ isActive }) => navItemClass(isActive)}
              >
                {t.nav[key]}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex xl:gap-3">
            <button
              onClick={switchLang}
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[14px] font-medium text-ink/78 transition hover:bg-[#4B5596]/8 hover:text-[#4B5596]"
              aria-label={t.common.switchLanguageAria}
            >
              <Globe2 size={17} />
              {lang === 'en' ? 'AR' : 'EN'}
            </button>

            <NavLink
              to="/login"
              className="rounded-full px-3 py-2 text-[14px] font-medium text-ink/78 transition hover:bg-[#4B5596]/8 hover:text-[#4B5596]"
            >
              {t.nav.login}
            </NavLink>

            <NavLink
              to="/request-demo"
              className="rounded-full bg-gradient-to-r from-[#4B5596] to-[#6450A0] px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_14px_34px_rgba(100,80,160,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(100,80,160,0.32)] xl:px-6 2xl:px-7"
            >
              {t.nav.demo}
            </NavLink>

            <NavLink
              to="/explore-kasaji"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7468F3] via-[#34BFE3] to-[#3FC9B8] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_14px_34px_rgba(52,191,227,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(52,191,227,0.32)] xl:px-6 2xl:px-7"
            >
              {t.nav.explore}
              <ArrowRight size={16} />
            </NavLink>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#4B5596]/15 text-[#4B5596] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.common.toggleMenuAria}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open ? (
          <div className="mt-3 lg:hidden">
            <div className="grid gap-1 rounded-[2rem] border border-white/80 bg-white/96 p-3 shadow-[0_18px_70px_rgba(75,85,150,0.16)] backdrop-blur-xl">
              
              {navLinks.map(({ key, href }) => (
                <NavLink
                  key={key}
                  to={href}
                  onClick={close}
                  className="rounded-2xl px-4 py-3 text-[15px] font-medium text-ink hover:bg-[#4B5596]/8 hover:text-[#4B5596]"
                >
                  {t.nav[key]}
                </NavLink>
              ))}

              <NavLink
                to="/login"
                onClick={close}
                className="rounded-2xl px-4 py-3 text-[15px] font-medium text-ink hover:bg-[#4B5596]/8 hover:text-[#4B5596]"
              >
                {t.nav.login}
              </NavLink>

              <NavLink
                to="/request-demo"
                onClick={close}
                className="mt-2 rounded-full bg-gradient-to-r from-[#4B5596] to-[#6450A0] px-5 py-3 text-center text-[15px] font-medium text-white"
              >
                {t.nav.demo}
              </NavLink>

              <NavLink
                to="/explore-kasaji"
                onClick={close}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7468F3] via-[#34BFE3] to-[#3FC9B8] px-5 py-3 text-center text-[15px] font-semibold text-white"
              >
                {t.nav.explore}
                <ArrowRight size={16} />
              </NavLink>

              <button
                onClick={switchLang}
                className="rounded-full border border-[#4B5596]/15 px-5 py-3 text-[15px] font-medium text-[#4B5596]"
              >
                {lang === 'en' ? t.common.switchToArabic : t.common.switchToEnglish}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}