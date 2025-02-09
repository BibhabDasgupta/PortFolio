import React, { useEffect, useRef } from "react";
import { motion, useAnimation  } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="flex items-center justify-center px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      {/* About Me Section */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="text-gray-300 w-10/12 max-w-3xl text-center leading-relaxed"
      >
        <h3 className="text-4xl font-semibold mb-5">
          About <span>Me</span>
        </h3>
        <p className="text-justify">
          I am Bibhab Dasgupta, a Computer Science and Engineering student at
          IIIT Guwahati with a passion for software development and
          problem-solving. I have experience in web development, blockchain,
          and backend systems. My skills include building scalable applications,
          secure authentication, and integrating modern technologies to create
          efficient solutions. Always eager to learn, I thrive on tackling
          challenges and developing innovative software.
        </p>
        <p className="text-justify mt-4">
          You can reach me via email at{" "}
          <a href="mailto:dasguptabibhab@gmail.com" className="text-blue-400">
            dasguptabibhab@gmail.com
          </a>.
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
