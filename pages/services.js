import Head from "next/head";
import { useEffect, useState } from "react";

export default function Services() {
  return (
    <div className="container">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main className="flex-1 overflow-y-auto focus:outline-none" tabIndex="0">
        <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
          <div className="pt-10 pb-16">
            <div className="px-4 sm:px-6 md:px-0">
              <h1 className="text-3xl leading-9 font-extrabold text-gray-900">
                Services
              </h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
