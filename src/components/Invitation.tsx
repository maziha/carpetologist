import { Link } from 'react-router-dom';
import { Reveal } from './ui/Reveal';

interface InvitationProps {
  title?: string;
  lead?: string;
}

/** Closing call to action: a rug laid on the floor, shared by the main pages. */
export const Invitation = ({
  title = 'Stand on it before you decide.',
  lead = 'Book a private viewing and we will lay out the pieces that suit your room, your light and your budget.',
}: InvitationProps) => (
  <section className="relative py-24 md:py-40">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="rug overflow-visible">
        <div className="relative grid md:grid-cols-2 min-h-[420px]">
          <div className="p-10 md:p-20 flex flex-col justify-center">
            <Reveal as="h2" className="display-md font-light text-ivory">{title}</Reveal>
            <Reveal delay={0.1} className="mt-6 max-w-md text-lg text-ivory/85 leading-relaxed">{lead}</Reveal>
            <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-ivory">Book a private viewing</Link>
              <a href="tel:+917558077632" className="btn btn-ghost-light">Call +91 75580 77632</a>
            </Reveal>
          </div>
          <div className="relative min-h-[220px] m-[23px] md:ml-0">
            <img src="/assets/carpet-detail.webp" alt="Close view of a hand-knotted medallion" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
