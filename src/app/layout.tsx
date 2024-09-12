import "./globals.css";

import { ReactNode } from "react";
import Navigation from "./components/Navigation";

type LayoutProps = {
  children: ReactNode;
};

const links = [
  { title: "Home", href: "/" },
  { title: "Users", href: "/users" },
];

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navigation links={links} />
        {children}
      </body>
    </html>
  );
}
