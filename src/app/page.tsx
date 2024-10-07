import Image from "next/image";
import React from "react";
import { projects } from "@/data/project";

export default function Home() {
  return (
    <>
      {/* hero */}
      <section className="py-10 bg-gray-100 flex justify-center items-center min-h-[500px] lg:min-h-[500px]">
        <div className="container mx-auto max-lg:px-6 flex max-lg:flex-col-reverse items-center gap-10">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800">
              Hi, I&apos;m <span className="text-blue-500">Passyah Raffi</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Full-Stack & Frontend | Shopify Developer
            </p>
            <p className="mt-6 text-gray-700">
              I am a Fullstack Developer with a focus on Front-End and Shopify,
              proficient in frameworks like Next JS and Node JS. Experienced in
              developing responsive and efficient web applications. I am skilled
              in enhancing and maintaining performance and optimizing for Google
              SEO to boost online visibility.
            </p>

            <div className="mt-8 space-x-4">
              <a
                href="#projects"
                className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                See My Work
              </a>
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-transparent border border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-500 hover:text-white transition"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="mt-10 md:mt-0 lg:w-1/2 flex justify-center md:justify-end">
            <Image
              src={"/passyah.JPG"}
              alt={"passyah-raffi"}
              width={1000}
              height={1000}
              className={`w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] object-cover object-center skeleton-box rounded-full`}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* card */}
      <section className="container mx-auto">
        <h4 className="text-center text-gray-600 text-xl lg:pt-10 my-10">
          SOME OF MY LATEST WORK
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 min-h-[26.5vh]">
          {projects && projects.length > 0 ? (
            projects.map((item, idx) => (
              <div
                key={idx}
                className={`min-h-[300px] max-h-[300px] rounded-md overflow-hidden ${
                  item.bgColor
                } ${item.color} ${
                  item.borderColor ? `border ${item.borderColor}` : ""
                } animate-hover`}
                style={{ border: item.borderColor }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={500}
                  className={`w-full h-[200px] object-cover object-center skeleton-box`}
                  loading="lazy"
                />

                <div className="gap-1 p-2 pt-0 grid">
                  <p className="text-[20px] font-semibold line-clamp-1">
                    {item.title}
                  </p>
                  <p className="line-clamp-2">{item.subtitle}</p>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="rounded-md min-h-[300px] max-h-[300px] skeleton"></div>
              <div className="rounded-md min-h-[300px] max-h-[300px] skeleton"></div>
              <div className="rounded-md min-h-[300px] max-h-[300px] skeleton"></div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
