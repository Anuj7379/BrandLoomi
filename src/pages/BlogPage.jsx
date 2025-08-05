import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LaunchBanner from "../components/LaunchBanner";
import Image2 from "../assets/img2.png";

const BlogPage = () => {
  return (
    <div className="relative bg-[#00080A] text-white w-full min-h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[170px] h-[200px] rounded-full bg-[#27DCFF] blur-[160px] opacity-100 top-[140px] left-[20px] z-0" />

      {/* Main content wrapper */}
      <div className="relative z-10 font-creato">
        <Header />
        <div className="mt-24 md:mt-36 md:pt-8 mx-8 md:mx-14 leading-none">
          <h1 className="text-[25px] md:text-[50px] lg:text-[80px] font-medium italic uppercase text-white">
            Blogs
          </h1>

          <div className="flex items-center ml-16 md:ml-28 lg:ml-48 ">
            <div className="h-px bg-white w-[178px] md:w-[300px] lg:w-[608px]" />
            <span className="material-symbols-outlined animate-[spin_5s_linear_infinite] ml-4 text-white text-2xl mt-1">
              asterisk
            </span>
          </div>

          <p className="text-[16px] md:text-[30px] font-medium text-white/80 ml-16 md:ml-28 lg:ml-48  w-[178px] md:w-full ">
            News and insights of the things which matter
          </p>
        </div>

        {/* blogs ---- - -- - - */}

        <div className="mt-16 bg-white/90 py-8 px-6 md:px-14 font-creato">
          <h2 className="text-[20px] md:text-[40px] lg:text-[70px] font-semibold italic mb-4 text-black">
            Latest
          </h2>

          <div className="flex space-x-6 overflow-x-auto pb-2 scrollbar-hide">
            {/* Blog Card 1 */}
            <a
              href="/blogs/ui-ux-designing"
              className="w-[208px] md:w-[300px] lg:w-[485px] flex-shrink-0"
            >
              <div className="rounded-xl overflow-hidden">
                <img
                  src={Image2}
                  alt="UI UX"
                  className="w-full h-[120px] md:h-[200px] lg:h-[342px] object-cover rounded-xl"
                />
              </div>
              <h3 className="text-[20px] md:text-[25px]  font-medium mt-2 text-black">
                Difference between UI & UX designing
              </h3>
              <div className="flex justify-between text-xs md:text-sm text-gray-600 mt-1">
                <span>June 22nd 2025</span>
                <span>5 min read</span>
              </div>
            </a>

            {/* Blog Card 2 */}
            <a
              href="/blogs/understanding-ai-2025"
              className="w-[208px] md:w-[300px] lg:w-[485px] flex-shrink-0"
            >
              <div className="rounded-xl overflow-hidden">
                <img
                  src={Image2}
                  alt="AI"
                  className="w-full h-[120px] md:h-[180px] lg:h-[342px]  object-cover rounded-xl"
                />
              </div>
              <h3 className="text-[20px] md:text-[25px]  font-medium mt-2 text-black">
                Understanding AI in the age of 2025
              </h3>
              <div className="flex justify-between text-xs md:text-sm text-gray-600 mt-1">
                <span>June 22nd 2025</span>
                <span>5 min read</span>
              </div>
            </a>
            {/* Blog Card 3 */}
            <a
              href="/blogs/understanding-ai-2025"
              className="w-[208px] md:w-[300px] lg:w-[485px] flex-shrink-0"
            >
              <div className="rounded-xl overflow-hidden">
                <img
                  src={Image2}
                  alt="AI"
                  className="w-full h-[120px] md:h-[180px] lg:h-[342px]  object-cover rounded-xl"
                />
              </div>
              <h3 className="text-[20px] md:text-[25px]  font-medium mt-2 text-black">
                Understanding AI in the age of 2025
              </h3>
              <div className="flex justify-between text-xs md:text-sm text-gray-600 mt-1">
                <span>June 22nd 2025</span>
                <span>5 min read</span>
              </div>
            </a>

            {/* Add more blog cards here... */}
          </div>
        </div>
        <BlogList/>

        {/* CTA Banner */}
        <LaunchBanner headingText="Curious about how we can help you?" />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;




// blog list --------------- //



const blogs = [
  {
    title: "Difference between UI & UX designing",
    description:
      "Explore the differences between UX and UI design. Gain clarity on their roles to craft intuitive digital experiences.",
    date: "June 22nd 2025",
    readTime: "5 min read",
    img: "/your-image-path.png", // replace with actual image path
  },
  // Duplicate objects to mimic multiple blogs
  {
    title: "Difference between UI & UX designing",
    description:
      "Explore the differences between UX and UI design. Gain clarity on their roles to craft intuitive digital experiences.",
    date: "June 22nd 2025",
    readTime: "5 min read",
    img: "/your-image-path.png",
  },
  {
    title: "Difference between UI & UX designing",
    description:
      "Explore the differences between UX and UI design. Gain clarity on their roles to craft intuitive digital experiences.",
    date: "June 22nd 2025",
    readTime: "5 min read",
    img: "/your-image-path.png",
  },
  {
    title: "Difference between UI & UX designing",
    description:
      "Explore the differences between UX and UI design. Gain clarity on their roles to craft intuitive digital experiences.",
    date: "June 22nd 2025",
    readTime: "5 min read",
    img: "/your-image-path.png",
  },
];

const BlogList = () => {
  return (
    <div className="bg-transparent min-h-screen md:px-6 py-10 text-white font-creato">
      <h2 className="text-[25px] md:text-[40px] lg:text-[70px] italic font-semibold mb-8 ml-4">All Blogs</h2>

      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex items-start gap-4  p-4 "
          >
            {/* Blog Image */}
            <img
              src={Image2}
              alt="blog cover"
              className="w-[178px] h-[120px] md:w-[240px] md:h-[140px] lg:w-[315px] lg:h-[211px] rounded-md object-cover"
            />

            {/* Blog Content */}
            <div className="flex flex-col gap-1">
              <h3 className="font-black text-[16px] md:text-[35px]">{blog.title}</h3>
              <p className="text-[14px] md:text-[30px] text-gray-300 max-w-[940px]">
                {blog.description}
              </p>
              <div className="text-[10px] md:text-[18px] text-gray-500 flex gap-4 mt-1">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

