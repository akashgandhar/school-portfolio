import React from 'react'

export default function Whyus_Section() {
  return (
    <section class="">
    <div class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div class="lg:text-center">
                <h2
                    class="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                    Why choose us?
                </h2>
                <p class="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    We know tech, we know finance. We are fintech experts.
                </p>
                <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                    We know how to handle taxation for all the
                    countried we operate in. We care for our customers and help them manage cashflows.
                </p>
            </div>

            <div class="mt-10">
                <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img className='h-12 w-12 ' src="https://www.svgrepo.com/show/483728/family.svg" />
                            </div>
                            <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Value-Based Learning</p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500">
                        At Sansthan, we go beyond academics. We instill strong moral values, a deep sense of patriotism, and a love for our country in our students. We believe these values are the foundation for a successful and fulfilling life.
                        </dd>
                    </div>
                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img className='h-12 w-12 ' src="https://www.svgrepo.com/show/479891/balance-1.svg" />
                            </div>
                            <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Holistic Development
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500"> We provide a well-rounded education that focuses on both academic excellence and personal growth. Our curriculum includes physical training, yoga, sports, and access to a well-equipped library and computer labs. We also organize educational and historical tours to broaden student horizons.
                        </dd>
                    </div>
                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img className='h-12 w-12 ' src="https://www.svgrepo.com/show/479217/rupee-1-frame.svg" />

                            </div>
                            <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Affordable Excellence
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500"> We understand the financial constraints faced by many families. That's why we offer high-quality education at a very nominal fee, particularly for students from backward classes. We believe every child deserves the opportunity to reach their full potential.
                        </dd>
                    </div>
                    <div class="relative">
                        <dt>
                            <div
                                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img className='h-12 w-12 ' src="https://www.svgrepo.com/show/403612/graduation-cap.svg" />

                            </div>
                            <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Career Guidance & Preparation
                            </p>
                        </dt>
                        <dd class="mt-2 ml-16 text-base text-gray-500"> We prepare our students for success beyond school. Our dedicated faculty provides guidance and coaching for various entrance examinations, including UPSC, state entrances, and NDA, CDS, and SSB for those aspiring to join the Armed Forces and Para Military Forces.
                        </dd>
                    </div>
                </dl>
            </div>

        </div>
    </div>
</section>
  )
}
