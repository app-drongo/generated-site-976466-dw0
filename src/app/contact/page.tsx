import Contact from '../../components/Contact';
import Cta from '../../components/Cta';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </main>
  );
}