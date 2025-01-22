"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Atd from "../assets/client-logos/atd-webp.webp";
import HundredN from "../assets/client-logos/hundred-n-cafe-webp.webp";
import Kortyard from "../assets/client-logos/kortyard-cafe-webp.webp";
import SevenDays from "../assets/client-logos/seven-days-webp.webp";
import VShine from "../assets/client-logos/v-shine-car-spa-webp.webp";

const testimonials = [
  {
    company: "AttentionToDetail",
    text: "What Next Studio transformed our brand's online presence with their creative strategies—results beyond expectations!",
    image: Atd,
  },
  {
    company: "100N",
    text: "Their team's dedication and innovative approach brought our vision to life. Highly recommend!",
    image: HundredN,
  },
  {
    company: "Kortyard",
    text: "Thanks to What Next Studio, our website traffic and customer engagement have skyrocketed.",
    image: Kortyard,
  },
  {
    company: "V Shine",
    text: "They understood our needs perfectly and delivered campaigns that truly connected with our audience.",
    image: VShine,
  },
  {
    company: "Seven Days",
    text: "Professional, reliable, and incredibly talented—What Next Studio is a game-changer for marketing.",
    image: SevenDays,
  },
];

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonials.length
      );
    }, 5000); // Change Time here

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const { company, text, image } = testimonials[currentTestimonial];

  const variants = {
    initial: { opacity: 0, y: "100%", scale: 0.1 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: "100%", scale: 0.1 },
  };
  const dotVariants = {
    active: { scale: 1.2, backgroundColor: "#3f3f46" },
    inactive: { scale: 1, backgroundColor: "#D1D5DB" },
  };

  return (
    <section className="py-12 md:py-24">
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentTestimonial}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex w-full flex-col items-center justify-center"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.5,
            }}
          >

            <img
              src={image.src}
              alt="Testimonials from Our Clients"
              className="mb-6 w-20 sm:w-24 md:w-32 lg:w-40"
            />


            <p className="m-0 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium tracking-tight">
              &quot;{text}&quot;
            </p>
          </motion.div>


          <div className="mt-8 flex justify-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.company}
                className="mx-1 h-1 w-1 cursor-pointer rounded-full"
                variants={dotVariants}
                animate={index === currentTestimonial ? "active" : "inactive"}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialCarousel;