# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\lighthouse.spec.js >> Lighthouse Auto Check
- Location: tests\lighthouse.spec.js:5:5

# Error details

```
Error: expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 0.8
Received:    0.32
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import lighthouse from 'lighthouse';
  3  | import { launch } from 'chrome-launcher';
  4  | 
  5  | test('Lighthouse Auto Check', async () => {
  6  |   const chrome = await launch({ chromeFlags: ['--headless'] });
  7  |   const options = {
  8  |     port: chrome.port,
  9  |     onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  10 |   };
  11 | 
  12 |   const runnerResult = await lighthouse('http://localhost:5173', options);
  13 |   
  14 |   console.log('✅ Performance:', runnerResult.lhr.categories.performance.score * 100);
  15 |   console.log('✅ Accessibility:', runnerResult.lhr.categories.accessibility.score * 100);
  16 |   console.log('✅ SEO:', runnerResult.lhr.categories.seo.score * 100);
  17 | 
> 18 |   expect(runnerResult.lhr.categories.performance.score).toBeGreaterThanOrEqual(0.80);
     |                                                         ^ Error: expect(received).toBeGreaterThanOrEqual(expected)
  19 |   expect(runnerResult.lhr.categories.accessibility.score).toBeGreaterThanOrEqual(0.90);
  20 | 
  21 |   await chrome.kill();
  22 | });
```