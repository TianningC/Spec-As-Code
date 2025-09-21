/**
 * Spec-As-Code Agent
 * AI-powered agent for automating specification generation and management
 */
class SpecAgent {
  constructor(config = {}) {
    this.config = {
      apiEndpoint: config.apiEndpoint || 'http://localhost:3000',
      maxRetries: config.maxRetries || 3,
      timeout: config.timeout || 5000,
      ...config
    };
    this.templates = this.initializeTemplates();
  }

  /**
   * Initialize specification templates
   */
  initializeTemplates() {
    return {
      feature: {
        id: '',
        name: '',
        description: '',
        priority: 'medium',
        status: 'planned',
        acceptance_criteria: [],
        dependencies: []
      },
      requirement: {
        id: '',
        feature_id: '',
        description: '',
        acceptance_criteria: [],
        test_cases: []
      },
      epic: {
        id: '',
        name: '',
        description: '',
        features: [],
        timeline: '',
        stakeholders: []
      }
    };
  }

  /**
   * Generate specification from natural language input
   */
  async generateSpec(input, type = 'feature') {
    console.log(`🤖 Generating ${type} specification from: "${input}"`);
    
    try {
      // Simulate AI processing
      const spec = await this.processWithAI(input, type);
      return {
        success: true,
        data: spec,
        generated_at: new Date().toISOString()
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Simulate AI processing (would integrate with real AI service in production)
   */
  async processWithAI(input, type) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const template = { ...this.templates[type] };
    
    // Simple keyword-based generation (would use real AI in production)
    if (type === 'feature') {
      template.id = `F${Date.now().toString().slice(-3)}`;
      template.name = this.extractFeatureName(input);
      template.description = input;
      template.priority = this.determinePriority(input);
      template.acceptance_criteria = this.generateAcceptanceCriteria(input);
    }

    return template;
  }

  /**
   * Extract feature name from input
   */
  extractFeatureName(input) {
    // Simple extraction logic (would use NLP in production)
    const words = input.split(' ');
    const relevantWords = words.filter(word => 
      word.length > 3 && 
      !['the', 'and', 'should', 'must', 'will', 'can'].includes(word.toLowerCase())
    );
    
    return relevantWords.slice(0, 3).map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  }

  /**
   * Determine priority based on keywords
   */
  determinePriority(input) {
    const highPriorityKeywords = ['critical', 'urgent', 'important', 'must', 'required'];
    const lowPriorityKeywords = ['nice', 'could', 'optional', 'future'];
    
    const lowerInput = input.toLowerCase();
    
    if (highPriorityKeywords.some(keyword => lowerInput.includes(keyword))) {
      return 'high';
    } else if (lowPriorityKeywords.some(keyword => lowerInput.includes(keyword))) {
      return 'low';
    }
    
    return 'medium';
  }

  /**
   * Generate acceptance criteria
   */
  generateAcceptanceCriteria(input) {
    // Simple criteria generation (would use AI in production)
    const criteria = [
      `The feature should implement the functionality described: "${input}"`,
      'The feature should be tested and validated',
      'The feature should follow project standards and guidelines'
    ];

    // Add specific criteria based on keywords
    if (input.toLowerCase().includes('user')) {
      criteria.push('The feature should provide a good user experience');
    }
    if (input.toLowerCase().includes('api')) {
      criteria.push('The API should be well-documented and follow REST principles');
    }
    if (input.toLowerCase().includes('data')) {
      criteria.push('Data should be validated and securely handled');
    }

    return criteria;
  }

  /**
   * Analyze existing specifications for improvements
   */
  analyzeSpec(spec) {
    console.log('🔍 Analyzing specification for improvements...');
    
    const analysis = {
      score: 0,
      issues: [],
      suggestions: [],
      strengths: []
    };

    // Check completeness
    if (!spec.product || !spec.features || !spec.requirements) {
      analysis.issues.push('Specification is missing required sections');
    } else {
      analysis.score += 25;
      analysis.strengths.push('Contains all required sections');
    }

    // Check feature descriptions
    if (spec.features) {
      const poorDescriptions = spec.features.filter(f => 
        !f.description || f.description.length < 10
      );
      
      if (poorDescriptions.length > 0) {
        analysis.issues.push(`${poorDescriptions.length} features have inadequate descriptions`);
      } else {
        analysis.score += 25;
        analysis.strengths.push('All features have good descriptions');
      }
    }

    // Check acceptance criteria
    if (spec.requirements) {
      const missingCriteria = spec.requirements.filter(r => 
        !r.acceptance_criteria || r.acceptance_criteria.length === 0
      );
      
      if (missingCriteria.length > 0) {
        analysis.issues.push(`${missingCriteria.length} requirements missing acceptance criteria`);
      } else {
        analysis.score += 25;
        analysis.strengths.push('All requirements have acceptance criteria');
      }
    }

    // Check priority distribution
    if (spec.features) {
      const priorities = spec.features.map(f => f.priority);
      const highPriority = priorities.filter(p => p === 'high').length;
      const totalFeatures = spec.features.length;
      
      if (highPriority / totalFeatures > 0.7) {
        analysis.suggestions.push('Consider reviewing priorities - too many high priority features');
      } else {
        analysis.score += 25;
        analysis.strengths.push('Good priority distribution');
      }
    }

    return analysis;
  }

  /**
   * Generate test cases from requirements
   */
  generateTestCases(requirement) {
    console.log(`🧪 Generating test cases for requirement: ${requirement.id}`);
    
    const testCases = [];
    
    // Generate positive test cases
    if (requirement.acceptance_criteria) {
      requirement.acceptance_criteria.forEach((criteria, index) => {
        testCases.push({
          id: `TC${requirement.id}_${index + 1}`,
          type: 'positive',
          description: `Verify: ${criteria}`,
          steps: [
            'Set up test environment',
            `Test the criteria: ${criteria}`,
            'Verify expected outcome'
          ],
          expected_result: 'Criteria is met successfully'
        });
      });
    }

    // Generate negative test cases
    testCases.push({
      id: `TC${requirement.id}_NEG1`,
      type: 'negative',
      description: 'Test invalid input handling',
      steps: [
        'Provide invalid input',
        'Execute the feature',
        'Verify error handling'
      ],
      expected_result: 'System handles invalid input gracefully'
    });

    return testCases;
  }
}

module.exports = SpecAgent;

// Demo usage
if (require.main === module) {
  const agent = new SpecAgent();
  
  console.log('🤖 Spec-As-Code Agent Initialized');
  console.log('🚀 Ready to assist with specification automation');

  // Demo: Generate a feature specification
  (async () => {
    console.log('\n--- Feature Generation Demo ---');
    const result = await agent.generateSpec(
      'User authentication system with login and registration functionality'
    );
    
    if (result.success) {
      console.log('✅ Generated Feature:');
      console.log(JSON.stringify(result.data, null, 2));
    }

    // Demo: Analyze a specification
    console.log('\n--- Specification Analysis Demo ---');
    const sampleSpec = {
      product: { name: 'Test Product', version: '1.0.0', description: 'A test product' },
      features: [
        { id: 'F001', name: 'Login', description: 'User login feature', priority: 'high' },
        { id: 'F002', name: 'Dashboard', description: '', priority: 'high' }
      ],
      requirements: [
        { id: 'R001', feature_id: 'F001', description: 'Login requirement', acceptance_criteria: ['Must validate credentials'] }
      ]
    };

    const analysis = agent.analyzeSpec(sampleSpec);
    console.log('📊 Specification Analysis:');
    console.log(JSON.stringify(analysis, null, 2));

    // Demo: Generate test cases
    console.log('\n--- Test Case Generation Demo ---');
    const testCases = agent.generateTestCases(sampleSpec.requirements[0]);
    console.log('🧪 Generated Test Cases:');
    console.log(JSON.stringify(testCases, null, 2));
  })();
}