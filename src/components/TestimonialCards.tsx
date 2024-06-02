"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const content = [
  {
    quote:
      "The faculty here have an incredible ability to connect with students and bring out the best in them. I've grown tremendously as a musician.",
    name: "A. R. Rahman",
    title: "Composer & Music Producer",
  },
  {
    quote:
      "This academy's approach to teaching music is both innovative and inspiring. The blend of traditional and contemporary methods has been invaluable.",
    name: "Lata Mangeshkar",
    title: "Legendary Singer",
  },
  {
    quote:
      "Learning here has been a delightful experience. The instructors are very knowledgeable and supportive, making the learning process enjoyable and effective.",
    name: "Shankar Mahadevan",
    title: "Singer & Composer",
  },
  {
    quote:
      "The school has a wonderful community of musicians that constantly inspire and motivate each other. The learning environment is superb.",
    name: "Anoushka Shankar",
    title: "Sitar Player & Composer",
  },
  {
    quote:
      "The personalized attention I received here has been instrumental in my growth as a musician. The faculty are exceptional.",
    name: "Hariprasad Chaurasia",
    title: "Flutist",
  },
  {
    quote:
      "This institution is a haven for anyone serious about music. The curriculum is comprehensive, and the support is outstanding.",
    name: "Zakir Hussain",
    title: "Tabla Virtuoso",
  },
  {
    quote:
      "The immersive learning environment and the expert guidance from the faculty have been pivotal in my musical journey.",
    name: "Shubha Mudgal",
    title: "Classical Vocalist",
  },
  {
    quote:
      "This school offers a perfect blend of classical and contemporary music education. It's the best place for aspiring musicians.",
    name: "Pandit Shivkumar Sharma",
    title: "Santoor Maestro",
  },
  {
    quote:
      "The focus on both theoretical and practical aspects of music here is unparalleled. It has significantly enriched my musical expertise.",
    name: "Ustad Amjad Ali Khan",
    title: "Sarod Virtuoso",
  },
  {
    quote:
      "The curriculum here is tailored to the needs of each student, ensuring comprehensive development in every aspect of music.",
    name: "Pandit Jasraj",
    title: "Classical Vocalist",
  },
  {
    quote:
      "The commitment of the instructors to their students' growth is evident in every lesson. It has made a profound difference in my musical journey.",
    name: "Kishori Amonkar",
    title: "Hindustani Classical Vocalist",
  },
  {
    quote:
      "The resources and support provided here are exceptional. It is the ideal place to hone your musical skills.",
    name: "Ravi Shankar",
    title: "Sitar Maestro",
  },
  {
    quote:
      "The unique blend of traditional and modern teaching methods has greatly enhanced my understanding and appreciation of music.",
    name: "Zakir Hussain",
    title: "Tabla Virtuoso",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={content} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
