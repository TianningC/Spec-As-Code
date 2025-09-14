/**
 * Basic test for Agent module
 */
const SpecAgent = require('../src/index.js');

async function runTests() {
  console.log('🧪 Running Agent Tests...');
  
  const agent = new SpecAgent();
  let passed = 0;
  let failed = 0;

  // Test 1: Specification generation
  try {
    const result = await agent.generateSpec('User login functionality');
    
    if (result.success && result.data && result.data.id && result.data.name) {
      console.log('✅ Test 1 passed: Specification generation works');
      passed++;
    } else {
      console.log('❌ Test 1 failed: Specification generation failed');
      failed++;
    }
  } catch (error) {
    console.log('❌ Test 1 failed with error:', error.message);
    failed++;
  }

  // Test 2: Priority determination
  try {
    const highPriorityInput = 'Critical user authentication system';
    const result = await agent.generateSpec(highPriorityInput);
    
    if (result.success && result.data.priority === 'high') {
      console.log('✅ Test 2 passed: Priority determination works');
      passed++;
    } else {
      console.log('❌ Test 2 failed: Priority determination incorrect');
      failed++;
    }
  } catch (error) {
    console.log('❌ Test 2 failed with error:', error.message);
    failed++;
  }

  // Test 3: Specification analysis
  try {
    const sampleSpec = {
      product: { name: 'Test Product', version: '1.0.0', description: 'Test description' },
      features: [
        { id: 'F001', name: 'Feature 1', description: 'Good description', priority: 'high', status: 'completed' }
      ],
      requirements: [
        { id: 'R001', feature_id: 'F001', description: 'Requirement', acceptance_criteria: ['Criteria 1'] }
      ]
    };

    const analysis = agent.analyzeSpec(sampleSpec);
    
    if (analysis && typeof analysis.score === 'number' && analysis.score > 0) {
      console.log('✅ Test 3 passed: Specification analysis works');
      passed++;
    } else {
      console.log('❌ Test 3 failed: Specification analysis failed');
      failed++;
    }
  } catch (error) {
    console.log('❌ Test 3 failed with error:', error.message);
    failed++;
  }

  // Test 4: Test case generation
  try {
    const requirement = {
      id: 'R001',
      feature_id: 'F001',
      description: 'Test requirement',
      acceptance_criteria: ['Criteria 1', 'Criteria 2']
    };

    const testCases = agent.generateTestCases(requirement);
    
    if (Array.isArray(testCases) && testCases.length > 0) {
      console.log('✅ Test 4 passed: Test case generation works');
      passed++;
    } else {
      console.log('❌ Test 4 failed: Test case generation failed');
      failed++;
    }
  } catch (error) {
    console.log('❌ Test 4 failed with error:', error.message);
    failed++;
  }

  console.log(`\\n📊 Agent Test Results: ${passed} passed, ${failed} failed`);
  return { passed, failed };
}

if (require.main === module) {
  runTests();
}

module.exports = runTests;