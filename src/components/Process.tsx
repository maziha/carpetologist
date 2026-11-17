import { Reveal } from './ui/Reveal';

const steps = [
  { title: 'Tell us about the room', text: 'Share the size, the light and the mood of the space, by message or in person.' },
  { title: 'We lay out the pieces', text: 'At the showroom we unroll a short selection side by side, so you can walk on each one.' },
  { title: 'Delivered and laid', text: 'Your carpet arrives with white-glove delivery and is placed in the room by our team.' },
];

/** How a private viewing runs, as a three-line ledger. */
export const Process = () => (
  <section className="relative py-28 md:py-44">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 md:gap-8">
      <div className="md:col-span-4">
        <Reveal as="p" className="eyebrow">The private viewing</Reveal>
        <Reveal as="h2" className="mt-6 md:mt-8 display-md font-light text-ink">
          From first message to <em className="italic text-oxblood">your floor</em>
        </Reveal>
      </div>
      <ol className="md:col-span-7 md:col-start-6">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={0.05 * i} className="grid grid-cols-[3.5rem_1fr] md:grid-cols-[6rem_1fr_1fr] gap-x-6 gap-y-3 items-baseline border-t border-ink/20 py-9 md:py-11 last:border-b">
            <span className="numeral text-3xl md:text-4xl">0{i + 1}</span>
            <h3 className="font-display font-light text-ink text-3xl md:text-4xl leading-none">{s.title}</h3>
            <p className="col-start-2 md:col-start-3 text-[17px] text-ink/75 leading-relaxed">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);
