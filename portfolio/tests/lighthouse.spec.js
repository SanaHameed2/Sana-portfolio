import { test, expect } from '@playwright/test';
import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';

test('Lighthouse Auto Check', async () => {
  const chrome = await launch({ chromeFlags: ['--headless'] });
  const options = {
    port: chrome.port,
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  };

  const runnerResult = await lighthouse('http://localhost:5173', options);
  
  console.log('✅ Performance:', runnerResult.lhr.categories.performance.score * 100);
  console.log('✅ Accessibility:', runnerResult.lhr.categories.accessibility.score * 100);
  console.log('✅ SEO:', runnerResult.lhr.categories.seo.score * 100);

  expect(runnerResult.lhr.categories.performance.score).toBeGreaterThanOrEqual(0.80);
  expect(runnerResult.lhr.categories.accessibility.score).toBeGreaterThanOrEqual(0.90);

  await chrome.kill();
});