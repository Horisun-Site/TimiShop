import React from "react";
import { motion } from "framer-motion";
import { User, Code2, Sparkles, Cpu, PenTool, Mail, Rocket } from "lucide-react";

const Slap = () => {
  return (
    <div className="relative w-full py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden px-6 md:px-20">
      {/* Floating Icons */}
      <motion.div
        className="absolute top-10 left-10 text-yellow-400"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Cpu size={40} />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 text-blue-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Code2 size={40} />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-xl"
      >
        About Me
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-center text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-16"
      >
        A multi-skilled tech enthusiast with a solid foundation in science, engineering, and modern digital technologies.
      </motion.p>

      {/* About Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image / Icon */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="bg-white/10 p-10 rounded-3xl backdrop-blur-xl shadow-2xl border border-white/20">
            <User size={120} className="text-yellow-300 drop-shadow-xl" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-lg leading-relaxed space-y-4"
        >
          <p>
            I am a graduate of <span className="font-bold text-yellow-300">Physics with Electronics</span> from
            <span className="font-bold text-blue-300"> BOUESTI (Bamidele Olumilua University of Education, Science and Technology, Ikere-Ekiti)</span>.
          </p>

          <p>
            A passionate <span className="text-yellow-300 font-semibold">Computer Engineer</span> with strong problem-solving skills and hands-on experience in hardware and software systems.
          </p>

          <p>
            I am also a <span className="text-green-300 font-semibold">Graphic Designer</span>,
            <span className="text-red-300 font-semibold"> Email Marketer</span>, <span className="text-green-300 font-semibold">GMB (Google My Business)</span> and
            <span className="text-purple-300 font-semibold"> SEO Specialist</span> with a focus on growth-driven digital strategies.
          </p>

          <p>
            As a <span className="text-blue-300 font-semibold">Web Developer</span>, I work with technologies such as:
          </p>

          <ul className="list-disc ml-6 space-y-2 opacity-90">
            <li>FrontEnd Developer</li>
            <li>BackEnd Developer</li>
            <li>Next.js & React</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Tailwind CSS</li>
            <li>Python</li>
            <li>FastAPI Backend</li>
            <li>MongoDB</li>
            <li>Casandra</li>
          </ul>

          <p>
            My goal is simple: <span className="font-bold text-yellow-300">to build powerful, modern, and scalable digital experiences</span> that solve real-world problems.
          </p>
        </motion.div>
      </div>

      {/* Bottom Animation Strip */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-400/20 to-transparent"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>
    </div>
  );
};

export default Slap;