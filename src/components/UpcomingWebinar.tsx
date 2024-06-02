"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinar() {
  const content = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory. This webinar will cover scales, chords, and the building blocks of music to enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters. Explore the process of creating melodies, lyrics, and harmonies.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Discover advanced techniques to master your musical instrument of choice. This session is designed for intermediate to advanced musicians.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview. Topics include DAWs, recording techniques, and mixing basics.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies. Learn how to engage your audience and deliver memorable performances.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Sound Design for Film & Games",
      description:
        "Explore the world of sound design for visual media. Learn techniques for creating immersive audio experiences in film and video games.",
      slug: "sound-design-for-film-games",
      isFeatured: true,
    },
    {
      title: "Improvisation Techniques",
      description:
        "Develop your improvisation skills with this interactive webinar. Suitable for jazz, blues, and contemporary musicians looking to enhance their spontaneous creativity.",
      slug: "improvisation-techniques",
      isFeatured: true,
    },
    {
      title: "History of Classical Music",
      description:
        "Take a journey through the history of classical music. Understand the evolution of musical styles from the Baroque period to modern classical compositions.",
      slug: "history-of-classical-music",
      isFeatured: true,
    },
    {
      title: "Vocal Health and Techniques",
      description:
        "Maintain and improve your vocal health with techniques from professional vocal coaches. Perfect for singers looking to sustain their voice over a long career.",
      slug: "vocal-health-techniques",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={content.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"#"}>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                View All Webinars
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinar;
