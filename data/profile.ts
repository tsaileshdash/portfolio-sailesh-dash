export const profile = {
  name: 'Sailesh Dash',
  title: 'Senior QA Consultant · QA Automation Engineer',
  location: 'Hyderabad, India',
  email: 't.saileshdash@gmail.com',
  experience: '6.5+',
  resumePath: '/documents/Sailesh-Dash-Resume.pdf',
  photoPath: '/images/sailesh-dash.jpg',
  // Add real profile URLs here when ready. Empty values intentionally hide the links.
  linkedIn: 'https://www.linkedin.com/in/sailesh-dash-t',
  github: '',
};

export const career = [
  {
    company: 'Deloitte',
    role: 'QA / Quality Engineering Professional',
    period: 'Jun 2026 — Present',
    tag: 'CURRENT ROLE',
    summary: 'Supporting quality across web, mobile, and API layers with risk-aware test design and automation.',
    points: [
      'Perform manual and automation testing across web, mobile, and API layers.',
      'Design black-box scenarios for functional, regression, smoke, integration, and end-to-end testing.',
      'Use Playwright and JavaScript for UI automation and API tools for service validation.',
      'Collaborate with Agile teams using Jira and test management platforms.',
      'Use AI-assisted tools such as Claude and Cursor to support test analysis and productivity.',
    ],
    tools: ['Playwright', 'JavaScript', 'Jira', 'Claude', 'Cursor'],
  },
  {
    company: 'Datamatics Global Services Limited',
    role: 'Senior QA Consultant',
    period: 'Jul 2019 — Oct 2025',
    tag: 'PREVIOUS ROLE',
    summary: 'Delivered manual and automation testing for web, mobile, and API-based applications across business domains.',
    points: [
      'Created and executed functional, regression, smoke, exploratory, and end-to-end scenarios.',
      'Built and maintained UI automation for critical business workflows using JavaScript and Playwright.',
      'Performed API validation using Postman and supported integration testing for event-driven systems.',
      'Worked with Jenkins automation workflows and Jira/test management tools.',
      'Collaborated with developers, product owners, and business stakeholders in Agile teams.',
    ],
    tools: ['Playwright', 'JavaScript', 'Postman', 'Jenkins', 'Jira'],
  },
];

export const skillGroups = [
  { title: 'Automation engineering', icon: 'code', skills: ['Playwright', 'JavaScript'] },
  { title: 'Testing expertise', icon: 'shield', skills: ['Manual Testing', 'Automation Testing', 'Mobile Testing', 'Web Testing', 'API Testing', 'Black-Box Testing', 'Functional Testing', 'Regression Testing', 'Smoke Testing', 'Integration Testing', 'Exploratory Testing', 'End-to-End Testing', 'Test Case Design', 'Defect Management'] },
  { title: 'API & integration', icon: 'network', skills: ['Postman', 'Bruno', 'Kafka'] },
  { title: 'CI/CD', icon: 'workflow', skills: ['Jenkins'] },
  { title: 'Test management', icon: 'clipboard', skills: ['Jira', 'TestRail', 'Zephyr Scale', 'ReleaseMate'] },
  { title: 'AI-assisted QA', icon: 'sparkles', skills: ['Claude', 'Cursor'] },
];

export const projects = [
  { number: '01', title: 'Web UI Automation Framework', type: 'ILLUSTRATIVE CASE STUDY', description: 'A maintainable UI automation approach using reusable page objects, structured test data, and clear execution reports.', stack: ['Playwright', 'JavaScript', 'POM'], flow: ['Test scenarios', 'Page objects', 'Browser execution', 'Assertions', 'Reports'], status: 'Replace this template with a verified project, repository, and screenshots before publishing.' },
  { number: '02', title: 'API Validation Suite', type: 'ILLUSTRATIVE CASE STUDY', description: 'A structured API testing approach covering response status, payload validation, positive paths, and negative scenarios.', stack: ['API Testing', 'Postman / Bruno', 'CI'], flow: ['API request', 'Response checks', 'Schema / payload', 'Assertions', 'Report'], status: 'Replace this template with a verified project, repository, and screenshots before publishing.' },
  { number: '03', title: 'BDD Automation Framework', type: 'ILLUSTRATIVE CASE STUDY', description: 'A Gherkin-first approach that makes test intent readable and connects feature files with reusable automation steps.', stack: ['Cucumber', 'Gherkin', 'Playwright', 'Jenkins'], flow: ['Feature files', 'Step definitions', 'Page / API layer', 'Execution', 'HTML report'], status: 'Replace this template with a verified project, repository, and screenshots before publishing.' },
  { number: '04', title: 'Quality Strategy & Release Readiness', type: 'PRACTICE OVERVIEW', description: 'A risk-aware testing approach focused on meaningful coverage, clear defect reporting, and actionable release feedback.', stack: ['Risk-based testing', 'Regression', 'Defect lifecycle'], flow: ['Understand risk', 'Prioritize tests', 'Execute', 'Triage defects', 'Release feedback'], status: 'A description of approach, not a claim about a specific client engagement.' },
];

export const industries = ['ERP', 'Banking', 'Investment', 'Real Estate', 'Financial Services', 'E-Learning', 'E-Commerce'];
