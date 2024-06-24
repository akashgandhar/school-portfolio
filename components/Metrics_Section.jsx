import React from "react";

export default function Metrics_Section() {
  return (
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empowering young minds to become future leaders
            </h2>
            <p class="mt-4 text-lg leading-8 text-gray-600">
              The institution will be built on core values, helping the youth to
              evolve mentally and physically and encouraging them to lead
              healthy lives. Excellence Will be made a habit and an environment
              Of mutual trust and respect Will be ingrained in the youth.
            </p>
          </div>
          <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col bg-gray-200/50 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-600">
                Students
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                1000+
              </dd>
            </div>
            <div class="flex flex-col bg-gray-200/50 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-600">
                Joined Armed Forces
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                500+
              </dd>
            </div>
            <div class="flex flex-col bg-gray-200/50 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-600">
                IAS / PCS
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                400+
              </dd>
            </div>
            <div class="flex flex-col bg-gray-200/50 p-8">
              <dt class="text-sm font-semibold leading-6 text-gray-600">
                Happy Parents
              </dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
                100%
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
