import Navbar from "@/components/shared/Navbar";
import connectDB from "@/config/DB";
import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel-Lodge",
  description: "One Place Stop for Hospitability",
};

export default async function RootLayout({ children }) {
  await connectDB();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar sideMenu={true} />
        <main>{children}</main>
      </body>
    </html>
  );
}
