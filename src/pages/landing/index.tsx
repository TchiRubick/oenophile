import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Landing: NextPage = () => {
  return (
    <div className="bg-gray-900 py-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Oenophile
        </Link>
        <nav>
          <Link
            href="/wines"
            className="rounded-md px-4 py-2 hover:bg-gray-800"
          >
            Wines
          </Link>
          <Link
            href="/about"
            className="rounded-md px-4 py-2 hover:bg-gray-800"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-md px-4 py-2 hover:bg-gray-800"
          >
            Contact
          </Link>
        </nav>
      </div>
      <main className="container mx-auto py-8">
        <div className="flex items-center justify-evenly mt-28">
          <div className="w-96">
            <h1 className="mb-4 text-3xl font-semibold">
              Welcome to Oenophile
            </h1>
            <p className="mb-4 italic">
              We are a wine seller company that is passionate about bringing the
              best wine experiences to our customers. Our team of wine experts
              have scoured the globe to curate a selection of fine wines that
              are sure to delight and impress.
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
        <div className="flex items-center justify-evenly mt-32">
          <Image
            src="/images/cover-2.jpg"
            className="rounded-md"
            alt="cover1"
            width={300}
            height={400}
          />
          <div className="w-96">
            <p className="mb-4 italic">
              Whether you&apos;re a seasoned wine connoisseur or just starting
              to explore the world of wine, we have something for everyone. From
              classic reds and whites to sparkling rosés and dessert wines, our
              selection has something to suit every palate.
            </p>
          </div>
        </div>
        <div className="mt-32 mx-auto text-center">
          <p className="mb-4 italic">
            &ldquo;Thank you for choosing Oenophile. We look forward to helping you
            discover your new favorite wine!&rdquo;
          </p>
          <p className="font-light text-gray-600 text-end">
            Cheers,
            <br />
            The Oenophile Team
          </p>
        </div>
      </main>
      <footer className="mt-8 bg-gray-900 py-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <p>Copyright &copy; 2021 Oenophile</p>
          <nav>
            <Link
              href="/privacy-policy"
              className="rounded-md px-4 py-2 hover:bg-gray-800"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="rounded-md px-4 py-2 hover:bg-gray-800"
            >
              Terms of Use
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
