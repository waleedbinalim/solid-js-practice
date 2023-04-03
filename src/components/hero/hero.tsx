import { For } from "solid-js";
import { SolidTyper } from "solid-typer";
import { GithubIcon, LinkedInIcon } from "~/assets";
import { imgUrls, socialsUrls } from "~/constants";

export const Hero = () => {
  const heroSocials = [
    { href: socialsUrls.linkedIn, icon: <LinkedInIcon /> },
    { href: socialsUrls.github, icon: <GithubIcon /> },
  ];

  return (
    <>
      <section class="w-100 bg-black">
        <div class="w-100 align-center flex min-w-full flex-wrap items-center justify-center px-36 py-8 pt-20 text-white sm:justify-between">
          <div class="w-100 text-center md:text-left">
            <p class="text-2xl font-semibold">
              Hi, I'm <span class="text-4xl text-green-400">WALEED</span>
            </p>
            <p class="mb-4 min-w-[300px] text-xl">
              I do{" "}
              <span class=" text-2xl font-bold text-green-400">
                <SolidTyper
                  text={[
                    "Web Development",
                    "3D Designing",
                    "Vector Illustrations",
                  ]}
                  backspaceSpeed={30}
                  typingSpeed={100}
                  backspacePause={40}
                  loop={true}
                  cursor={true}
                />
              </span>
            </p>

            <div class="md:pb-none pb-8 md:min-w-[140px] md:max-w-[170px]">
              <button class="w-[200px] rounded-full border-2 border-green-400 px-4 py-2 font-bold text-green-400 transition-colors hover:bg-green-400 hover:text-gray-800 md:w-full">
                View Resume
              </button>
              <div class="flex w-full justify-center pt-3">
                <For each={heroSocials}>
                  {(item) => (
                    <div class="cursor-pointer fill-green-400 px-1 opacity-50 hover:opacity-100 [&_path]:!fill-gray-200 [&_svg]:!h-6 [&_svg]:!w-6">
                      <a href={item.href} target="_blank">
                        {item.icon}
                      </a>
                    </div>
                  )}
                </For>
              </div>
            </div>
          </div>

          <div class="w-100 relative flex h-[200px] min-w-[200px] sm:h-[320px] sm:min-w-[300px]">
            <div class="absolute left-0 top-0 h-full w-[200px] rotate-12 rounded-xl bg-green-300 sm:h-80 sm:w-[300px]" />
            <div class="absolute left-0 top-0 h-full w-[200px] rotate-6 rounded-xl bg-green-400 drop-shadow-xl sm:h-80 sm:w-[300px]" />
            <img
              class="absolute left-0 top-0 rounded-xl border-2 border-green-400 drop-shadow-xl sm:h-80"
              src={imgUrls.heroAvatar}
              alt="waleed-avatar"
            />
          </div>
        </div>
      </section>
    </>
  );
};
