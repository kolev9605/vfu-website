import React from "react";

const DeploymentDocs = () => {
  const sidebarLinks = [
    { href: "#getting-started", label: "Getting Started" },
    { href: "#project-setup", label: "Project Setup" },
    { href: "#deploying", label: "Deploying Projects" },
    { href: "#custom-domains", label: "Custom Domains" },
    { href: "#environments", label: "Environments" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4">
        <h2 className="text-xl font-bold mb-4">QuickDeploy Docs</h2>
        <nav>
          {sidebarLinks.map((link) => (
            <a key={link.href} href={link.href} className="block py-2 text-gray-700 hover:text-blue-600">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">QuickDeploy Documentation</h1>

        <section id="getting-started" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-700 mb-4">
            QuickDeploy is a seamless platform for deploying frontend applications with zero configuration.
          </p>
          <div className="bg-white shadow rounded-lg p-4 border">
            <h3 className="font-bold mb-2">Quick Install</h3>
            <pre className="bg-gray-100 p-4 rounded">
              <code>npm install -g quickdeploy quickdeploy login</code>
            </pre>
          </div>
        </section>

        <section id="project-setup" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Setup</h2>
          <div className="space-y-4">
            <div className="bg-white shadow rounded-lg p-4 border">
              <h3 className="font-bold mb-2">Supported Frameworks</h3>
              <ul className="list-disc pl-5">
                <li>Next.js</li>
                <li>React</li>
                <li>Vue.js</li>
                <li>Svelte</li>
              </ul>
            </div>
            <div className="bg-white shadow rounded-lg p-4 border">
              <h3 className="font-bold mb-2">Configuration File</h3>
              <pre className="bg-gray-100 p-4 rounded">
                <code>
                  {`// quickdeploy.json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next"
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        <section id="deploying" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Deploying Projects</h2>
          <div className="bg-white shadow rounded-lg p-4 border">
            <h3 className="font-bold mb-2">Deploy Command</h3>
            <pre className="bg-gray-100 p-4 rounded">
              <code>quickdeploy</code>
            </pre>
            <p className="text-gray-700 mt-4">
              Our platform automatically detects your project type and deploys with optimal settings.
            </p>
          </div>
        </section>

        <section id="custom-domains" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Custom Domains</h2>
          <div className="bg-white shadow rounded-lg p-4 border">
            <h3 className="font-bold mb-2">Adding a Domain</h3>
            <pre className="bg-gray-100 p-4 rounded">
              <code>quickdeploy domain add mydomain.com</code>
            </pre>
            <p className="text-gray-700 mt-4">
              Instantly map your custom domain with automatic SSL certificate provisioning.
            </p>
          </div>
        </section>

        <section id="environments" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Environments</h2>
          <div className="space-y-4">
            <div className="bg-white shadow rounded-lg p-4 border">
              <h3 className="font-bold mb-2">Environment Types</h3>
              <ul className="list-disc pl-5">
                <li>Production</li>
                <li>Staging</li>
                <li>Preview</li>
              </ul>
            </div>
            <div className="bg-white shadow rounded-lg p-4 border">
              <h3 className="font-bold mb-2">Environment Variables</h3>
              <pre className="bg-gray-100 p-4 rounded">
                <code>
                  {`quickdeploy env set 
  --env production 
  DATABASE_URL=postgres://...`}
                </code>
              </pre>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DeploymentDocs;
