import { useLang } from '../lib/useLang';
import { asset } from '../lib/assets';

type SimpleKey = 'resources' | 'discover' | 'login' | 'demo' | 'explore';

export default function SimplePage({ page }: { page: SimpleKey }) {
  const { t } = useLang();
  const data = t.simple[page];
  return (
    <main className="min-h-[70vh] bg-white">
      <section className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36 lg:py-28">
        <div className="absolute inset-0 hero-radial" />
        <div className="container-page relative grid gap-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-12 lg:items-center">
          <div>
            <p className="eyebrow">{t.simple.kicker}</p>
            <h1 className="display-title mt-5">{data.title}</h1>
            <p className="body-large mt-7 max-w-2xl">{data.body}</p>
          </div>
          <div className="overflow-hidden rounded-[2.2rem] bg-mist shadow-soft sm:rounded-[3rem]">
            <img src={asset("images/resources-human.png")} alt={data.title} className="h-[300px] w-full object-cover object-right sm:h-[520px]" />
          </div>
        </div>
      </section>
    </main>
  );
}
