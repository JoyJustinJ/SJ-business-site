import React, { useState, useEffect } from 'react';
import { useScroll, useTransform, motion, AnimatePresence } from 'motion/react';
import {
  Star,
  MapPin,
  Phone,
  Clock,
  ShoppingBag,
  Truck,
  Menu,
  X,
  ChevronRight,
  Instagram,
  Facebook,
  MessageCircle,
  Award,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

interface Collection {
  id: string;
  title: string;
  image: string;
  category: string;
}

// --- Data ---
const REVIEWS: Review[] = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Nice collection, best customer service, good ambience. Highly recommended for men's wear in Krishnagiri.",
    date: "2 weeks ago"
  },
  {
    name: "Suresh ",
    rating: 5,
    text: "Best all-in one fashion for mens - quality, style, comfort and great service. The kids collection is also very trendy.",
    date: "1 month ago"
  },
  {
    name: "Anitha M",
    rating: 4,
    text: "Excellent fashion store with wide variety. Reasonable pricing and very helpful staff. Delivery was prompt.",
    date: "3 months ago"
  },
  {
    name: "Vijay kanapathi",
    rating: 5,
    text: "The traditional wear collection is outstanding. I bought a dhoti set for a wedding and the quality was top-notch.",
    date: "4 months ago"
  },
  {
    name: "Priya Dharshini",
    rating: 5,
    text: "I love the kids' section! So many trendy options for my son. The staff is very patient and helpful.",
    date: "5 months ago"
  },
  {
    name: "Karthik Raja",
    rating: 4,
    text: "Good collection of western wear. The fit of the shirts is perfect. Definitely the best store in Krishnagiri.",
    date: "6 months ago"
  }
];

const COLLECTIONS: Collection[] = [
  { id: '1', title: 'Traditional Elegance', category: 'Traditional Wear', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800' },
  { id: '2', title: 'Modern Streetwear', category: 'Western Wear', image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'Little Champs', category: 'Kids Collection', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&q=80&w=800' },
  { id: '4', title: 'Festive Vibes', category: 'Festive Special', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800' },
  { id: '5', title: 'Trending Now', category: 'Trending', image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800' },
  { id: '6', title: 'Formal Mastery', category: 'Western Wear', image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=800' },
];

const BUSINESS_HOURS = [
  { day: 'Monday', hours: '9:00 AM - 10:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 10:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 10:00 PM' },
  { day: 'Thursday', hours: '9:00 AM - 10:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 10:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 10:00 PM' },
  { day: 'Sunday', hours: '9:00 AM - 10:00 PM' },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Collections', href: '#collections' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-2xl font-display font-extrabold tracking-tighter text-gold">S.J FASHIONS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors" style={{ color: 'var(--color-text-muted)' }}
            >
              {link.name}
            </a>
          ))}
          <a href="tel:09944373272" className="btn-gold text-sm py-2 px-6">
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden" style={{ color: 'var(--color-text-primary)' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass p-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium" style={{ color: 'var(--color-text-body)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:09944373272" className="btn-gold text-center">
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 180]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen clothes background */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img
          src="/heroo-bg.jpg"
          alt="Men's Fashion Store"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.22) 45%, rgba(0,0,0,0.60) 100%)' }} />
      </motion.div>

      {/* Centred overlay content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Rating badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 text-sm font-semibold"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.35)', backdropFilter: 'blur(8px)' }}
          >
            <Star className="w-4 h-4 fill-white text-white" />
            4.6 Rated &nbsp;·&nbsp; 56 Google Reviews
          </motion.div>

          {/* Brand name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-display font-black mb-3 leading-tight text-white drop-shadow-lg"
          >
            S.J Fashions
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="text-xl md:text-2xl italic font-light mb-4"
            style={{ color: 'rgba(255,255,255,0.88)' }}
          >
            Best All-in-One Fashion Store
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-16 h-0.5 mx-auto mb-6"
            style={{ background: 'rgba(255,255,255,0.55)' }}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.78)' }}
          >
            Premium Men's &amp; Kids' Wear in Krishnagiri — Traditional, Western, and the latest trendy collections for every occasion.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#collections"
              className="flex items-center gap-2 px-10 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:scale-105"
              style={{ background: 'var(--color-btn-primary)', color: '#fff', letterSpacing: '0.08em' }}
            >
              SHOP COLLECTIONS <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:09944373272"
              className="flex items-center gap-2 px-10 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all hover:scale-105"
              style={{ border: '2px solid rgba(255,255,255,0.65)', color: '#fff', background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(6px)', letterSpacing: '0.08em' }}
            >
              <Phone className="w-4 h-4" /> CALL US
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 rounded-full flex justify-center p-1" style={{ borderColor: 'var(--color-border-dark)' }}>
          <div className="w-1 h-2 rounded-full" style={{ background: 'var(--color-text-primary)' }}></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-gold font-display font-bold uppercase tracking-widest text-sm mb-4">Our Story</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-8">Quality + Style + Comfort</h3>

          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--color-text-body)' }}>
            <p>
              At S.J Fashions, we believe that fashion is a reflection of your personality. Located in the heart of Krishnagiri, we've been serving our community with the finest men's and kids' wear for years.
            </p>
            <p>
              From majestic traditional outfits for weddings to sharp western wear for the modern professional, our curated collections ensure you always look your best.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-12">
            <div className="flex flex-col">
              <span className="text-4xl font-display font-black text-gold mb-1">Wide</span>
              <span className="text-sm uppercase font-bold tracking-tighter" style={{ color: 'var(--color-text-muted)' }}>Variety</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-display font-black text-gold mb-1">Best</span>
              <span className="text-sm uppercase font-bold tracking-tighter" style={{ color: 'var(--color-text-muted)' }}>Pricing</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden gold-border">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
              alt="Store Ambience"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl max-w-xs hidden lg:block">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'var(--color-btn-primary)' }}>
                <Users className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase" style={{ color: 'var(--color-text-muted)' }}>Happy Customers</p>
                <p className="text-xl font-display font-black">5000+</p>
              </div>
            </div>
            <p className="text-sm italic" style={{ color: 'var(--color-text-body)' }}>"Best all-in one fashion for mens - quality, style, comfort and great service"</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Collections = () => {
  return (
    <section id="collections" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gold font-display font-bold uppercase tracking-widest text-sm mb-4">Curated Styles</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold">Our Collections</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{item.category}</p>
                <h4 className="text-2xl font-display font-bold text-white group-hover:text-gold transition-colors">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding overflow-hidden" style={{ backgroundColor: 'var(--color-bg-section)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-gold font-display font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold">What Our Customers Say</h3>
          </div>
          <div className="flex items-center gap-6 glass p-4 rounded-2xl">
            <div className="text-center pr-6" style={{ borderRight: '1px solid var(--color-border)' }}>
              <p className="text-3xl font-display font-black text-gold">4.6</p>
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-gold" />)}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>56 Google Reviews</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=S.J+Fashions+Krishnagiri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline" style={{ color: 'var(--color-text-muted)' }}
              >
                Write a Review
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl flex flex-col gold-border" style={{ background: 'var(--color-bg-card)' }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn("w-4 h-4", i < review.rating ? "fill-[var(--color-accent)] text-[var(--color-accent)]" : "text-[var(--color-border)]")}
                  />
                ))}
              </div>
              <p className="mb-6 italic leading-relaxed text-sm flex-grow" style={{ color: 'var(--color-text-body)' }}>&#8220;{review.text}&#8221;</p>
              <div className="flex items-center justify-between mt-auto pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
                <span className="font-display font-bold text-sm" style={{ color: 'var(--color-text-primary)' }}>{review.name}</span>
                <span className="text-[10px]" style={{ color: 'var(--color-text-faint)' }}>{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold font-display font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-12">Visit Our Store</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center shrink-0">
                  <MapPin className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-2">Location</h4>
                  <p className="leading-relaxed" style={{ color: 'var(--color-text-body)' }}>
                    Opposite BSNL Office, LIG Colony, Londenpet,<br />
                    Krishnagiri, Tamil Nadu – 635001<br />
                    <span className="text-xs font-bold uppercase mt-1 block" style={{ color: 'var(--color-text-faint)' }}>SIDCO Industrial Estate | G6J5+89</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center shrink-0">
                  <Phone className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-2">Contact</h4>
                  <p className="mb-4" style={{ color: 'var(--color-text-body)' }}>099443 73272</p>
                  <div className="flex gap-4">
                    <a href="tel:09944373272" className="btn-gold py-2 px-6 text-sm">Call Now</a>
                    <a href="https://wa.me/919944373272" target="_blank" rel="noopener noreferrer" className="py-2 px-6 rounded-full text-sm font-bold flex items-center gap-2" style={{ background: 'var(--color-bg-subtle)', color: 'var(--color-text-primary)', border: '1px solid var(--color-border)' }}>
                      <MessageCircle className="w-4 h-4 text-emerald-500" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center shrink-0">
                  <Clock className="text-gold w-6 h-6" />
                </div>
                <div className="w-full">
                  <h4 className="font-display font-bold text-lg mb-4">Business Hours</h4>
                  <div className="space-y-2 max-w-xs">
                    {BUSINESS_HOURS.map((item) => (
                      <div key={item.day} className="flex justify-between text-sm">
                        <span style={{ color: 'var(--color-text-muted)' }}>{item.day}</span>
                        <span className="font-medium" style={{ color: 'var(--color-text-primary)' }}>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-3xl overflow-hidden gold-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.833621512411!2d78.225916!3d12.527333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac496000000001%3A0x0!2zMTLCsDMxJzM4LjQiTiA3OMKwMTMnMzMuMyJF!5e0!3m2!1sen!2sin!4v1709366400000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t py-12 px-6" style={{ backgroundColor: 'var(--color-text-primary)', borderTopColor: 'var(--color-border-dark)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-display font-black text-gold">S.J FASHIONS</span>
          <p className="text-sm mt-2" style={{ color: 'var(--color-border)' }}>© 2024 S.J Fashions. All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: '#ccc' }}>
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: '#ccc' }}>
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: '#ccc' }}>
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        <div className="text-xs text-center md:text-right" style={{ color: 'var(--color-border)' }}>
          <p>Opposite BSNL Office, LIG Colony, Londenpet</p>
          <p>Krishnagiri, Tamil Nadu – 635001</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919944373272"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:09944373272"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-white md:hidden" style={{ background: 'var(--color-btn-primary)', boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
      >
        <Phone className="w-7 h-7" />
      </motion.a>
    </div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg-primary)' }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glitch font-display uppercase tracking-[0.5em]" data-glitch="S.J FASHIONS">
              S.J FASHIONS
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <Hero />
        <About />
        <Collections />
        <Reviews />
        <Contact />
        <Footer />
        <FloatingActions />
      </motion.div>
    </div>
  );
}
