import BenefitsSection from './BenefitsSection';
import OurSolutionSection from './OurSolutionSection';
import FeaturesSection from './FeaturesSection';
import WhyChooseUs from './WhyChooseUs';
import OurExpertise from './OurExpertise';
import AboutSection from './AboutSection';
import Benefits from './Benefits';
import DigitalSolutions from './DigitalSolutions';
import PricingPlan from './PricingPlan';
import Faq from './Faq';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import ContactUs from './ContactUs';

export default function HomeSections() {
  return (
    <>
      <div className="pageShell">
        <BenefitsSection />
        <OurSolutionSection />
        <FeaturesSection />
        <WhyChooseUs />
        <OurExpertise />
        <AboutSection />
        <Benefits />
        <DigitalSolutions />
        <PricingPlan />
        <Faq />
        <Testimonials />
        <CallToAction />
        <ContactUs />
      </div>
    </>
  );
}
