import { Mail, Phone, UserRound, MessageSquare, ArrowRight } from 'lucide-react';
import { useLang } from '../lib/useLang';

export default function RequestDemoPage() {
  const { dir, t } = useLang();
  const page = t.requestDemo;

  return (
    <main className="min-h-[70vh] bg-white">
      <section className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36 lg:pb-28">
        <div className="absolute inset-0 hero-radial" />
        <div className="container-page relative grid gap-9 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-14">
          <div>
            <p className="eyebrow">{page.kicker}</p>
            <h1 className="display-title mt-4 sm:mt-5">{t.simple.demo.title}</h1>
            <p className="body-large mt-5 max-w-2xl sm:mt-7">{t.simple.demo.body}</p>

            <div className="mt-7 grid gap-3 sm:mt-9">
              {page.steps.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-white/75 px-4 py-3 shadow-sm">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-bluex" />
                  <span className="text-[15px] leading-7 text-ink/75 sm:text-[16px]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <form
            className="rounded-[2rem] border border-ink/8 bg-white/90 p-5 shadow-soft backdrop-blur-xl sm:rounded-[2.6rem] sm:p-8 lg:p-10"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 sm:col-span-2 lg:col-span-1">
                <span className="text-[14px] font-medium text-ink/75">{page.fields.name.label}</span>
                <span className="relative">
                  <UserRound className="pointer-events-none absolute top-1/2 -translate-y-1/2 text-bluex/70 start-4" size={18} />
                  <input
                    required
                    type="text"
                    placeholder={page.fields.name.placeholder}
                    className="w-full rounded-2xl border border-ink/10 bg-mist/55 px-4 py-4 text-[15px] text-ink outline-none transition focus:border-bluex/45 focus:bg-white ps-12"
                  />
                </span>
              </label>

              <label className="grid gap-2 sm:col-span-2 lg:col-span-1">
                <span className="text-[14px] font-medium text-ink/75">{page.fields.phone.label}</span>
                <span className="relative">
                  <Phone className="pointer-events-none absolute top-1/2 -translate-y-1/2 text-bluex/70 start-4" size={18} />
                  <input
                    required
                    type="tel"
                    placeholder={page.fields.phone.placeholder}
                    className="w-full rounded-2xl border border-ink/10 bg-mist/55 px-4 py-4 text-[15px] text-ink outline-none transition focus:border-bluex/45 focus:bg-white ps-12"
                  />
                </span>
              </label>

              <label className="grid gap-2 sm:col-span-2">
                <span className="text-[14px] font-medium text-ink/75">{page.fields.email.label}</span>
                <span className="relative">
                  <Mail className="pointer-events-none absolute top-1/2 -translate-y-1/2 text-bluex/70 start-4" size={18} />
                  <input
                    required
                    type="email"
                    placeholder={page.fields.email.placeholder}
                    className="w-full rounded-2xl border border-ink/10 bg-mist/55 px-4 py-4 text-[15px] text-ink outline-none transition focus:border-bluex/45 focus:bg-white ps-12"
                  />
                </span>
              </label>

              <label className="grid gap-2 sm:col-span-2">
                <span className="text-[14px] font-medium text-ink/75">{page.fields.message.label}</span>
                <span className="relative">
                  <MessageSquare className="pointer-events-none absolute top-5 text-bluex/70 start-4" size={18} />
                  <textarea
                    rows={5}
                    placeholder={page.fields.message.placeholder}
                    className="min-h-[150px] w-full resize-none rounded-2xl border border-ink/10 bg-mist/55 px-4 py-4 text-[15px] leading-7 text-ink outline-none transition focus:border-bluex/45 focus:bg-white ps-12"
                  />
                </span>
              </label>
            </div>

            <button type="submit" className="btn-primary mt-6 w-full gap-2 sm:mt-8">
              {page.submit}
              <ArrowRight size={18} className={dir === 'rtl' ? 'rotate-180' : ''} />
            </button>

            <p className="mt-4 text-center text-[13px] leading-6 text-muted">
              {page.note}
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
