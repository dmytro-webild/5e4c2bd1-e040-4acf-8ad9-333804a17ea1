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
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function LandingPage() {
  const [feedbackTitle, setFeedbackTitle] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState('feedback');
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackSubmit = () => {
    if (feedbackTitle.trim() && feedbackMessage.trim()) {
      console.log({
        type: feedbackType,
        title: feedbackTitle,
        message: feedbackMessage,
        timestamp: new Date().toISOString()
      });
      setFeedbackTitle('');
      setFeedbackMessage('');
      setFeedbackType('feedback');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

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
          brandName="Mondo House"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Experience", id: "experience" },
            { name: "Menu", id: "menu" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Feedback", id: "feedback" }
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
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773728564093-ikkmcbiq.jpg?_wi=1",              imageAlt: "Cozy coffee shop with warm lighting and comfortable seating"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773728564093-mvx34qs7.jpg?_wi=1",              imageAlt: "Premium coffee preparation area"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773728564093-tlw08bfx.jpg",              imageAlt: "Artisan workspace and coffee bar"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773728564093-qzujjgtq.jpg",              imageAlt: "Cozy seating arrangement"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773728564093-9yu6yijx.jpg",              imageAlt: "Leather workshop and craftsmanship"
            }
          ]}
          ariaLabel="Hero section - Mondo House Coffee Shop"
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
          title="The Mondo House Experience"
          description="More than coffee—it's an escape. Enjoy our unique duplex setting paired with a working leather workshop."
          tag="What Makes Us Special"
          tagAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Duplex Seating",              description: "Multi-level comfort with intimate corners and open spaces. Every seat tells a story.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773729328084-gg18424m.jpg",              imageAlt: "Modern duplex coffee shop seating design"
            },
            {
              id: 2,
              title: "Leather Workshop",              description: "Watch artisans craft premium leather goods while you sip. Pure authenticity in action.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773729328085-vyb5h7wf.jpg",              imageAlt: "Artisan leather workshop crafting premium details"
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
              id: "velvet-espresso",              name: "Velvet Espresso",              price: "8,500₮",              variant: "Single Origin Ethiopia",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773729328085-220yxdi8.jpg",              imageAlt: "Velvet Espresso - rich and velvety single origin coffee"
            },
            {
              id: "golden-cardamom-blend",              name: "Golden Cardamom Blend",              price: "7,500₮",              variant: "Spiced Perfection",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773729328085-quw8eizl.png",              imageAlt: "Golden Cardamom Blend - aromatic spiced coffee drink"
            },
            {
              id: "midnight-cold-brew",              name: "Midnight Cold Brew",              price: "7,000₮",              variant: "48-Hour Steep",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773729328085-jdd3018c.png",              imageAlt: "Midnight Cold Brew - smooth and silky cold coffee"
            },
            {
              id: "honey-lavender-latte",              name: "Honey Lavender Latte",              price: "8,000₮",              variant: "Floral & Smooth",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773728564093-ikkmcbiq.jpg?_wi=2",              imageAlt: "Honey Lavender Latte - delicate floral coffee experience"
            },
            {
              id: "dark-cherry-mocha",              name: "Dark Cherry Mocha",              price: "8,200₮",              variant: "Premium Blend",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B3kHYi03TNsSDsRM9Ab1CVno1c/uploaded-1773728564093-mvx34qs7.jpg?_wi=2",              imageAlt: "Dark Cherry Mocha - rich chocolate and cherry fusion"
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
          description="Real words from people who've made Mondo House their escape."
          tag="Testimonials"
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "1",              name: "Batchuluun Otgonzaya",              role: "Coffee Enthusiast",              company: "Local Community",              rating: 5
            },
            {
              id: "2",              name: "Panacea Cruden",              role: "Designer",              company: "Creative Collective",              rating: 5
            },
            {
              id: "3",              name: "Gantig Bayrmaa",              role: "Artist",              company: "Independent Creator",              rating: 5
            },
            {
              id: "4",              name: "Цэрэнсодном Энхбаатар",              role: "Entrepreneur",              company: "Local Business",              rating: 5
            },
            {
              id: "5",              name: "Enkhuush Enkhuush",              role: "Writer",              company: "Content Creator",              rating: 5
            },
            {
              id: "6",              name: "Enguilen Gan-Erdene",              role: "Musician",              company: "Independent Artist",              rating: 5
            },
            {
              id: "7",              name: "it's me XIII",              role: "Blogger",              company: "Digital Influencer",              rating: 5
            },
            {
              id: "8",              name: "Bayasgalan Boldbaatar",              role: "Consultant",              company: "Strategic Partner",              rating: 5
            },
            {
              id: "9",              name: "맹남주",              role: "Cultural Ambassador",              company: "International Connection",              rating: 5
            },
            {
              id: "10",              name: "Sarah Johnson",              role: "Digital Nomad",              company: "Remote Worker",              rating: 5
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

      <div id="feedback" data-section="feedback">
        <div className="w-full py-20 px-6 bg-gradient-to-b from-transparent to-transparent">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold mb-4 text-foreground">We Value Your Feedback</h2>
              <p className="text-lg text-foreground/70">Help us improve your experience. Share your thoughts, suggestions, or report any issues.</p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-3">Type</label>
                <select
                  value={feedbackType}
                  onChange={(e) => setFeedbackType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-accent bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                >
                  <option value="feedback">General Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="compliment">Compliment</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-3">Title</label>
                <input
                  type="text"
                  value={feedbackTitle}
                  onChange={(e) => setFeedbackTitle(e.target.value)}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-lg border border-accent bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-cta"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-3">Your Message</label>
                <textarea
                  value={feedbackMessage}
                  onChange={(e) => setFeedbackMessage(e.target.value)}
                  placeholder="Tell us what's on your mind. Be as detailed as you'd like."
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-accent bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-cta resize-none"
                />
              </div>

              <button
                onClick={handleFeedbackSubmit}
                disabled={!feedbackTitle.trim() || !feedbackMessage.trim()}
                className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: feedbackTitle.trim() && feedbackMessage.trim() ? 'var(--primary-cta)' : 'var(--accent)',
                  cursor: feedbackTitle.trim() && feedbackMessage.trim() ? 'pointer' : 'not-allowed'
                }}
              >
                {submitted ? '✓ Thank You! Your feedback has been received.' : 'Submit Feedback'}
              </button>

              {submitted && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-center text-sm">
                  We appreciate your input and will review it shortly.
                </div>
              )}
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-cta mb-2">100+</div>
                <p className="text-foreground/70 text-sm">Feedback Received</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-cta mb-2">95%</div>
                <p className="text-foreground/70 text-sm">Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-cta mb-2">24h</div>
                <p className="text-foreground/70 text-sm">Response Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Your New Favorite Place"
          title="Ready for an Escape?"
          description="Join us at Mondo House. Book a visit or drop us a message—we'd love to welcome you."
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
          logoText="Mondo House"
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
                { label: "Email", href: "mailto:hello@mondohouse.mn" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Contact", href: "#contact" },
                { label: "Feedback", href: "#feedback" }
              ]
            }
          ]}
          copyrightText="© 2025 Mondo House Coffee & Leather Workshop. All rights reserved."
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}