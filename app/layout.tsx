import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const timesNewRoman = localFont({
  src: "./fonts/TimesNewRomanMTStd.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quick Deploy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${timesNewRoman.variable} antialiased`}>
        {/* Header */}
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  QuickDeploy
                </Link>
              </div>
              <div className="hidden md:flex space-x-4">
                <div className="text-gray-700">
                  <Link href="/" className="hover:text-blue-600 px-3 py-2">
                    Home
                  </Link>
                </div>
                <div className="text-gray-700">
                  <Link href="/features" className="hover:text-blue-600 px-3 py-2">
                    Features
                  </Link>
                </div>
                <div className="text-gray-700">
                  <Link href="/pricing" className="hover:text-blue-600 px-3 py-2">
                    Pricing
                  </Link>
                </div>
                <div className="text-gray-700">
                  <Link href="/contact" className="hover:text-blue-600 px-3 py-2">
                    Contact
                  </Link>
                </div>
                <div className="text-gray-700">
                  <Link href="/architecture" className="hover:text-blue-600 px-3 py-2">
                    Architecture
                  </Link>
                </div>
              </div>
              <div>
                <Link
                  href="/documentation"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold text-white">QuickDeploy</span>
              <p className="text-gray-400 mt-4">Empowering developers with cutting-edge technology.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Link href="/documentation">Documentation</Link>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2025 QuickDeploy. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
