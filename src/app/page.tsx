"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="largeSizeMediumTitles"
      background="grid"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Cozy Haven"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Experience", id: "experience" },
            { name: "Menu", id: "menu" },
            { name: "Testimonials", id: "testimonials" }
          ]}
          button={{
            text: "Visit Us Today",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Your Coziest Escape"
          description="Discover where premium coffee meets warmth. Duplex seating, artisanal drinks, and a leather workshop awaiting your visit."
          tag="★ 5.0 Rated • Best Coffee Shop in Town"
          tagAnimation="slide-up"
          buttons={[
            { text: "Visit Us Today", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773728189798-ncpyqr7o.jpg",              imageAlt: "Cozy coffee shop with warm lighting and comfortable seating"
            }
          ]}
          ariaLabel="Hero section - Cozy Haven Coffee Shop"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "A Story of Passion & Craft" },
            { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773728189799-qs3tvwo0.jpg", alt: "Coffee and leather craftsmanship" }
          ]}
          buttons={[
            { text: "Learn More", href: "#experience" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
          ariaLabel="About section - Our Story"
        />
      </div>

      <div id="experience" data-section="experience">
        <FeatureCardEight
          title="The Cozy Haven Experience"
          description="More than coffee—it's an escape. Enjoy our unique duplex setting paired with a working leather workshop."
          tag="What Makes Us Special"
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Duplex Seating",              description: "Multi-level comfort with intimate corners and open spaces. Every seat tells a story.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773728189799-fx5e2kql.jpg",              imageAlt: "Modern duplex coffee shop seating design"
            },
            {
              id: 2,
              title: "Leather Workshop",              description: "Watch artisans craft premium leather goods while you sip. Pure authenticity in action.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773728189799-20b18rbw.jpg",              imageAlt: "Artisan leather workshop crafting premium details"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          buttonAnimation="slide-up"
          ariaLabel="Experience section - What Makes Us Special"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardFour
          title="Signature Creations"
          description="Our artisanal drinks crafted with passion. Limited menu, maximum impact."
          tag="Menu Highlights"
          tagAnimation="slide-up"
          products={[
            {
              id: "espresso-airag",              name: "Espresso Airag",              price: "8,500₮",              variant: "Unique Blend",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773728189799-i7b4okiv.jpg",              imageAlt: "Specialty espresso airag signature drink"
            },
            {
              id: "traditional-mongolian",              name: "Traditional Mongolian",              price: "6,500₮",              variant: "Heritage Recipe",              imageSrc: "http://img.b2bpic.net/free-photo/side-view-hand-holding-emty-teapot_140725-12902.jpg",              imageAlt: "Traditional Mongolian coffee beverage"
            },
            {
              id: "cold-brew-classic",              name: "Cold Brew Classic",              price: "7,000₮",              variant: "24-Hour Steep",              imageSrc: "http://img.b2bpic.net/free-photo/refreshing-boozy-white-russian-cocktail-with-vodka-cream_123827-37413.jpg",              imageAlt: "Premium cold brew coffee"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
          ariaLabel="Menu section - Signature Creations"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Loved by Locals"
          description="Join hundreds who've discovered their new favorite place."
          tag="Community Love"
          tagAnimation="slide-up"
          names={[
            "Locals",            "Expats",            "Coffee Lovers",            "Creatives",            "Business Leaders",            "Families",            "Couples",            "Solo Adventurers"
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          showCard={true}
          ariaLabel="Social proof section - Community Love"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="What Our Guests Say"
          description="Real words from people who've made Cozy Haven their escape."
          tag="Testimonials"
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              role: "Digital Nomad",              company: "Remote Worker",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-smiling-woman-sweater-standing-with-arms-folded-isolated-gray-background_231208-7348.jpg"
            },
            {
              id: "2",              name: "Michael Chen",              role: "Business Owner",              company: "Local Startup",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-businessman-office-clothing_23-2148763859.jpg"
            },
            {
              id: "3",              name: "Amara Tserendorj",              role: "Artist & Designer",              company: "Creative Studio",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/stylish-woman-silk-beige-dress-orange-oversized-blazer-green-positive-emotions-smile_343596-6539.jpg"
            },
            {
              id: "4",              name: "David Kim",              role: "Barista Enthusiast",              company: "Coffee Connoisseur",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-holding-cup_23-2149442323.jpg"
            }
          ]}
          kpiItems={[
            { value: "1,200+", label: "Happy Guests" },
            { value: "50+", label: "Leather Items Crafted" },
            { value: "5.0★", label: "Guest Rating" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
          ariaLabel="Testimonials section - Guest Stories"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Your New Favorite Place"
          title="Ready for an Escape?"
          description="Join us at Cozy Haven. Book a visit or drop us a message—we'd love to welcome you."
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={true}
          inputPlaceholder="Enter your email"
          buttonText="Notify Me"
          termsText="By subscribing, you agree to our Privacy Policy and Terms of Service."
          ariaLabel="Contact section - Get in Touch"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Cozy Haven"
          columns={[
            {
              title: "Navigate",              items: [
                { label: "Home", href: "#hero" },
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Menu", href: "#menu" }
              ]
            },
            {
              title: "Visit Us",              items: [
                { label: "Address", href: "#" },
                { label: "Hours", href: "#" },
                { label: "Phone", href: "tel:+97699999999" },
                { label: "Email", href: "mailto:hello@cozyhaven.mn" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Contact", href: "#contact" },
                { label: "Newsletter", href: "#contact" }
              ]
            }
          ]}
          copyrightText="© 2025 Cozy Haven Coffee & Leather Workshop. All rights reserved."
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}