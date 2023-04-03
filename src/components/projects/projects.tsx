import { Component } from "solid-js";

export const Projects: Component = () => {
  return (
    <>
      <div class="w-100 relative isolate inline-block w-full bg-black after:absolute after:-inset-0 after:-top-8 after:-z-10 after:block after:min-h-[80px] after:-skew-y-3 after:bg-white after:content-['']">
        <div class="px-36 py-8">
          <div class="pb-12 text-4xl font-bold text-black">Projects</div>

          <div class="max-w-sm overflow-hidden rounded-3xl shadow-2xl">
            <div class="w-100 h-36">
              <img
                class="h-36 w-full object-contain"
                src="https://www.pulse.plus/images/common/pulse_plus_box.png"
                alt="Pulse Plus"
              />
            </div>
            <div class="px-6 py-4">
              <div class="mb-2 text-xl font-extrabold">PULSE PLUS</div>
              <p class="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pb-2 pt-4">
              <span class="mb-2 mr-2 inline-block rounded-full bg-green-300 px-3 py-1 text-sm font-semibold text-gray-800">
                NextJS
              </span>
              <span class="mb-2 mr-2 inline-block rounded-full bg-green-300 px-3 py-1 text-sm font-semibold text-gray-800">
                D3
              </span>
              <span class="mb-2 mr-2 inline-block rounded-full bg-green-300 px-3 py-1 text-sm font-semibold text-gray-800">
                Styled Components
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
