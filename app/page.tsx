import React from "react";
import { CheckCircleIcon, RocketIcon, CodeIcon } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <header className="relative py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Build Amazing Web Applications</h1>
            <p className="text-xl text-gray-600 mb-8">
              Supercharge your development with cutting-edge technology and intuitive design.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Start Free Trial
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="/quick-deploy.png" alt="Product Preview" className="rounded-xl shadow-2xl" />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed to streamline your workflow and boost productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <CheckCircleIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Easy Setup</h3>
              <p className="text-gray-600">Get started in minutes with our simple, intuitive interface.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <RocketIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">High Performance</h3>
              <p className="text-gray-600">Optimized for speed and efficiency across all platforms.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <CodeIcon className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Developer Friendly</h3>
              <p className="text-gray-600">Robust APIs and comprehensive documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already supercharging their projects.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
