const express = require('express');
const path = require('path');

class MarketingSite {
  constructor(port = 3002) {
    this.app = express();
    this.port = port;
    this.setupMiddleware();
    this.setupRoutes();
  }

  setupMiddleware() {
    // Serve static files
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.use(express.json());
  }

  setupRoutes() {
    // Landing page
    this.app.get('/', (req, res) => {
      res.send(this.getLandingPageHTML());
    });

    // Features page
    this.app.get('/features', (req, res) => {
      res.send(this.getFeaturesPageHTML());
    });

    // API documentation
    this.app.get('/docs', (req, res) => {
      res.send(this.getDocsPageHTML());
    });

    // Contact/Demo request
    this.app.post('/demo-request', (req, res) => {
      console.log('📧 Demo request received:', req.body);
      res.json({ 
        success: true, 
        message: 'Demo request submitted successfully!' 
      });
    });

    // Health check
    this.app.get('/health', (req, res) => {
      res.json({ status: 'healthy', timestamp: new Date().toISOString() });
    });
  }

  getLandingPageHTML() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Spec-As-Code - Transform Product Management</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #333;
            }
            .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
            header { 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 60px 0;
                text-align: center;
            }
            .hero h1 { font-size: 3rem; margin-bottom: 20px; }
            .hero p { font-size: 1.3rem; margin-bottom: 30px; opacity: 0.9; }
            .cta-button {
                display: inline-block;
                background: #ff6b6b;
                color: white;
                padding: 15px 30px;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
                transition: transform 0.2s;
            }
            .cta-button:hover { transform: translateY(-2px); }
            .features {
                padding: 80px 0;
                background: #f8f9fa;
            }
            .features-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 40px;
                margin-top: 50px;
            }
            .feature-card {
                background: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                text-align: center;
            }
            .feature-icon { font-size: 3rem; margin-bottom: 20px; }
            .feature-card h3 { margin-bottom: 15px; color: #333; }
            .demo-section {
                padding: 80px 0;
                text-align: center;
            }
            .demo-form {
                max-width: 500px;
                margin: 30px auto;
            }
            .form-group {
                margin-bottom: 20px;
                text-align: left;
            }
            .form-group label {
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
            }
            .form-group input, .form-group textarea {
                width: 100%;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
                font-size: 16px;
            }
            footer {
                background: #333;
                color: white;
                text-align: center;
                padding: 40px 0;
            }
            .nav-links {
                margin: 20px 0;
            }
            .nav-links a {
                color: white;
                text-decoration: none;
                margin: 0 15px;
                opacity: 0.8;
            }
            .nav-links a:hover { opacity: 1; }
        </style>
    </head>
    <body>
        <header>
            <div class="container">
                <div class="hero">
                    <h1>🚀 Spec-As-Code</h1>
                    <p>Transform Product Management with Code-Based Specifications</p>
                    <div class="nav-links">
                        <a href="#features">Features</a>
                        <a href="/features">Learn More</a>
                        <a href="/docs">Documentation</a>
                        <a href="#demo">Request Demo</a>
                    </div>
                    <br>
                    <a href="#demo" class="cta-button">Get Started Today</a>
                </div>
            </div>
        </header>

        <section class="features" id="features">
            <div class="container">
                <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 20px;">
                    Why Choose Spec-As-Code?
                </h2>
                <p style="text-align: center; font-size: 1.2rem; color: #666; max-width: 600px; margin: 0 auto;">
                    Revolutionize how you manage product specifications with our three-pillar approach
                </p>
                
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">📋</div>
                        <h3>PM Spec Engine</h3>
                        <p>Define product specifications in YAML format with built-in validation, version control, and automated reporting. Keep your product requirements organized and trackable.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">🤖</div>
                        <h3>AI-Powered Agent</h3>
                        <p>Leverage AI to automatically generate specifications from natural language, analyze existing specs for improvements, and create comprehensive test cases.</p>
                    </div>
                    
                    <div class="feature-card">
                        <div class="feature-icon">🌐</div>
                        <h3>Marketing Platform</h3>
                        <p>Showcase your products with automatically generated marketing sites, feature documentation, and stakeholder dashboards - all synced with your specs.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="demo-section" id="demo">
            <div class="container">
                <h2 style="font-size: 2.5rem; margin-bottom: 20px;">Ready to Transform Your Workflow?</h2>
                <p style="font-size: 1.2rem; color: #666; margin-bottom: 30px;">
                    Request a personalized demo and see how Spec-As-Code can revolutionize your product management
                </p>
                
                <form class="demo-form" onsubmit="submitDemo(event)">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="company">Company</label>
                        <input type="text" id="company" name="company" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Tell us about your current challenges</label>
                        <textarea id="message" name="message" rows="4"></textarea>
                    </div>
                    
                    <button type="submit" class="cta-button">Request Demo</button>
                </form>
            </div>
        </section>

        <footer>
            <div class="container">
                <p>&copy; 2024 Spec-As-Code. Built for the hackathon with ❤️</p>
                <div class="nav-links">
                    <a href="/features">Features</a>
                    <a href="/docs">Documentation</a>
                    <a href="https://github.com/TianningC/Spec-As-Code">GitHub</a>
                </div>
            </div>
        </footer>

        <script>
            async function submitDemo(event) {
                event.preventDefault();
                
                const formData = new FormData(event.target);
                const data = Object.fromEntries(formData.entries());
                
                try {
                    const response = await fetch('/demo-request', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                    });
                    
                    const result = await response.json();
                    
                    if (result.success) {
                        alert('✅ Demo request submitted successfully! We\\'ll be in touch soon.');
                        event.target.reset();
                    } else {
                        alert('❌ Error submitting request. Please try again.');
                    }
                } catch (error) {
                    alert('❌ Network error. Please try again.');
                    console.error('Error:', error);
                }
            }
        </script>
    </body>
    </html>
    `;
  }

  getFeaturesPageHTML() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Features - Spec-As-Code</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #333;
            }
            .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
            header { 
                background: #333;
                color: white;
                padding: 20px 0;
            }
            .nav { display: flex; justify-content: space-between; align-items: center; }
            .nav a { color: white; text-decoration: none; margin: 0 15px; }
            .hero { padding: 60px 0; text-align: center; background: #f8f9fa; }
            .features-detail { padding: 60px 0; }
            .feature-section { margin-bottom: 60px; }
            .feature-section h2 { 
                font-size: 2rem; 
                margin-bottom: 20px; 
                color: #667eea; 
            }
            .code-example {
                background: #f4f4f4;
                padding: 20px;
                border-radius: 5px;
                margin: 20px 0;
                font-family: 'Courier New', monospace;
                overflow-x: auto;
            }
        </style>
    </head>
    <body>
        <header>
            <div class="container">
                <nav class="nav">
                    <div><strong>Spec-As-Code</strong></div>
                    <div>
                        <a href="/">Home</a>
                        <a href="/features">Features</a>
                        <a href="/docs">Docs</a>
                    </div>
                </nav>
            </div>
        </header>

        <section class="hero">
            <div class="container">
                <h1>Powerful Features for Modern Product Management</h1>
                <p>Discover how our three-module approach transforms specification management</p>
            </div>
        </section>

        <section class="features-detail">
            <div class="container">
                <div class="feature-section">
                    <h2>📋 PM Spec Engine</h2>
                    <p>Our specification engine provides a structured approach to defining and managing product requirements.</p>
                    
                    <h3>Key Capabilities:</h3>
                    <ul>
                        <li>YAML-based specification format for easy version control</li>
                        <li>JSON Schema validation ensures data integrity</li>
                        <li>Automated report generation with completion tracking</li>
                        <li>Feature-requirement mapping and dependency management</li>
                    </ul>

                    <div class="code-example">
# Example Product Specification
product:
  name: "User Authentication System"
  version: "1.0.0"
  description: "Secure user authentication and authorization"

features:
  - id: "F001"
    name: "User Login"
    description: "Allow users to authenticate with credentials"
    priority: "high"
    status: "in-progress"

requirements:
  - id: "R001"
    feature_id: "F001"
    description: "System must validate user credentials"
    acceptance_criteria:
      - "Accepts valid email/password combinations"
      - "Rejects invalid credentials with error message"
      - "Implements rate limiting for security"
                    </div>
                </div>

                <div class="feature-section">
                    <h2>🤖 AI-Powered Agent</h2>
                    <p>Leverage artificial intelligence to automate specification creation and analysis.</p>
                    
                    <h3>AI Capabilities:</h3>
                    <ul>
                        <li>Generate specifications from natural language descriptions</li>
                        <li>Analyze existing specs for completeness and quality</li>
                        <li>Automatically create test cases from requirements</li>
                        <li>Suggest improvements and identify gaps</li>
                    </ul>

                    <div class="code-example">
// Generate a feature from natural language
const agent = new SpecAgent();
const result = await agent.generateSpec(
  "User authentication system with login and registration"
);

// Analyze specification quality
const analysis = agent.analyzeSpec(mySpecification);
console.log(\`Spec quality score: \${analysis.score}/100\`);

// Generate test cases
const testCases = agent.generateTestCases(requirement);
                    </div>
                </div>

                <div class="feature-section">
                    <h2>🌐 Marketing Platform</h2>
                    <p>Automatically generate marketing content and documentation from your specifications.</p>
                    
                    <h3>Platform Features:</h3>
                    <ul>
                        <li>Auto-generated landing pages for products</li>
                        <li>Interactive feature documentation</li>
                        <li>Stakeholder dashboards with real-time progress</li>
                        <li>Demo request and lead generation forms</li>
                    </ul>

                    <p><strong>Benefits:</strong></p>
                    <ul>
                        <li>🚀 <strong>Faster Time-to-Market:</strong> Reduce specification creation time by 70%</li>
                        <li>📊 <strong>Better Quality:</strong> AI-powered analysis catches issues early</li>
                        <li>🔄 <strong>Automated Sync:</strong> Marketing content stays in sync with specs</li>
                        <li>👥 <strong>Team Collaboration:</strong> Centralized source of truth for all stakeholders</li>
                    </ul>
                </div>
            </div>
        </section>
    </body>
    </html>
    `;
  }

  getDocsPageHTML() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Documentation - Spec-As-Code</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.6;
                color: #333;
            }
            .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
            header { 
                background: #333;
                color: white;
                padding: 20px 0;
            }
            .nav { display: flex; justify-content: space-between; align-items: center; }
            .nav a { color: white; text-decoration: none; margin: 0 15px; }
            .docs-content { padding: 40px 0; }
            .sidebar { 
                float: left; 
                width: 250px; 
                background: #f8f9fa; 
                padding: 20px; 
                border-radius: 5px;
                margin-right: 30px;
            }
            .main-content { margin-left: 280px; }
            .code-block {
                background: #f4f4f4;
                padding: 15px;
                border-radius: 5px;
                margin: 15px 0;
                font-family: 'Courier New', monospace;
                overflow-x: auto;
            }
            h2 { color: #667eea; margin: 30px 0 15px 0; }
            h3 { margin: 20px 0 10px 0; }
        </style>
    </head>
    <body>
        <header>
            <div class="container">
                <nav class="nav">
                    <div><strong>Spec-As-Code</strong></div>
                    <div>
                        <a href="/">Home</a>
                        <a href="/features">Features</a>
                        <a href="/docs">Docs</a>
                    </div>
                </nav>
            </div>
        </header>

        <section class="docs-content">
            <div class="container">
                <div class="sidebar">
                    <h3>Quick Start</h3>
                    <ul>
                        <li><a href="#installation">Installation</a></li>
                        <li><a href="#usage">Basic Usage</a></li>
                    </ul>
                    
                    <h3>Modules</h3>
                    <ul>
                        <li><a href="#pm-spec">PM Spec</a></li>
                        <li><a href="#agent">Agent</a></li>
                        <li><a href="#marketing">Marketing</a></li>
                    </ul>
                    
                    <h3>Examples</h3>
                    <ul>
                        <li><a href="#examples">Code Examples</a></li>
                        <li><a href="#yaml">YAML Templates</a></li>
                    </ul>
                </div>

                <div class="main-content">
                    <h1>Spec-As-Code Documentation</h1>
                    <p>Welcome to the complete guide for using the Spec-As-Code platform.</p>

                    <h2 id="installation">Installation</h2>
                    <p>Get started by cloning the repository and installing dependencies:</p>
                    <div class="code-block">
git clone https://github.com/TianningC/Spec-As-Code.git
cd Spec-As-Code
npm run install:all
                    </div>

                    <h2 id="usage">Basic Usage</h2>
                    <p>Start all modules in development mode:</p>
                    <div class="code-block">
npm run dev
                    </div>

                    <h2 id="pm-spec">PM Spec Module</h2>
                    <p>The PM Spec module handles product specification parsing and validation.</p>
                    
                    <h3>Creating a Specification</h3>
                    <div class="code-block">
const PMSpec = require('@spec-as-code/pm-spec');
const pmSpec = new PMSpec();

const yamlContent = \`
product:
  name: "My Product"
  version: "1.0.0"
  description: "Product description"
features:
  - id: "F001"
    name: "Feature One"
    description: "First feature"
    priority: "high"
    status: "planned"
\`;

const result = pmSpec.parseSpec(yamlContent);
const validation = pmSpec.validateSpec(result.data);
const report = pmSpec.generateReport(result.data);
                    </div>

                    <h2 id="agent">Agent Module</h2>
                    <p>Use the AI agent to automate specification tasks.</p>
                    <div class="code-block">
const SpecAgent = require('@spec-as-code/agent');
const agent = new SpecAgent();

// Generate specification from natural language
const feature = await agent.generateSpec(
  "User can upload and manage profile photos"
);

// Analyze existing specification
const analysis = agent.analyzeSpec(mySpecification);
                    </div>

                    <h2 id="marketing">Marketing Module</h2>
                    <p>The marketing site provides a web interface for showcasing your product.</p>
                    <div class="code-block">
const MarketingSite = require('@spec-as-code/marketing-site');
const site = new MarketingSite(3002);

site.start();
console.log('Marketing site running on http://localhost:3002');
                    </div>

                    <h2 id="examples">Code Examples</h2>
                    <p>Complete example integrating all modules:</p>
                    <div class="code-block">
const PMSpec = require('@spec-as-code/pm-spec');
const SpecAgent = require('@spec-as-code/agent');

async function createProductSpec() {
  const agent = new SpecAgent();
  const pmSpec = new PMSpec();
  
  // Generate feature using AI
  const feature = await agent.generateSpec(
    "Shopping cart with add, remove, and checkout functionality"
  );
  
  // Create full specification
  const specification = {
    product: {
      name: "E-commerce Platform",
      version: "1.0.0",
      description: "Online shopping platform"
    },
    features: [feature.data],
    requirements: []
  };
  
  // Validate and generate report
  const validation = pmSpec.validateSpec(specification);
  const report = pmSpec.generateReport(specification);
  
  return { specification, validation, report };
}
                    </div>

                    <h2 id="yaml">YAML Template</h2>
                    <p>Standard YAML template for product specifications:</p>
                    <div class="code-block">
product:
  name: "Product Name"
  version: "1.0.0"
  description: "Product description"

features:
  - id: "F001"
    name: "Feature Name"
    description: "Feature description"
    priority: "high|medium|low"
    status: "planned|in-progress|completed"
    dependencies: []

requirements:
  - id: "R001"
    feature_id: "F001"
    description: "Requirement description"
    acceptance_criteria:
      - "Criteria 1"
      - "Criteria 2"
                    </div>
                </div>
            </div>
        </section>
    </body>
    </html>
    `;
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`🌐 Marketing Site running on http://localhost:${this.port}`);
      console.log('📱 Available pages:');
      console.log('   • Landing: http://localhost:' + this.port);
      console.log('   • Features: http://localhost:' + this.port + '/features');
      console.log('   • Docs: http://localhost:' + this.port + '/docs');
    });
  }
}

module.exports = MarketingSite;

// Start server if run directly
if (require.main === module) {
  const site = new MarketingSite();
  site.start();
}