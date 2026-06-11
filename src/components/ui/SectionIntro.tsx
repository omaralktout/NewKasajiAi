type SectionIntroProps = {
  label: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
};

export default function SectionIntro({ label, title, body, align = 'left' }: SectionIntroProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}>
      <p className="eyebrow">{label}</p>
      <h2 className="section-title mt-5">{title}</h2>
      {body ? <p className="body-large mt-5 max-w-3xl">{body}</p> : null}
    </div>
  );
}
