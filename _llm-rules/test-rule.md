---
description: 
globs: *.spec.ts, *.test.ts
alwaysApply: false
---

# Testing Guidelines
When you are testing this project, please follow these guidelines:

## Testing Principles
- Write unit tests for utility functions and hooks
- Create integration tests for API routes using Hono's testing utilities
- Implement end-to-end tests for critical user flows
- Use mock data for testing to avoid external dependencies

## Directory Structure

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── __tests__/           # Unit tests colocated with component
│   │       └── Button.test.tsx
│   └── Form/
│       ├── Form.tsx
│       └── __tests__/
│           └── Form.test.tsx
├── utils/
│   ├── validation.ts
│   └── __tests__/               # Unit tests colocated with utilities
│       └── validation.test.ts
└── e2e/                         # E2E tests in dedicated directory
    ├── specs/
    │   ├── auth.spec.ts
    │   └── checkout.spec.ts
    ├── fixtures/                # Test data and fixtures
    │   └── users.json
    └── support/                 # Helper functions and custom commands
        └── commands.ts
```

## Testing Principles

### General Guidelines
- Write tests that are maintainable, readable, and reliable
- Follow the AAA pattern (Arrange, Act, Assert)
- Use meaningful test descriptions that explain the expected behavior
- Keep tests independent and isolated
- Avoid test interdependencies
- Use appropriate test doubles (mocks, stubs, spies) judiciously

### Unit Tests
- Colocate unit tests with the source files they test
- Use `__tests__` directory within component/utility directories
- Focus on testing business logic and component behavior
- Test both success and error cases
- Keep test files small and focused
- Use meaningful test data that represents real-world scenarios

### Integration Tests
- Place integration tests close to the features they test
- Focus on testing component interactions and data flow
- Use realistic test data and scenarios
- Mock external dependencies appropriately
- Test error handling and edge cases

### E2E Tests
- Organize E2E tests in the dedicated `/e2e` directory
- Structure tests by feature or user flow
- Keep test scenarios focused and specific
- Use page objects or component objects for better maintainability
- Implement proper test data management
- Consider test environment setup and teardown

## Best Practices

### Test Data Management
- Use fixtures for common test data
- Implement data factories for generating test data
- Keep test data realistic but minimal
- Clean up test data after tests complete
- Use typed test data to catch type-related issues early

### Mocking and Stubbing
- Mock external dependencies consistently
- Use dependency injection to facilitate testing
- Keep mocks simple and focused
- Verify mock interactions when relevant
- Document mock behavior and assumptions

### Testing Utilities
- Create reusable test utilities and helpers
- Implement custom matchers when needed
- Use consistent assertion patterns
- Share common setup and teardown logic

### Performance
- Keep tests fast and efficient
- Parallelize test execution when possible
- Minimize unnecessary setup and teardown
- Use appropriate waiting strategies in E2E tests

## Code Quality

### Naming Conventions
- Use descriptive test names that explain the behavior
- Follow the pattern: `describe('Component/Feature')`, `it('should do something')`
- Use meaningful names for test utilities and helpers

### Documentation
- Document complex test setups
- Explain non-obvious test scenarios
- Include examples for custom test utilities
- Document test data requirements and assumptions

### Maintenance
- Regular review and cleanup of tests
- Update tests when requirements change
- Remove obsolete tests
- Keep test coverage reports up to date
- Regular dependency updates for testing tools

## Testing Tools

### Unit and Integration Testing
- Bun test runner for fast and efficient testing
- Built-in test assertions from Bun

### E2E Testing
- Playwright for E2E testing
- Custom commands and utilities
- Visual regression testing when needed
- API mocking capabilities

### Code Coverage
- Coverage thresholds for critical code
- Regular coverage monitoring
- Integration with CI/CD pipeline

