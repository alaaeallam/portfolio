"use client";
import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

// about data
const about = {
  title: "About me",
  description:
    "My name is Alaa Allam. I’m a strategic finance leader, data scientist, and customer experience expert. I’m from Cairo, Egypt, where I’ve built a career bridging business and analytics across telecom, retail, and food sectors.I’m deeply passionate about using AI to solve real business problems—from predicting customer churn to optimizing financial performance. Outside of work.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Alaa Allam",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+20) 1007777344",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "alaaeallam",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Egyptian",
    },
    {
      fieldName: "Email",
      fieldValue: "alaaeallam@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic, English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Career spanning strategy, analytics, AI integration, and leadership roles across telecom and F&B sectors.",
  items: [
    { company: "Telecommunications Sector", position: "Senior Manager – Strategic Finance & Analytics", duration: "2018 – Present" },
    { company: "Retail & F&B Sectors", position: "Data Science Consultant", duration: "2020 – Present" },
    { company: "Telecommunications Sector", position: "Customer Relations Senior Manager", duration: "2009 – 2018" },
    { company: "Telecommunications Sector", position: "Sales & Support Management Roles", duration: "2003 – 2009" }
  ],
};
// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2014 - 2016",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Technical, analytical, and business tools mastered over years of experience in digital transformation and AI.",
  skillList: [
    { icon: "🛠️", name: "Python" },
    { icon: "📊", name: "Excel" },
    { icon: "🧾", name: "ERP Systems" },
    { icon: "📈", name: "Financial Modeling" },
    { icon: "📉", name: "BI Tools" },
    { icon: "🤖", name: "ML & AI" },
    { icon: "💾", name: "SQL" },
    { icon: "📞", name: "CRM" },
    { icon: "📊", name: "Data Visualization" },
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";


const Resume = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [isIframeLoading, setIframeLoading] = useState(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h1 className="text-4xl font-bold">{experience.title}</h1>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
  key={index}
  className="bg-[#232329] py-6 px-6 rounded-xl flex flex-col justify-between gap-2 text-left"
>
  <div>
    <span className="text-accent font-semibold text-sm">
      {item.duration}
    </span>
    <h3 className="text-xl font-bold leading-snug mt-2">
      {item.position}
    </h3>
  </div>
  <div className="flex items-center gap-2 mt-2">
    <span className="w-2 h-2 rounded-full bg-accent" />
    <p className="text-white/80 text-sm">{item.company}</p>
  </div>
</li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <TooltipProvider delayDuration={100}>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
  {skills.skillList.map((skill, index) => (
  <li key={index} className="flex flex-col items-center gap-2">
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
          <span className="text-4xl group-hover:text-accent transition-all duration-300">
            {skill.icon}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="capitalize">{skill.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <p className="text-sm capitalize text-white/80">{skill.name}</p>
  </li>
))}

</ul>
                </TooltipProvider>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      {/* Floating Chat Button */}
<button
  onClick={() => setChatOpen(!chatOpen)}
  className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-emerald-600"
>
  {chatOpen ? "Close Chat" : "Chat with CV"}
</button>

{/* Chatbot iframe popup */}
 <AnimatePresence>
  {chatOpen && (
    <motion.div
      key="chatbot"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-24 right-6 w-[360px] h-[600px] bg-white rounded-xl shadow-2xl z-40 border border-gray-300 overflow-hidden"
    >
      
<div className="relative w-full h-full">
  {isIframeLoading && (
    <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-emerald-500"></div>
    </div>
  )}
  <iframe
    src="https://cv-chatbot-pmmw.onrender.com/"
    onLoad={() => setIframeLoading(false)}
    title="Alaa Chatbot"
    className="w-full h-full border-none"
    allow="microphone; camera"
  />
</div>

    </motion.div>
  )}
</AnimatePresence>
    </motion.div>
  );
};

export default Resume;
