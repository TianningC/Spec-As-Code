/**
 * Basic test for Marketing Site module
 */
const MarketingSite = require('../src/server.js');

function runTests() {
  console.log('🧪 Running Marketing Site Tests...');
  
  let passed = 0;
  let failed = 0;

  // Test 1: Marketing site initialization
  try {
    const site = new MarketingSite(3003); // Use different port for testing
    
    if (site && site.app) {
      console.log('✅ Test 1 passed: Marketing site initializes correctly');
      passed++;
    } else {
      console.log('❌ Test 1 failed: Marketing site initialization failed');
      failed++;
    }
  } catch (error) {
    console.log('❌ Test 1 failed with error:', error.message);
    failed++;
  }

  // Test 2: HTML content generation
  try {
    const site = new MarketingSite(3004);
    const landingHTML = site.getLandingPageHTML();
    
    if (landingHTML && landingHTML.includes('Spec-As-Code') && landingHTML.includes('<!DOCTYPE html>')) {
      console.log('✅ Test 2 passed: HTML content generation works');
      passed++;
    } else {
      console.log('❌ Test 2 failed: HTML content generation failed');
      failed++;
    }
  } catch (error) {
    console.log('❌ Test 2 failed with error:', error.message);
    failed++;
  }

  // Test 3: Features page content
  try {
    const site = new MarketingSite(3005);
    const featuresHTML = site.getFeaturesPageHTML();
    
    if (featuresHTML && featuresHTML.includes('PM Spec Engine') && featuresHTML.includes('AI-Powered Agent')) {
      console.log('✅ Test 3 passed: Features page content correct');
      passed++;
    } else {
      console.log('❌ Test 3 failed: Features page content incorrect');
      failed++;
    }
  } catch (error) {
    console.log('❌ Test 3 failed with error:', error.message);
    failed++;
  }

  // Test 4: Documentation page content
  try {
    const site = new MarketingSite(3006);
    const docsHTML = site.getDocsPageHTML();
    
    if (docsHTML && docsHTML.includes('Installation') && docsHTML.includes('npm run')) {
      console.log('✅ Test 4 passed: Documentation page content correct');
      passed++;
    } else {
      console.log('❌ Test 4 failed: Documentation page content incorrect');
      failed++;
    }
  } catch (error) {
    console.log('❌ Test 4 failed with error:', error.message);
    failed++;
  }

  console.log(`\\n📊 Marketing Site Test Results: ${passed} passed, ${failed} failed`);
  return { passed, failed };
}

if (require.main === module) {
  runTests();
}

module.exports = runTests;