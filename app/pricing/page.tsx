"use client";

import React, { useState } from "react";
import { CheckIcon, XIcon, StarIcon, CreditCardIcon } from "lucide-react";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      monthlyPrice: 9,
      annualPrice: 99,
      features: ["Up to 3 projects", "Basic analytics", "Community support", "Standard integrations"],
      unavailableFeatures: ["Priority support", "Advanced analytics", "Custom integrations"],
      recommended: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing teams and businesses",
      monthlyPrice: 29,
      annualPrice: 299,
      features: [
        "Up to 10 projects",
        "Advanced analytics",
        "Priority support",
        "Standard integrations",
        "Collaborative tools",
      ],
      unavailableFeatures: ["Unlimited projects", "Enterprise-level security", "Custom domain"],
      recommended: true,
    },
    {
      name: "Enterprise",
      description: "Tailored solutions for large organizations",
      monthlyPrice: 59,
      annualPrice: 599,
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Dedicated support",
        "Custom integrations",
        "Enterprise-level security",
        "Custom domain",
      ],
      unavailableFeatures: [],
      recommended: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, no complicated contracts.
          </p>
        </div>
      </header>

      {/* Billing Cycle Toggle */}
      <section className="bg-white py-8">
        <div className="max-w-md mx-auto flex justify-center bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              billingCycle === "monthly" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              billingCycle === "annual" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            Annual
            <span className="text-green-500 font-semibold ml-2">Save 15%</span>
          </button>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`
                  bg-white rounded-xl shadow-lg overflow-hidden 
                  transform transition-all duration-300 
                  ${plan.recommended ? "border-2 border-blue-600 scale-105" : "border border-gray-200"}
                `}
              >
                {plan.recommended && (
                  <div className="bg-blue-600 text-white py-2 text-center flex items-center justify-center">
                    <StarIcon className="w-5 h-5 mr-2" />
                    Recommended
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold text-gray-900">
                      ${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="ml-2 text-gray-600">/ {billingCycle === "monthly" ? "month" : "year"}</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition mb-6">
                    Choose {plan.name}
                  </button>
                  <div>
                    <h4 className="font-semibold mb-4 text-gray-900">Features:</h4>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                      {plan.unavailableFeatures.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-400">
                          <XIcon className="w-5 h-5 text-gray-300 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 flex justify-center items-center">
            <CreditCardIcon className="w-12 h-12 mr-4" />
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team can design a tailored pricing plan that perfectly fits your unique business requirements.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition">
              Contact Sales
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
