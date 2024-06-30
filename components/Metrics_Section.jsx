import React from "react";

export default function Metrics_Section() {
  return (
    <div class=" py-24 sm:py-32  bg-no-repeat">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight  sm:text-4xl">
              Empowering young minds to become future leaders
            </h2>
            <p class="mt-4 text-lg leading-8 /60">
              The institution will be built on core values, helping the youth to
              evolve mentally and physically and encouraging them to lead
              healthy lives. Excellence Will be made a habit and an environment
              Of mutual trust and respect Will be ingrained in the youth.
            </p>
          </div>
          <dl class="mt-16 grid grid-cols-1 text-white gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col bg-[#255c39]/90 hover:bg-[#255c39]/80 p-8">
              <dt class="text-sm font-semibold leading-6 /60">
                Students
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight ">
                1000+
              </dd>
            </div>
            <div class="flex flex-col bg-[#255c39]/90 hover:bg-[#255c39]/80 p-8">
              <dt class="text-sm font-semibold leading-6 /60">
                Joined Armed Forces
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight ">
                500+
              </dd>
            </div>
            
            <div class="flex flex-col bg-[#255c39]/90 hover:bg-[#255c39]/80 p-8">
              <dt class="text-sm font-semibold leading-6 /60">
                Happy Parents
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight ">
                100%
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
