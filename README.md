# End-to-End Cypress Testing Project

## Project Overview

This project implements end-to-end testing for a Notes application using Cypress, a modern web testing framework. The tests are designed to verify the functionality of a full-stack Notes application, ensuring that all user interactions work as expected.

## Detailed Test Coverage

### 1. Application Reset and Setup
- Before each test, the application state is reset using a dedicated testing endpoint
- A test user is created with predefined credentials
- The application ensures a clean state for each test case

### 2. Authentication Testing
- **Front Page Verification**
    - Checks if the main page loads correctly
    - Verifies the presence of application title and header
- **Login Functionality**
    - Tests failed login attempts with incorrect credentials
    - Validates error message styling (red color and border)
    - Verifies successful login with correct credentials
    - Confirms user session establishment

### 3. Note Management
- **Note Creation**
    - Tests the ability to create new notes
    - Verifies note persistence and display
- **Note Properties**
    - Tests importance toggling functionality
    - Verifies multiple notes handling
    - Checks note content display


## Technical Details

### Environment Configuration
The project uses environment variables for flexible configuration:
- Backend URL configuration
- Test user credentials
- Other environment-specific settings

### Test Data Management
- Uses Cypress fixtures for data mocking
- Implements proper test isolation
- Maintains consistent test data across runs

### Custom Commands
The project includes custom Cypress commands for:
- User login
- Note creation
- State management

## Best Practices Implemented

1. **Test Independence**
    - Each test runs in isolation
    - State is reset before each test
    - No dependencies between test cases

2. **Proper Selectors Usage**
    - Uses data-testid attributes for reliable element selection
    - Implements best practices for DOM traversal
    - Avoids brittle selectors

3. **Error Handling**
    - Validates error states
    - Checks error message content and styling
    - Ensures proper user feedback

