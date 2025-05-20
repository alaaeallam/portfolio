"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+20) 1007777344",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "alaaeallam@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Ciaro, Egypt",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const { toast } = useToast();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q9trfa7",
        "template_kxnr2jh",
        form.current,
        "12ZKGYp6nDokJpBC_"
      )
      .then(
        (result) => {
          toast({
            title: "Message sent!",
            description: "Thank you for reaching out. I will get back to you soon.",
          });
        },
        (error) => {
          toast({
            title: "Failed to send message",
            description: "Please try again.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Let’s build something impactful together. Whether you’re looking to automate workflows, improve retention, or visualize performance, I’m here to help.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="Firstname" />
                <Input name="lastname" type="text" placeholder="Lastname" />
                <Input name="email" type="email" placeholder="Email address" />
                <Input name="phone" type="text" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* btn */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
