import { Link } from 'react-router-dom';
import { useLang } from '../../lib/useLang';

export default function CtaSection() {
  const { t } = useLang();
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-page">
        <div className="overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-mist via-white to-[#eef8ff] p-7 shadow-soft sm:rounded-[3rem] sm:p-12 lg:p-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="sub-title max-w-3xl">{t.cta.title}</h2>
              <p className="body-large mt-5 max-w-2xl">{t.cta.body}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link to="/request-demo" className="btn-primary">{t.cta.primary}</Link>
              <Link to="/resources" className="btn-secondary">{t.cta.secondary}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
