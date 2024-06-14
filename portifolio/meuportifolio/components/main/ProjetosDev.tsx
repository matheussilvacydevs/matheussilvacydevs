"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "../../utils/motion";
import Image from "next/image";
import ProjectCard from "../sub/ProjectCard";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Projetos em
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Desenvolvimento{" "}
          </span>
        </motion.div>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/img/Project001.png"
          title="Okami Animes"
          description="Okami Animes - Site de Streaming de Animes e Hospedador de Mangás."
        />
        {/*<ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        /> */}
      </div>
      
      </div>
      
    </div>
  );
};

export default Encryption;
