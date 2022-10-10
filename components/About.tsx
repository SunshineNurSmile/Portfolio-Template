import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        src='/profile.jpg'
        className='-md-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Background About{" "}
          <span className='underline decoration-[#F7AB0A]/50'>Me</span>
        </h4>
        <p className='text-base'>
          Veniam do exercitation reprehenderit ex est eu officia anim. Occaecat
          ullamco adipisicing officia enim adipisicing reprehenderit Lorem duis
          veniam non do consectetur dolor. Eiusmod officia dolore id consectetur
          commodo cillum. Velit reprehenderit nisi quis deserunt quis officia
          dolore. Labore consectetur cillum adipisicing qui cupidatat laborum
          sunt. Ipsum officia sint excepteur deserunt nostrud reprehenderit sint
          sunt fugiat labore culpa deserunt veniam consectetur.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
