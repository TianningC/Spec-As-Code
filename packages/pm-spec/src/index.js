const YAML = require('yaml');
const Ajv = require('ajv');

/**
 * PM Spec - Product Management Specification Handler
 * Handles parsing, validation, and processing of product specifications
 */
class PMSpec {
  constructor() {
    this.ajv = new Ajv();
    this.schema = this.getSpecSchema();
    this.validate = this.ajv.compile(this.schema);
  }

  /**
   * Define the schema for product specifications
   */
  getSpecSchema() {
    return {
      type: 'object',
      properties: {
        product: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            version: { type: 'string' },
            description: { type: 'string' }
          },
          required: ['name', 'version', 'description']
        },
        features: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              description: { type: 'string' },
              priority: { type: 'string', enum: ['high', 'medium', 'low'] },
              status: { type: 'string', enum: ['planned', 'in-progress', 'completed'] }
            },
            required: ['id', 'name', 'description', 'priority', 'status']
          }
        },
        requirements: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              feature_id: { type: 'string' },
              description: { type: 'string' },
              acceptance_criteria: { type: 'array', items: { type: 'string' } }
            },
            required: ['id', 'feature_id', 'description', 'acceptance_criteria']
          }
        }
      },
      required: ['product', 'features', 'requirements']
    };
  }

  /**
   * Parse YAML specification file
   */
  parseSpec(yamlContent) {
    try {
      const spec = YAML.parse(yamlContent);
      return { success: true, data: spec };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  /**
   * Validate specification against schema
   */
  validateSpec(spec) {
    const valid = this.validate(spec);
    if (valid) {
      return { success: true };
    } else {
      return { success: false, errors: this.validate.errors };
    }
  }

  /**
   * Generate specification report
   */
  generateReport(spec) {
    if (!spec.product) return null;

    const report = {
      product: spec.product,
      summary: {
        total_features: spec.features ? spec.features.length : 0,
        total_requirements: spec.requirements ? spec.requirements.length : 0,
        feature_status: this.getFeatureStatusSummary(spec.features || []),
        completion_percentage: this.calculateCompletionPercentage(spec.features || [])
      },
      features: spec.features || [],
      requirements: spec.requirements || []
    };

    return report;
  }

  getFeatureStatusSummary(features) {
    return features.reduce((acc, feature) => {
      acc[feature.status] = (acc[feature.status] || 0) + 1;
      return acc;
    }, {});
  }

  calculateCompletionPercentage(features) {
    if (features.length === 0) return 0;
    const completed = features.filter(f => f.status === 'completed').length;
    return Math.round((completed / features.length) * 100);
  }
}

module.exports = PMSpec;

// Demo usage
if (require.main === module) {
  const pmSpec = new PMSpec();
  
  console.log('🚀 PM Spec Module Initialized');
  console.log('✨ Ready to process product specifications');
  
  // Example specification
  const exampleSpec = {
    product: {
      name: 'Spec-As-Code Platform',
      version: '1.0.0',
      description: 'A platform for managing product specifications as code'
    },
    features: [
      {
        id: 'F001',
        name: 'Specification Parser',
        description: 'Parse YAML-based product specifications',
        priority: 'high',
        status: 'completed'
      },
      {
        id: 'F002',
        name: 'Validation Engine',
        description: 'Validate specifications against schema',
        priority: 'high',
        status: 'in-progress'
      }
    ],
    requirements: [
      {
        id: 'R001',
        feature_id: 'F001',
        description: 'System must parse valid YAML files',
        acceptance_criteria: [
          'Supports YAML syntax',
          'Returns parsed object',
          'Handles parsing errors gracefully'
        ]
      }
    ]
  };

  console.log('\n📋 Example Specification Report:');
  const report = pmSpec.generateReport(exampleSpec);
  console.log(JSON.stringify(report, null, 2));
}