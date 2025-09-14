/**
 * Basic test for PM Spec module
 */
const PMSpec = require('../src/index.js');

function runTests() {
  console.log('🧪 Running PM Spec Tests...');
  
  const pmSpec = new PMSpec();
  let passed = 0;
  let failed = 0;

  // Test 1: Valid specification parsing
  try {
    const validSpec = {
      product: {
        name: 'Test Product',
        version: '1.0.0',
        description: 'A test product'
      },
      features: [
        {
          id: 'F001',
          name: 'Test Feature',
          description: 'A test feature',
          priority: 'high',
          status: 'planned'
        }
      ],
      requirements: [
        {
          id: 'R001',
          feature_id: 'F001',
          description: 'Test requirement',
          acceptance_criteria: ['Test criteria']
        }
      ]
    };

    const validation = pmSpec.validateSpec(validSpec);
    if (validation.success) {
      console.log('✅ Test 1 passed: Valid specification validation');
      passed++;
    } else {
      console.log('❌ Test 1 failed: Valid specification rejected');
      failed++;
    }
  } catch (error) {
    console.log('❌ Test 1 failed with error:', error.message);
    failed++;
  }

  // Test 2: Invalid specification rejection
  try {
    const invalidSpec = {
      product: {
        name: 'Test Product'
        // Missing required fields
      }
    };

    const validation = pmSpec.validateSpec(invalidSpec);
    if (!validation.success) {
      console.log('✅ Test 2 passed: Invalid specification rejected');
      passed++;
    } else {
      console.log('❌ Test 2 failed: Invalid specification accepted');
      failed++;
    }
  } catch (error) {
    console.log('❌ Test 2 failed with error:', error.message);
    failed++;
  }

  // Test 3: Report generation
  try {
    const spec = {
      product: { name: 'Test', version: '1.0.0', description: 'Test' },
      features: [
        { id: 'F001', name: 'F1', description: 'Feature 1', priority: 'high', status: 'completed' },
        { id: 'F002', name: 'F2', description: 'Feature 2', priority: 'low', status: 'planned' }
      ],
      requirements: []
    };

    const report = pmSpec.generateReport(spec);
    if (report && report.summary.total_features === 2 && report.summary.completion_percentage === 50) {
      console.log('✅ Test 3 passed: Report generation works correctly');
      passed++;
    } else {
      console.log('❌ Test 3 failed: Report generation incorrect');
      failed++;
    }
  } catch (error) {
    console.log('❌ Test 3 failed with error:', error.message);
    failed++;
  }

  console.log(`\\n📊 PM Spec Test Results: ${passed} passed, ${failed} failed`);
  return { passed, failed };
}

if (require.main === module) {
  runTests();
}

module.exports = runTests;