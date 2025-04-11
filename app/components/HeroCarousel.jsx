import { motion } from "framer-motion";

const slides = [
  {
    title: "Elevate Your Style",
    image: "/productimages/hero1.jpg",
    cta: "Explore Now"
  },
  {
    title: "Streetwear That Pops",
    image: "/productimages/hero2.webp",
    cta: "Shop Now"
  }
];

export default function HeroSection() {
  return (
    <section className="py-0 overflow-hidden">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-[80vh]"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 z-10">
              <h2 className="text-white text-[72px] font-black leading-tight tracking-tight drop-shadow-md">
                {slide.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}