import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soul Pump Fitness — Strength Meets Stretch" },
      { name: "description", content: "A movement studio combining resistance training, mobility & beginner-friendly inversions. Feel stronger and expanded at the same time." },
      { property: "og:title", content: "Soul Pump Fitness — Strength Meets Stretch" },
      { property: "og:description", content: "A movement studio combining resistance training, mobility & beginner-friendly inversions." },
    ],
  }),
  component: Index,
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function Index() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-cream pt-24 lg:pt-0">
        <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 lg:flex-row lg:px-8">
          {/* Text Content */}
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
              beginner-friendly inversions. Feel stronger and expanded at the same
              time.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="rounded-lg bg-dusty-rose px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-dusty-rose/90"
              >
                Book a Free Class
              </Link>
              <Link
                to="/classes"
                className="rounded-lg border-[1.5px] border-dusty-rose px-6 py-3 text-sm font-medium text-dusty-rose transition-colors hover:bg-dusty-rose hover:text-white"
              >
                View Schedule
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image Placeholder */}
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

      {/* About Section */}
      <section id="about" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
          {/* Image */}
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

          {/* Text */}
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
                Since 2013, we&apos;ve been helping people move better, feel stronger, and expand their bodies — not break them down. Soul Pump Fitness was born from a simple belief: your workout should leave you feeling powerful and open, not sore and compressed.
              </p>
              <p>
                Our classes blend resistance training with yoga-inspired mobility and beginner-friendly inversions that support circulation and spinal lengthening. Every session is taught in an intimate group setting where we see you, guide you, and grow with you.
              </p>
              <p>
                We&apos;re not about pushing harder — we&apos;re about moving smarter. Our focus is longevity, so your body thrives for decades to come.
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-8 rounded-lg bg-dusty-rose px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-dusty-rose/90"
            >
              Meet Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
