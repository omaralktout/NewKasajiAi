import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '../../lib/useLang';
import { asset } from '../../lib/assets';

type PageHeroProps = {
  label: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

export default function PageHero({ label, title, body, image, imageAlt }: PageHeroProps) {
  const { dir, t } = useLang();
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-28 sm:pb-24 sm:pt-36 lg:py-28">
      <div className="absolute inset-0 hero-radial" />
      <div className="container-page relative grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:items-center">
        <div>
          <p className="eyebrow">{label}</p>
          <h1 className="display-title mt-5 max-w-4xl">{title}</h1>
          <p className="body-large mt-7 max-w-2xl">{body}</p>
          <Link to="/request-demo" className="btn-primary mt-9 gap-2">
            {t.nav.demo}
            <ArrowRight size={18} className={dir === 'rtl' ? 'rotate-180' : ''} />
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-mist shadow-soft sm:rounded-[3rem]">
          <img src={asset(image)} alt={imageAlt} className="h-[320px] w-full object-cover object-right sm:h-[520px]" />
        </div>
      </div>
    </section>
  );
}
