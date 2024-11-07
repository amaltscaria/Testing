# Jest vs Vitest Comparison Guide

## Quick Overview

| Feature | Jest | Vitest |
|---------|------|--------|
| Speed | Slower | 3-4x Faster |
| Community & Resources | Extensive | Growing |
| TypeScript Support | Needs setup | Out of the box |
| Configuration | More complex | Simpler |
| Project Integration | Standard in CRA | Standard in Vite |
| Maturity | Very mature | Newer but stable |
| ESM Support | Limited | Native |
| Watch Mode Speed | 2-3 seconds | 300-500ms |

## Detailed Comparison

### 1. Setup & Configuration

#### Jest Setup
```json
// package.json
{
  "dependencies": {
    "jest": "^29.0.0",
    "@types/jest": "^29.0.0",
    "ts-jest": "^29.0.0"
  },
  "scripts": {
    "test": "jest"
  }
}
```

```javascript
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
```

#### Vitest Setup
```json
// package.json
{
  "dependencies": {
    "vitest": "^1.0.0"
  },
  "scripts": {
    "test": "vitest"
  }
}
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node'
  }
});
```

### 2. Pros and Cons

#### Jest Pros
- Industry standard with extensive adoption
- Huge community and resource base
- Comprehensive documentation
- Built-in code coverage
- Works immediately with Create React App
- Battle-tested in production
- Wide range of plugins and extensions
- Strong integration with major IDEs

#### Jest Cons
- Slower execution time
- Complex configuration for TypeScript
- Slower watch mode
- ESM support needs configuration
- Can be heavy for small projects
- Configuration can be overwhelming

#### Vitest Pros
- Exceptionally fast execution
- Native TypeScript support
- Simple configuration
- Native ESM support
- Compatible with Jest's API
- Great Vite integration
- Lighter weight
- Modern architecture
- Fast watch mode
- Runs tests in parallel by default

#### Vitest Cons
- Smaller community
- Fewer resources and tutorials
- Some Jest plugins might not work
- Newer (less battle-tested)
- Primarily focused on Vite projects
- Limited IDE integration compared to Jest

### 3. When to Choose Which

#### Choose Jest When:
- Using Create React App
- Working on existing Jest projects
- Need specific Jest plugins
- Want maximum community support
- Need extensive testing resources
- Working on larger, established projects
- Need guaranteed stability
- Team is familiar with Jest

#### Choose Vitest When:
- Using Vite for your project
- Starting a new project
- Using TypeScript heavily
- Need faster test execution
- Working on modern ESM projects
- Want simpler configuration
- Need better watch mode performance
- Working on smaller to medium projects

### 4. Performance Comparison

```typescript
// Example Performance Metrics
Running 1000 tests:
- Jest: ~10 seconds
- Vitest: ~2-3 seconds

Watch mode file changes:
- Jest: ~2-3 seconds to rerun
- Vitest: ~300-500ms to rerun

Cold start:
- Jest: ~5 seconds
- Vitest: ~2 seconds
```

### 5. Usage Example (Same for Both)

```typescript
// Basic Test Example (works in both Jest and Vitest)
import { sum } from './utils';

describe('sum function', () => {
  test('adds two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('handles negative numbers', () => {
    expect(sum(-1, 1)).toBe(0);
  });
});

// React Component Test
import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';

test('renders user information', () => {
  const user = { name: 'John', email: 'john@example.com' };
  render(<UserCard user={user} />);
  
  expect(screen.getByText(user.name)).toBeInTheDocument();
  expect(screen.getByText(user.email)).toBeInTheDocument();
});
```

### 6. Common Commands

```bash
# Jest Commands
npm test               # Run tests
npm test -- --watch   # Watch mode
npm test -- --coverage # Generate coverage

# Vitest Commands
npm test              # Run tests
npm test watch        # Watch mode
npm test --coverage   # Generate coverage
```

## Conclusion

- Both are excellent testing frameworks
- Jest is more established but slower
- Vitest is faster but newer
- Choice often depends on project setup
- Testing patterns are similar in both
- Can switch between them later if needed

## Best Practice Recommendations

1. **For New Projects:**
   - If using Vite: Choose Vitest
   - If using CRA: Stay with Jest

2. **For Existing Projects:**
   - Continue with existing framework
   - Consider migration only if speed is crucial

3. **For Learning:**
   - Start with either (concepts transfer)
   - Focus on testing patterns rather than framework specifics
