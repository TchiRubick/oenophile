import React, { type ReactNode } from "react";
import Link from "next/link";

type LayoutProps = {
  children: ReactNode;
};
const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 py-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Oenophile
        </Link>
        <nav>
          <Link
            href="/wines"
            className="rounded-md px-4 py-2 hover:bg-violet-500"
          >
            Wines
          </Link>
          <Link
            href="/articles"
            className="rounded-md px-4 py-2 hover:bg-violet-500"
          >
            Articles
          </Link>
          <Link
            href="/contact"
            className="rounded-md px-4 py-2 hover:bg-violet-500"
          >
            Contact
          </Link>
        </nav>
      </div>
      <main className="container mx-auto py-8 mt-16">
        {children}
      </main>
      <footer className="mt-8 bg-gradient-to-r from-violet-500 to-fuchsia-500 py-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <p>Copyright &copy; 2021 Oenophile</p>
          <nav>
            <Link
              href="/privacy-policy"
              className="rounded-md px-4 py-2 hover:bg-violet-500"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="rounded-md px-4 py-2 hover:bg-violet-500"
            >
              Terms of Use
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
