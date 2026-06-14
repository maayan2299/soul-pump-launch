import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Heart,
  User,
  Video,
  Camera,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  Send,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soul Pump Fitness — Strength Meets Stretch" },
      {
        name: "description",
        content:
          "A movement studio combining resistance training, mobility & beginner-friendly inversions. Feel stronger and expanded at the same time.",
      },
      {
        property: "og:title",
        content: "Soul Pump Fitness — Strength Meets Stretch",
      },
      {
        property: "og:description",
        content:
          "A movement studio combining resistance training, mobility & beginner-friendly inversions.",
      },
    ],
  }),
  component: Index,
});

/* ── Animation Variants ──────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ── FAQ Data ─────────────────────────────────────────────── */

const faqs = [
  {
    q: "What should I wear to class?",
    a: "Comfortable, stretchy workout clothes that allow free movement. We train barefoot, so no shoes needed!",
  },
  {
    q: "I've never done inversions before — is that okay?",
    a: "Absolutely! All inversions are beginner-friendly. We guide you step-by-step and offer modifications for every level.",
  },
  {
    q: "What makes Soul Pump different from a regular gym class?",
    a: "We combine resistance training with yoga-inspired mobility and inversions. The goal is to feel stronger AND more expanded — not broken down. We focus on longevity, not just intensity.",
  },
  {
    q: "Can I join if I'm pregnant?",
    a: "Yes! We offer dedicated prenatal classes designed to keep you strong and comfortable throughout your pregnancy. Let us know when you book and we'll guide you to the right class.",
  },
  {
    q: "How do the live online classes work?",
    a: "After you subscribe, you'll receive a permanent Zoom link. Classes stream live 5 days a week — just click, join, and move with us from anywhere.",
  },
  {
    q: "How many people are in each class?",
    a: "We keep our classes intimate and small so we can give you personal attention and ensure proper form throughout the session.",
  },
];

/* ── Schedule Data ────────────────────────────────────────── */

const schedule = [
  { day: "Monday", time: "9:00 AM", className: "Group Class", type: "group" },
  {
    day: "Tuesday",
    time: "9:00 AM",
    className: "Group Class",
    type: "group",
  },
  {
    day: "Wednesday",
    time: "9:00 AM",
    className: "Prenatal Class",
    type: "prenatal",
  },
  {
    day: "Thursday",
    time: "9:00 AM",
    className: "Group Class",
    type: "group",
  },
  { day: "Friday", time: "9:00 AM", className: "Group Class", type: "group" },
];

/* ── Testimonials Data ────────────────────────────────────── */

const testimonials = [
  {
    name: "Sarah M.",
    text: "I've been going to Soul Pump for over a year and my back pain is completely gone. The combination of strength and stretch is exactly what my body needed.",
    role: "Member since 2023",
  },
  {
    name: "David R.",
    text: "As a guy in my late 40s, I was tired of workouts that left me hurting. Soul Pump changed everything — I feel stronger and more mobile than I did in my 30s.",
    role: "Member since 2022",
  },
  {
    name: "Lisa K.",
    text: "The prenatal classes were a lifesaver during my pregnancy. Andy and Yahel truly care about every person in the room. I felt safe and supported the entire time.",
    role: "Prenatal member",
  },
];

/* ── FAQ Accordion Item ──────────────────────────────────── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-espresso/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-medium text-espresso sm:text-lg">
          {q}
        </span>
        <ChevronDown
          className={`ml-4 h-5 w-5 shrink-0 text-dusty-rose transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 pb-5" : "max-h-0"}`}
      >
        <p className="text-base leading-relaxed text-espresso/65">{a}</p>
      </div>
    </div>
  );
}

/* ── Main Page ────────────────────────────────────────────── */

function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sent");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setFormStatus("idle"), 4000);
  };

  return (
    <main>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[90vh] bg-cream pt-24 lg:pt-0">
        <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 lg:flex-row lg:px-8">
          <motion.div
            className="flex flex-1 flex-col items-start justify-center py-12 lg:py-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="max-w-lg text-4xl font-extrabold leading-[1.15] tracking-tight text-espresso sm:text-5xl lg:text-[3.5rem]"
            >
              Strength Meets Stretch
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-md text-base leading-relaxed text-espresso/60 sm:text-lg"
            >
              A movement studio combining resistance training, mobility &amp;
              beginner-friendly inversions. Feel stronger and expanded at the
              same time.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-lg bg-dusty-rose px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-dusty-rose/90"
              >
                Book a Free Class
              </a>
              <a
                href="#schedule"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#schedule")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-lg border-[1.5px] border-dusty-rose px-6 py-3 text-sm font-medium text-dusty-rose transition-colors hover:bg-dusty-rose hover:text-white"
              >
                View Schedule
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-1 items-center justify-center py-8 lg:py-0"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-stone shadow-[0_8px_40px_-12px_rgba(58,54,50,0.18)]">
              <img
                src="/images/hero-fitness.jpg"
                alt="Woman practicing yoga and strength training in a bright, airy studio with natural light"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ ABOUT ═══════════ */}
      <section id="about" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          <motion.div
            className="flex w-full flex-1 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-stone shadow-[0_8px_40px_-12px_rgba(58,54,50,0.18)]">
              <img
                src="/images/about-andy-yahel.jpg"
                alt="Andy and Yahel, founders of Soul Pump Fitness"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-1 flex-col items-start"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-dusty-rose">
              Our Story
            </span>
            <h2 className="mt-3 max-w-lg text-3xl font-bold leading-tight tracking-tight text-espresso sm:text-4xl lg:text-[2.5rem]">
              A Husband &amp; Wife Team on a Mission
            </h2>
            <div className="mt-6 max-w-md space-y-4 text-base leading-[1.7] text-espresso/70">
              <p>
                Since 2013, we&apos;ve been helping people move better, feel
                stronger, and expand their bodies — not break them down. Soul
                Pump Fitness was born from a simple belief: your workout should
                leave you feeling powerful and open, not sore and compressed.
              </p>
              <p>
                Our classes blend resistance training with yoga-inspired mobility
                and beginner-friendly inversions that support circulation and
                spinal lengthening. Every session is taught in an intimate group
                setting where we see you, guide you, and grow with you.
              </p>
              <p>
                We&apos;re not about pushing harder — we&apos;re about moving
                smarter. Our focus is longevity, so your body thrives for
                decades to come.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 rounded-lg bg-dusty-rose px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-dusty-rose/90"
            >
              Meet Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CLASSES ═══════════ */}
      <section id="classes" className="bg-cream py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-dusty-rose">
              What We Offer
            </span>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-espresso sm:text-4xl lg:text-[2.5rem]">
              Move Better. Feel Stronger.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-espresso/60">
              Classes designed for longevity — combining strength, stretch, and
              mindful movement.
            </p>
          </motion.div>

          <motion.div
            className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={itemVariants} className="flex flex-col items-start rounded-2xl bg-white p-8 shadow-[0_4px_24px_-8px_rgba(58,54,50,0.10)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dusty-rose/10">
                <Dumbbell className="text-dusty-rose" size={24} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-espresso">Group Classes</h3>
              <p className="mt-3 text-base leading-relaxed text-espresso/65">
                Intimate group sessions blending resistance training, mobility work, and beginner-friendly inversions. Feel stronger and expanded after every class.
              </p>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} className="mt-6 rounded-lg border-[1.5px] border-dusty-rose px-5 py-2.5 text-sm font-medium text-dusty-rose transition-colors hover:bg-dusty-rose hover:text-white">
                Book a Free Class
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-start rounded-2xl bg-white p-8 shadow-[0_4px_24px_-8px_rgba(58,54,50,0.10)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/10">
                <Heart className="text-sage" size={24} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-espresso">Prenatal Classes</h3>
              <p className="mt-3 text-base leading-relaxed text-espresso/65">
                Safe, gentle movement designed for expecting mothers. Build strength and flexibility while supporting your body through every stage of pregnancy.
              </p>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} className="mt-6 rounded-lg border-[1.5px] border-dusty-rose px-5 py-2.5 text-sm font-medium text-dusty-rose transition-colors hover:bg-dusty-rose hover:text-white">
                Learn More
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-start rounded-2xl bg-white p-8 shadow-[0_4px_24px_-8px_rgba(58,54,50,0.10)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dusty-rose/10">
                <User className="text-dusty-rose" size={24} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-espresso">Private Training</h3>
              <p className="mt-3 text-base leading-relaxed text-espresso/65">
                One-on-one sessions tailored to your body and goals. Perfect for those who want personalized attention and a custom movement plan.
              </p>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} className="mt-6 rounded-lg border-[1.5px] border-dusty-rose px-5 py-2.5 text-sm font-medium text-dusty-rose transition-colors hover:bg-dusty-rose hover:text-white">
                Get in Touch
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="relative flex flex-col items-start rounded-2xl bg-white p-8 shadow-[0_4px_24px_-8px_rgba(58,54,50,0.10)]">
              <span className="absolute right-6 top-6 rounded-full bg-sage px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                New
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/10">
                <Video className="text-sage" size={24} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-espresso">Live Online Classes</h3>
              <p className="mt-3 text-base leading-relaxed text-espresso/65">
                Join us live from anywhere, 5 days a week. Subscribe and get a permanent access link to our daily live sessions via Zoom.
              </p>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }} className="mt-6 rounded-lg bg-dusty-rose px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-dusty-rose/90">
                Subscribe &amp; Join
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ GALLERY ═══════════ */}
      <section id="gallery" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-dusty-rose">
              See Us in Action
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-espresso sm:text-4xl lg:text-[2.5rem]">
              Gallery
            </h2>
          </motion.div>

          <motion.div
            className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {[
              { aspect: "aspect-[4/3]" },
              { aspect: "aspect-[3/4]" },
              { aspect: "aspect-[4/3]" },
              { aspect: "aspect-[3/4]" },
              { aspect: "aspect-[4/3]" },
              { aspect: "aspect-[4/3]" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`group ${item.aspect} overflow-hidden rounded-2xl bg-stone transition-transform duration-300 hover:scale-[1.02]`}
              >
                <div className="flex h-full w-full items-center justify-center">
                  <Camera
                    className="text-dusty-rose/30 transition-colors group-hover:text-dusty-rose/50"
                    size={48}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section
        id="testimonials"
        className="bg-cream py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-dusty-rose">
              What Our Members Say
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-espresso sm:text-4xl lg:text-[2.5rem]">
              Real People. Real Results.
            </h2>
          </motion.div>

          <motion.div
            className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-[0_4px_24px_-8px_rgba(58,54,50,0.10)]"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, si) => (
                    <svg
                      key={si}
                      className="h-5 w-5 text-dusty-rose"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-5 flex-1 text-base leading-relaxed text-espresso/70">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 border-t border-espresso/10 pt-4">
                  <p className="font-medium text-espresso">{t.name}</p>
                  <p className="text-sm text-espresso/50">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SCHEDULE ═══════════ */}
      <section id="schedule" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-dusty-rose">
              Weekly Classes
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-espresso sm:text-4xl lg:text-[2.5rem]">
              Class Schedule
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-espresso/60">
              Join us in-studio or online. All times are Pacific Time (PT).
            </p>
          </motion.div>

          <motion.div
            className="mt-12 overflow-hidden rounded-2xl border border-espresso/10 bg-white"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {schedule.map((s, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-6 py-5 sm:px-8 ${
                  i !== schedule.length - 1 ? "border-b border-espresso/10" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      s.type === "prenatal" ? "bg-sage/10" : "bg-dusty-rose/10"
                    }`}
                  >
                    <Clock
                      className={
                        s.type === "prenatal" ? "text-sage" : "text-dusty-rose"
                      }
                      size={18}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-espresso">{s.day}</p>
                    <p className="text-sm text-espresso/50">{s.className}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-espresso/70">
                  {s.time}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.p
            className="mt-6 text-center text-sm text-espresso/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Schedule subject to change. Follow us on social media for updates.
          </motion.p>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section id="faq" className="bg-cream py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-dusty-rose">
              Common Questions
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-espresso sm:text-4xl lg:text-[2.5rem]">
              FAQ
            </h2>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ CONTACT ═══════════ */}
      <section id="contact" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-dusty-rose">
              Get in Touch
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-espresso sm:text-4xl lg:text-[2.5rem]">
              Book Your Free Class
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-espresso/60">
              Have a question or ready to start? Reach out and we&apos;ll get
              back to you within 24 hours.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <label className="mb-1.5 block text-sm font-medium text-espresso">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-espresso/15 bg-cream/50 px-4 py-3 text-espresso placeholder:text-espresso/35 focus:border-dusty-rose focus:outline-none focus:ring-2 focus:ring-dusty-rose/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-espresso">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-espresso/15 bg-cream/50 px-4 py-3 text-espresso placeholder:text-espresso/35 focus:border-dusty-rose focus:outline-none focus:ring-2 focus:ring-dusty-rose/20"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-espresso">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-lg border border-espresso/15 bg-cream/50 px-4 py-3 text-espresso placeholder:text-espresso/35 focus:border-dusty-rose focus:outline-none focus:ring-2 focus:ring-dusty-rose/20"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-espresso">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-lg border border-espresso/15 bg-cream/50 px-4 py-3 text-espresso placeholder:text-espresso/35 focus:border-dusty-rose focus:outline-none focus:ring-2 focus:ring-dusty-rose/20"
                  placeholder="Tell us about your goals or ask a question..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="flex items-center justify-center gap-2 rounded-lg bg-dusty-rose px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-dusty-rose/90 disabled:opacity-60"
              >
                <Send size={16} />
                {formStatus === "sent" ? "Message Sent!" : "Send Message"}
              </button>

              {formStatus === "sent" && (
                <p className="text-sm text-sage font-medium">
                  Thank you! We&apos;ll be in touch soon.
                </p>
              )}
            </motion.form>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col gap-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-dusty-rose/10">
                    <Phone className="text-dusty-rose" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-espresso">Phone</p>
                    <a
                      href="tel:+16612109171"
                      className="text-sm text-espresso/60 transition-colors hover:text-dusty-rose"
                    >
                      1-661-210-9171
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-dusty-rose/10">
                    <Mail className="text-dusty-rose" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-espresso">Email</p>
                    <a
                      href="mailto:Soulpumpfitness@gmail.com"
                      className="text-sm text-espresso/60 transition-colors hover:text-dusty-rose"
                    >
                      Soulpumpfitness@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sage/10">
                    <MapPin className="text-sage" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-espresso">Location</p>
                    <p className="text-sm text-espresso/60">
                      Los Angeles, California
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/16612109171?text=Hi!%20I%27d%20like%20to%20learn%20more%20about%20Soul%20Pump%20Fitness%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>

              {/* Map Placeholder */}
              <div className="aspect-video overflow-hidden rounded-2xl bg-stone">
                <div className="flex h-full w-full items-center justify-center">
                  <MapPin className="text-dusty-rose/30" size={48} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-espresso py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {/* Logo & Tagline */}
            <div>
              <p className="text-lg font-bold text-white">
                Soul Pump Fitness
              </p>
              <p className="mt-1 text-sm text-white/50">
                Strength Meets Stretch — Since 2013
              </p>
            </div>

            {/* Footer Nav */}
            <div className="flex flex-wrap justify-center gap-6">
              {["About", "Classes", "Gallery", "Testimonials", "Schedule", "FAQ", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(`#${link.toLowerCase()}`)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                )
              )}
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-dusty-rose hover:text-white"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-dusty-rose hover:text-white"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-dusty-rose hover:text-white"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 border-t border-white/10 pt-6 text-center">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Soul Pump Fitness. All rights
              reserved. Website by{" "}
              <a
                href="https://edensdesign.co.il"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-colors hover:text-white"
              >
                Eden&apos;s Design
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
