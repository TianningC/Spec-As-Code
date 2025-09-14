# 🚀 Spec-As-Code

Transform Product Management with Code-Based Specifications

A comprehensive hackathon project that revolutionizes how product specifications are created, managed, and marketed through three integrated modules:

- **📋 PM Spec Engine** - YAML-based specification management with validation
- **🤖 AI Agent** - Automated specification generation and analysis  
- **🌐 Marketing Site** - Dynamic product marketing and documentation

## 🌟 Features

### PM Spec Engine
- ✅ YAML-based product specification format
- ✅ JSON Schema validation for data integrity
- ✅ Automated report generation with completion tracking
- ✅ Feature-requirement mapping and dependency management

### AI-Powered Agent
- 🤖 Generate specifications from natural language input
- 📊 Analyze existing specs for quality and completeness
- 🧪 Automatically create test cases from requirements
- 💡 Suggest improvements and identify gaps

### Marketing Platform
- 🌐 Auto-generated landing pages for products
- 📚 Interactive feature documentation
- 📈 Stakeholder dashboards with real-time progress
- 📧 Demo request and lead generation forms

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/TianningC/Spec-As-Code.git
cd Spec-As-Code

# Install all dependencies
npm run install:all
```

### Running the Platform

```bash
# Start all modules in development mode
npm run dev

# Or start individual modules
npm run dev:pm-spec    # PM Spec module
npm run dev:agent      # AI Agent module  
npm run dev:marketing  # Marketing site on http://localhost:3002
```

### Quick Demo

```bash
# Run the integrated demo
node index.js
```

This will:
1. Generate a specification using the AI agent
2. Validate it with the PM Spec engine
3. Analyze quality and generate reports
4. Start the marketing site at http://localhost:3002

## 📋 Usage Examples

### PM Spec Engine

```javascript
const PMSpec = require('./packages/pm-spec/src/index.js');
const pmSpec = new PMSpec();

// Validate a specification
const spec = {
  product: {
    name: "My Product",
    version: "1.0.0", 
    description: "Product description"
  },
  features: [/* features array */],
  requirements: [/* requirements array */]
};

const validation = pmSpec.validateSpec(spec);
const report = pmSpec.generateReport(spec);
```

### AI Agent

```javascript
const SpecAgent = require('./packages/agent/src/index.js');
const agent = new SpecAgent();

// Generate specification from natural language
const result = await agent.generateSpec(
  "User authentication system with login and registration"
);

// Analyze specification quality
const analysis = agent.analyzeSpec(specification);
console.log(`Quality score: ${analysis.score}/100`);

// Generate test cases
const testCases = agent.generateTestCases(requirement);
```

### Marketing Site

```javascript
const MarketingSite = require('./packages/marketing-site/src/server.js');
const site = new MarketingSite(3002);

site.start();
// Visit http://localhost:3002 for the marketing site
```

## 📁 Project Structure

```
Spec-As-Code/
├── packages/
│   ├── pm-spec/          # PM Specification Engine
│   │   ├── src/
│   │   │   └── index.js  # Main PM Spec logic
│   │   ├── test/
│   │   └── package.json
│   ├── agent/            # AI Agent Module
│   │   ├── src/
│   │   │   └── index.js  # Agent logic and AI processing
│   │   ├── test/
│   │   └── package.json
│   └── marketing-site/   # Marketing Website
│       ├── src/
│       │   └── server.js # Express server with HTML content
│       ├── test/
│       └── package.json
├── examples/             # Example specifications
│   ├── ecommerce-platform.yaml
│   └── task-management.yaml
├── index.js             # Main integration demo
├── package.json         # Root package.json with workspace config
└── README.md
```

## 📖 YAML Specification Format

```yaml
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
    dependencies: ["F000"]  # Optional

requirements:
  - id: "R001"
    feature_id: "F001"
    description: "Requirement description"
    acceptance_criteria:
      - "Criteria 1"
      - "Criteria 2"
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run individual module tests
npm run test:pm-spec
npm run test:agent
npm run test:marketing
```

## 🌐 Marketing Site Pages

Once the marketing site is running on http://localhost:3002:

- **/** - Landing page with platform overview
- **/features** - Detailed feature descriptions and code examples
- **/docs** - Complete documentation and API reference
- **/health** - System health check endpoint

## 🛠 Build

```bash
# Build all modules
npm run build

# Build individual modules
npm run build:pm-spec
npm run build:agent
npm run build:marketing
```

## 🤝 Contributing

This is a hackathon project showcasing the "spec-as-code" concept. The platform demonstrates:

1. **Structured Specification Management** - Using YAML for version-controlled specs
2. **AI-Powered Automation** - Generating and analyzing specifications
3. **Integrated Marketing** - Automatically creating product marketing content

## 📄 License

MIT License - Built for hackathon with ❤️

## 🎯 Hackathon Goals

This project demonstrates how product management can be revolutionized by treating specifications as code:

- **Version Control** - Track changes to product specs like code
- **Automation** - Use AI to generate and improve specifications
- **Integration** - Connect specs to marketing and documentation
- **Quality** - Validate and analyze specifications systematically
- **Collaboration** - Enable better team collaboration through structured specs

Perfect for product managers, developers, and stakeholders who want to modernize their product specification workflow!
