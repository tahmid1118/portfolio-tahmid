"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2 list-disc">
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Swift (iOS)</li>
        <li>Flutter (Android/iOS)</li>
        <li>MySQL</li>
       
      </ul>
    ),
  },
  // {
  //   title: "Education",
  //   id: "education",
  //   content: (
  //     <ul className="pl-2 list-disc">
  //       <li>Fullstack Academy of Code</li>
  //       <li>University of California, Santa Cruz</li>
  //     </ul>
  //   ),
  // },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Us</h2>
          <p className="text-base lg:text-lg">
          Wolf IT is a forward-thinking IT firm specializing in the development of mobile and web applications that redefine user experiences. With a relentless pursuit of excellence, we are dedicated to crafting solutions that empower businesses to thrive in the digital age.
          </p>
          <p className="mt-8 text-base lg:text-lg">
          At Wolf IT, we believe in the power of innovation to drive meaningful change. Our team of skilled professionals combines expertise with creativity to deliver bespoke applications that exceed expectations. Whether it&apos;s crafting sleek and intuitive mobile apps or building robust web platforms, we are committed to delivering solutions that make a lasting impact.
          </p>
          <p className="mt-8 text-base lg:text-lg">
          Whether you&apos;re a startup looking to launch your first app or an established enterprise seeking to elevate your digital presence, Wolf IT is here to help you achieve your goals. Join us as we embark on a journey of innovation and transformation, and together, let&apos;s unleash the full potential of technology.


          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton> */}
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
