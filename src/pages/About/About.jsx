import HeroImg from "@/assets/images/hero.jpeg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer , Problem Solver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Abhinav Bahadur Singh, a passionate innovator in AI-powered solutions, web technologies, and real-world impact-driven software.{" "}
                <span className="font-bold text-white">
                </span>
                , I'm dedicated to simplifying development workflows.
              </p>
              <p className="text-white">
              I specialize in creating intelligent systems that simplify processes, enhance productivity, and deliver user-centric digital experiences. Whether it’s AI-driven automation, real-time web platforms, or smart embedded systems, I’m focused on developing solutions that matter.              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. As the creator of OlovaJS,
                    I'm pushing the boundaries of JavaScript frameworks to
                    empower developers worldwide.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                    I'm a builder, a thinker, and a lifelong learner.
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-white"></span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
