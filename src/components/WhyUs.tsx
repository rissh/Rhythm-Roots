"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

//
const content = [
  {
    title: "Personalized Music Journey",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, fostering growth and creativity. At Rhythm & Roots, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience with immediate feedback, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from industry professionals who bring their real-world experience and passion for music into every lesson. Our instructors are dedicated to helping you achieve your musical goals, no matter how big or small.",
  },
  {
    title: "Community & Support",
    description:
      "Join a vibrant community of musicians where you can share ideas, collaborate on projects, and support each other’s growth. Our supportive environment ensures you’re never learning alone.",
  },
];

function WhyUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyUs;
