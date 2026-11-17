import { useNavigate } from 'react-router-dom';
import { Reveal } from './ui/Reveal';

import horizonImg from '../assets/images/2524DOUBLE.jpg';
import kmsImg from '../assets/images/IMG_20260201_150218.jpg';

interface SisterOrganizationsProps {
  hideHeader?: boolean;
}

export const SisterOrganizations = ({ hideHeader = false }: SisterOrganizationsProps) => {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 md:py-44 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {!hideHeader && (
          <Reveal as="h2" className="display-lg font-light text-ink mb-16 md:mb-28">Our group</Reveal>
        )}

        <div className="space-y-24 md:space-y-40">
          <div className="grid md:grid-cols-12 gap-10 md:gap-8 items-center">
            <Reveal className="md:col-span-7 frame">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={horizonImg} alt="Horizon Ventures artificial grass at sunset" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-4 md:col-start-9 space-y-6">
              <p className="eyebrow">Outdoors</p>
              <h3 className="font-display font-light text-ink text-5xl md:text-6xl leading-none">Horizon Ventures</h3>
              <p className="text-lg text-ink/75 leading-relaxed">
                Evergreen landscapes that defy the elements. Premium artificial grass that turns outdoor voids into vibrant, maintenance-free sanctuaries.
              </p>
              <button onClick={() => navigate('/horizon')} className="btn btn-oxblood">Explore solutions</button>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-8 items-center">
            <Reveal delay={0.15} className="md:col-span-4 md:col-start-2 space-y-6 order-2 md:order-1">
              <p className="eyebrow">Commercial</p>
              <h3 className="font-display font-light text-ink text-5xl md:text-6xl leading-none">KMS Carpets</h3>
              <p className="text-lg text-ink/75 leading-relaxed">
                A catalogue of high-performance flooring. Durability tailored to contemporary design, the foundation for commercial and modern residential projects.
              </p>
              <button onClick={() => navigate('/kms')} className="btn btn-ghost-dark">View catalogue</button>
            </Reveal>
            <Reveal className="md:col-span-5 md:col-start-8 frame order-1 md:order-2">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={kmsImg} alt="Patterned blue carpet in a living room" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
