/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Stethoscope,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants ---
const WHATSAPP_NUMBER = "+918360499485";
const CLINIC_ADDRESS = "SCO 239, Old Ropar Rd, Main Bazar, Sector 13, Chandigarh, 160101, India";
const CLINIC_HOURS = "Mon - Sat: 10:00 AM - 8:00 PM";

const SERVICES = [
  {
    id: 'rct',
    title: 'Root Canal Treatment (RCT)',
    description: 'Save your natural teeth with our painless, advanced RCT procedures using rotary technology.',
    benefits: ['Painless procedure', 'Saves natural tooth', 'Prevents infection spread'],
    icon: <Stethoscope className="w-6 h-6" />
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth that look and feel like natural teeth.',
    benefits: ['Natural appearance', 'Lifetime durability', 'Improved chewing'],
    icon: <Award className="w-6 h-6" />
  },
  {
    id: 'braces',
    title: 'Braces & Orthodontics',
    description: 'Straighten your smile with traditional braces or modern clear aligners.',
    benefits: ['Perfect alignment', 'Improved bite', 'Boosts confidence'],
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    description: 'Get a brighter, whiter smile in just one session with our professional bleaching.',
    benefits: ['Instant results', 'Safe for enamel', 'Removes deep stains'],
    icon: <Star className="w-6 h-6" />
  },
  {
    id: 'scaling',
    title: 'Scaling & Cleaning',
    description: 'Professional cleaning to remove plaque, tartar and prevent gum diseases.',
    benefits: ['Fresh breath', 'Healthy gums', 'Prevents cavities'],
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    id: 'crowns',
    title: 'Zirconia Crowns',
    description: 'High-strength, metal-free crowns for a natural and aesthetic look.',
    benefits: ['Highly durable', 'Biocompatible', 'Superior aesthetics'],
    icon: <Award className="w-6 h-6" />
  }
];

const REVIEWS = [
  {
    name: "Rahul Sharma",
    rating: 5,
    text: "Painless and smooth treatment. Dr. Neha is very professional and explained everything clearly.",
    date: "2 weeks ago"
  },
  {
    name: "Priya Singh",
    rating: 5,
    text: "Very professional doctor and clean clinic. Highly recommended for any dental issues in Chandigarh.",
    date: "1 month ago"
  },
  {
    name: "Amit Verma",
    rating: 5,
    text: "The best dental clinic in Sector 13. Affordable pricing and great results for my RCT.",
    date: "3 months ago"
  }
];

const FAQS = [
  {
    question: "Is Root Canal Treatment (RCT) painful?",
    answer: "No, with modern anesthesia and rotary technology, RCT is as comfortable as getting a filling. Most patients feel immediate relief from toothache after the first sitting."
  },
  {
    question: "What is the cost of braces?",
    answer: "The cost depends on the type of braces (Metal, Ceramic, or Aligners). It usually starts from ₹20,000. We offer flexible EMI options for orthodontic treatments."
  },
  {
    question: "Do I need an appointment?",
    answer: "While we do accept walk-ins, we highly recommend booking an appointment to minimize your waiting time. You can book instantly via WhatsApp."
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
            <Stethoscope size={24} />
          </div>
          <span className="text-xl font-bold font-display tracking-tight">
            Sai <span className="text-primary">Dental Care</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <a 
            href="#appointment" 
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-secondary transition-all shadow-lg hover:shadow-primary/30"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#appointment" 
                className="bg-primary text-white text-center py-3 rounded-xl font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello, I would like to book an appointment at Sai Dental Care.\n\nName:\nPhone:\nPreferred Date:\nTreatment Required:");
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://i.ibb.co/RppKgpmz/image.png" 
          alt="Sai Dental Care Clinic" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40 lg:from-white lg:via-white/80 lg:to-transparent" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Star size={16} fill="currentColor" />
              <span>4.9/5 Rated Dental Clinic in Chandigarh</span>
            </div>
            <h1 className="text-5xl lg:text-8xl font-bold leading-[1.1] mb-6 tracking-tight">
              Your Smile, <br />
              <span className="text-primary">Our Priority</span>
            </h1>
            <p className="text-xl text-slate-700 mb-10 max-w-xl leading-relaxed">
              Experience quality, affordable, and pain-free dental care at Sai Dental Care. 
              We use modern technology to ensure your comfort and oral health.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#appointment" 
                className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-primary/30 hover:bg-secondary transition-all flex items-center justify-center gap-2"
              >
                Book Appointment <ChevronRight size={20} />
              </a>
              <button 
                onClick={openWhatsApp}
                className="w-full sm:w-auto bg-white/80 backdrop-blur-sm text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-full font-bold text-lg hover:border-primary transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} className="text-[#25D366]" /> Chat on WhatsApp
              </button>
            </div>
            
            <div className="mt-16 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-slate-500 font-medium">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <div className="text-3xl font-bold">5k+</div>
                <div className="text-sm text-slate-500 font-medium">Happy Patients</div>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-sm text-slate-500 font-medium">Google Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">Comprehensive Dental Services</h3>
          <p className="text-slate-600 text-lg">
            From routine checkups to complex surgeries, we provide a wide range of dental treatments 
            tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-slate-100"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-slate-600 mb-6 line-clamp-2">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle2 size={16} className="text-primary" /> {benefit}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <a href="#appointment" className="text-slate-900 font-semibold flex items-center gap-1 hover:text-primary transition-colors">
                  Book Consultation <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/dentist1/400/500" alt="Dr. Neha" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
                <div className="bg-primary p-6 rounded-3xl text-white">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Patient Satisfaction</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-accent p-6 rounded-3xl text-slate-900">
                  <div className="text-3xl font-bold">Safe</div>
                  <div className="text-sm opacity-80">Modern Equipment</div>
                </div>
                <img src="https://picsum.photos/seed/dentist2/400/500" alt="Dr. Shobhit" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">About Sai Dental Care</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">A Women-Owned Business Dedicated to Your Health</h3>
            <p className="text-slate-600 text-lg mb-6">
              Founded by Dr. Neha, Sai Dental Care has been a trusted name in Chandigarh for over a decade. 
              We believe that dental care should be accessible, friendly, and most importantly, pain-free.
            </p>
            <p className="text-slate-600 text-lg mb-8">
              Our clinic is equipped with the latest dental technology, ensuring precise diagnosis and effective treatment. 
              Led by Dr. Neha and Dr. Shobhit, our team focuses on hygiene, patient comfort, and long-term oral health.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="font-bold">Expert Doctors</div>
                  <div className="text-sm text-slate-500">Dr. Neha & Dr. Shobhit</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="font-bold">Modern Tech</div>
                  <div className="text-sm text-slate-500">Digital X-Rays & Rotary RCT</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="font-bold">Hygiene First</div>
                  <div className="text-sm text-slate-500">Class B Sterilization</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="font-bold">Affordable</div>
                  <div className="text-sm text-slate-500">Transparent Pricing</div>
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline">
              Get Directions to our Clinic <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    treatment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, date, treatment } = formData;
    
    const message = `New Appointment Request:
Name: ${name}
Phone: ${phone}
Date: ${date}
Treatment: ${treatment}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="appointment" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-white">
            <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">Book Your Visit</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">Ready for a Brighter Smile?</h3>
            <p className="text-white/80 text-lg mb-8">
              Fill out the form to request an appointment. We will confirm your slot instantly via WhatsApp. 
              For emergencies, please call us directly.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-white/60">Call Us Directly</div>
                  <div className="text-xl font-bold">+91 8360499485</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="text-sm text-white/60">Clinic Hours</div>
                  <div className="text-xl font-bold">Open till 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-10 rounded-[40px] shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary transition-all"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary transition-all"
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Date</label>
                    <input 
                      type="date" 
                      name="date"
                      required
                      className="w-full px-4 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary transition-all"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Treatment Type</label>
                    <select 
                      name="treatment"
                      required
                      className="w-full px-4 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary transition-all"
                      onChange={handleChange}
                    >
                      <option value="">Select Treatment</option>
                      {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option value="General Consultation">General Consultation</option>
                      <option value="Emergency">Emergency</option>
                    </select>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-secondary transition-all flex items-center justify-center gap-2"
                >
                  Confirm on WhatsApp <MessageCircle size={24} />
                </button>
                <p className="text-center text-xs text-slate-400">
                  By clicking, you will be redirected to WhatsApp to confirm your booking.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">What Our Patients Say</h3>
          <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <p className="font-bold text-lg">4.9/5 based on 32+ Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-slate-700 italic mb-6">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-bold">{review.name}</span>
                <span className="text-xs text-slate-400">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Common Questions</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h3>
            <p className="text-slate-600 text-lg mb-8">
              We want you to be fully informed about your dental health. Here are some of the most common questions our patients ask.
            </p>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="font-bold mb-2">Still have questions?</h4>
              <p className="text-slate-500 text-sm mb-6">Our team is here to help you with any queries you might have.</p>
              <button 
                onClick={() => window.location.href = '#appointment'}
                className="text-primary font-bold flex items-center gap-2 hover:underline"
              >
                Ask us on WhatsApp <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl overflow-hidden border transition-all ${activeIdx === idx ? 'border-primary shadow-md' : 'border-slate-100'}`}
              >
                <button 
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  <ChevronRight className={`transition-transform duration-300 ${activeIdx === idx ? 'rotate-90' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeIdx === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-900 rounded-[40px] p-12 lg:p-16 text-white flex flex-col justify-center">
            <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">Contact Us</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-10">Visit Our Clinic</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <div className="text-white/60 text-sm mb-1">Our Location</div>
                  <div className="text-lg font-medium">{CLINIC_ADDRESS}</div>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-accent" />
                </div>
                <div>
                  <div className="text-white/60 text-sm mb-1">Phone Number</div>
                  <a href="tel:08360499485" className="text-2xl font-bold hover:text-accent transition-colors">08360499485</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-accent" />
                </div>
                <div>
                  <div className="text-white/60 text-sm mb-1">Working Hours</div>
                  <div className="text-lg font-medium">{CLINIC_HOURS}</div>
                  <div className="text-sm text-green-400 font-semibold mt-1">Open till 8:00 PM</div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CLINIC_ADDRESS)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-slate-900 px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="h-[500px] lg:h-auto rounded-[40px] overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.324329245104!2d76.8083113!3d30.7187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed163567839b%3A0x390fed163567839b!2sSai%20Dental%20Care!5e0!3m2!1sen!2sin!4v1711440000000!5m2!1sen!2sin" 
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <Stethoscope size={24} />
              </div>
              <span className="text-xl font-bold font-display tracking-tight">
                Sai <span className="text-primary">Dental Care</span>
              </span>
            </a>
            <p className="text-slate-500 mb-6">
              Providing premium dental care in Chandigarh for over 10 years. 
              Your comfort and oral health are our top priorities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Patient Reviews</a></li>
              <li><a href="#appointment" className="hover:text-primary transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#services" className="hover:text-primary transition-colors">Root Canal (RCT)</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Dental Implants</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Orthodontics</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Teeth Whitening</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">General Dentistry</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-500 mb-4 text-sm">Subscribe for dental health tips and offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-50 border-none rounded-xl px-4 py-3 flex-1 text-sm focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white p-3 rounded-xl hover:bg-secondary transition-all">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2026 Sai Dental Care. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Trust Banner */}
        <div className="bg-slate-50 py-10 border-y border-slate-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2 font-bold text-xl">
                <ShieldCheck className="text-primary" /> STERILIZED
              </div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <Award className="text-primary" /> CERTIFIED
              </div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <Stethoscope className="text-primary" /> EXPERIENCED
              </div>
              <div className="flex items-center gap-2 font-bold text-xl">
                <Star className="text-primary" /> 4.9 RATING
              </div>
            </div>
          </div>
        </div>

        <Services />
        <About />
        <Appointment />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
