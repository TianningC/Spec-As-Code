/**
 * Spec-As-Code Integration Example
 * Demonstrates how all three modules work together
 */

const PMSpec = require('./packages/pm-spec/src/index.js');
const SpecAgent = require('./packages/agent/src/index.js');
const MarketingSite = require('./packages/marketing-site/src/server.js');

class SpecAsCodePlatform {
  constructor() {
    this.pmSpec = new PMSpec();
    this.agent = new SpecAgent();
    this.marketingSite = null;
  }

  /**
   * Complete workflow demonstration
   */
  async demonstrateWorkflow() {
    console.log('🚀 Starting Spec-As-Code Platform Demonstration\n');

    // Step 1: Generate specification using AI Agent
    console.log('Step 1: Generating specification with AI Agent...');
    const featureResult = await this.agent.generateSpec(
      'User dashboard with analytics, charts, and real-time data visualization'
    );

    if (!featureResult.success) {
      console.error('❌ Failed to generate feature:', featureResult.error);
      return;
    }

    // Step 2: Create complete specification
    console.log('Step 2: Creating complete product specification...');
    const specification = {
      product: {
        name: 'Analytics Dashboard Platform',
        version: '1.0.0',
        description: 'A comprehensive analytics platform for business intelligence'
      },
      features: [
        featureResult.data,
        {
          id: 'F002',
          name: 'Data Export',
          description: 'Export dashboard data in multiple formats',
          priority: 'medium',
          status: 'planned'
        }
      ],
      requirements: [
        {
          id: 'R001',
          feature_id: featureResult.data.id,
          description: 'Dashboard must display real-time metrics',
          acceptance_criteria: [
            'Updates data every 30 seconds',
            'Shows visual indicators for data freshness',
            'Handles connection failures gracefully'
          ]
        }
      ]
    };

    // Step 3: Validate specification
    console.log('Step 3: Validating specification...');
    const validation = this.pmSpec.validateSpec(specification);
    
    if (validation.success) {
      console.log('✅ Specification is valid');
    } else {
      console.log('❌ Validation errors:', validation.errors);
    }

    // Step 4: Generate report
    console.log('Step 4: Generating specification report...');
    const report = this.pmSpec.generateReport(specification);
    console.log('📊 Specification Report:');
    console.log(`   • Product: ${report.product.name} v${report.product.version}`);
    console.log(`   • Features: ${report.summary.total_features}`);
    console.log(`   • Requirements: ${report.summary.total_requirements}`);
    console.log(`   • Completion: ${report.summary.completion_percentage}%`);

    // Step 5: Analyze specification quality
    console.log('\\nStep 5: Analyzing specification quality...');
    const analysis = this.agent.analyzeSpec(specification);
    console.log(`📈 Quality Score: ${analysis.score}/100`);
    
    if (analysis.strengths.length > 0) {
      console.log('✅ Strengths:');
      analysis.strengths.forEach(strength => console.log(`   • ${strength}`));
    }
    
    if (analysis.issues.length > 0) {
      console.log('⚠️  Issues to address:');
      analysis.issues.forEach(issue => console.log(`   • ${issue}`));
    }

    // Step 6: Generate test cases
    console.log('\\nStep 6: Generating test cases...');
    const testCases = this.agent.generateTestCases(specification.requirements[0]);
    console.log(`🧪 Generated ${testCases.length} test cases for requirement ${specification.requirements[0].id}`);

    return {
      specification,
      validation,
      report,
      analysis,
      testCases
    };
  }

  /**
   * Start the marketing site
   */
  startMarketingSite(port = 3002) {
    console.log('\\n🌐 Starting Marketing Site...');
    this.marketingSite = new MarketingSite(port);
    this.marketingSite.start();
    return this.marketingSite;
  }

  /**
   * Integration health check
   */
  healthCheck() {
    const health = {
      pmSpec: !!this.pmSpec,
      agent: !!this.agent,
      marketingSite: !!this.marketingSite,
      timestamp: new Date().toISOString()
    };

    console.log('💊 Platform Health Check:', health);
    return health;
  }
}

// Demo execution
async function runDemo() {
  const platform = new SpecAsCodePlatform();
  
  try {
    // Run workflow demonstration
    const results = await platform.demonstrateWorkflow();
    
    // Start marketing site
    platform.startMarketingSite();
    
    // Health check
    setTimeout(() => {
      platform.healthCheck();
    }, 2000);

    console.log('\\n🎉 Spec-As-Code Platform Demo Complete!');
    console.log('🌐 Visit http://localhost:3002 to see the marketing site');
    console.log('📖 Check /features and /docs pages for more information');
    
  } catch (error) {
    console.error('❌ Demo failed:', error);
  }
}

module.exports = SpecAsCodePlatform;

// Run demo if executed directly
if (require.main === module) {
  runDemo();
}