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
      ease: [0.25, 0.46, 0.45, 0.94],
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
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
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
    </main>
  );
}
