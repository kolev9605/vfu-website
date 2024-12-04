import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Link } from "lucide-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">YourBrand</span>
              </div>
              <div className="hidden md:flex space-x-4">
                <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                  Home
                </Link>
                <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                  Features
                </Link>
                <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                  Pricing
                </Link>
                <a href="/contact" className="text-blue-600 font-semibold px-3 py-2">
                  Contact
                </a>
              </div>
              <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </nav>
        {children}
        {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-bold text-white">YourBrand</span>
            <p className="text-gray-400 mt-4">
              Empowering developers with cutting-edge technology.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 YourBrand. All rights reserved.
          </p>
        </div>
      </footer>
      </body>
    </html>
  );
}
