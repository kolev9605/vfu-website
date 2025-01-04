import React from 'react';

const ArchitecturePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4">
        <h2 className="text-xl font-bold mb-4">Architecture</h2>
        <nav>
          {[
            { href: '#overview', label: 'System Overview' },
            { href: '#components', label: 'Key Components' },
            { href: '#infrastructure', label: 'Infrastructure' },
            { href: '#scaling', label: 'Scalability' }
          ].map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Platform Architecture</h1>

        <section id="overview" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">System Overview</h2>
          <div className="bg-white shadow rounded-lg p-4 border">
            <p className="text-gray-700">
              QuickDeploy is a microservices-based platform designed for high-performance frontend deployments with horizontal scalability and robust isolation.
            </p>
            <div className="mt-4 bg-gray-100 p-4 rounded">
              <h3 className="font-bold mb-2">Architecture Principles</h3>
              <ul className="list-disc pl-5">
                <li>Microservices Architecture</li>
                <li>Event-Driven Design</li>
                <li>Containerized Services</li>
                <li>Zero-Downtime Deployments</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="components" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Components</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Deployment Service',
                description: 'Manages project builds, container creation, and rolling deployments.',
                technologies: ['Kubernetes', 'Docker', 'BuildKit']
              },
              {
                title: 'Routing Service',
                description: 'Handles domain mapping, SSL termination, and traffic routing.',
                technologies: ['Nginx', 'Let\'s Encrypt', 'CoreDNS']
              },
              {
                title: 'Authentication Service',
                description: 'Manages user identities, access control, and API tokens.',
                technologies: ['OAuth', 'JWT', 'RBAC']
              }
            ].map((component) => (
              <div key={component.title} className="bg-white shadow rounded-lg p-4 border">
                <h3 className="font-bold mb-2">{component.title}</h3>
                <p className="text-gray-700 mb-2">{component.description}</p>
                <div className="bg-gray-100 p-2 rounded">
                  <strong>Technologies:</strong> {component.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="infrastructure" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Infrastructure</h2>
          <div className="bg-white shadow rounded-lg p-4 border">
            <h3 className="font-bold mb-2">Cloud Native Architecture</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <strong>Compute:</strong>
                <ul className="list-disc pl-5">
                  <li>Kubernetes Clusters</li>
                  <li>Auto-scaling Groups</li>
                </ul>
              </div>
              <div>
                <strong>Storage:</strong>
                <ul className="list-disc pl-5">
                  <li>Distributed Object Storage</li>
                  <li>Persistent Volume Claims</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="scaling" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Scalability</h2>
          <div className="bg-white shadow rounded-lg p-4 border">
            <h3 className="font-bold mb-2">Horizontal Scaling Capabilities</h3>
            <pre className="bg-gray-100 p-4 rounded">
              <code>
{`# Automatic Scaling Configuration
replicas: 
  min: 2
  max: 50
scaling_policy:
  - cpu_utilization: 70%
  - request_rate: 1000 req/sec`}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ArchitecturePage;