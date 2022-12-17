import React from "react";
import type { NextPage } from "next";
import Image from "next/image";

import Layout from "../components/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex items-center justify-evenly">
        <div className="w-96">
          <h1 className="mb-4 text-3xl font-semibold">Welcome to Oenophile</h1>
          <p className="mb-4 italic">
            We are a wine seller company that is passionate about bringing the
            best wine experiences to our customers. Our team of wine experts
            have scoured the globe to curate a selection of fine wines that are
            sure to delight and impress.
          </p>
        </div>
        <Image
          src="/images/cover-1.jpg"
          className="rounded-md"
          alt="cover1"
          width={300}
          height={400}
        />
      </div>
      <div className="mt-32 flex items-center justify-evenly">
        <Image
          src="/images/cover-2.jpg"
          className="rounded-md"
          alt="cover1"
          width={300}
          height={400}
        />
        <div className="w-96">
          <p className="mb-4 italic">
            Whether you&apos;re a seasoned wine connoisseur or just starting to
            explore the world of wine, we have something for everyone. From
            classic reds and whites to sparkling rosés and dessert wines, our
            selection has something to suit every palate.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-32 text-center">
        <p className="mb-4 italic">
          &ldquo;Thank you for choosing Oenophile. We look forward to helping
          you discover your new favorite wine!&rdquo;
        </p>
        <p className="text-end font-light text-gray-600">
          Cheers,
          <br />
          The Oenophile Team
        </p>
      </div>
    </Layout>
  );
};

export default Home;
