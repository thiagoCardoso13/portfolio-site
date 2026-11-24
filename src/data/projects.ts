export interface Project {
  slug: string;
  title: string;
  tagline: string;
  stack: string[];
  image: string;
  live?: string;
  repo: string;
  problem: string;
  solution: string[];
  learned: string;
}

export const projects: Project[] = [
  {
    slug: 'space-booking-api',
    title: 'Space Booking API',
    tagline: 'REST API to book rooms, desks and courts, with no double bookings even under concurrency.',
    stack: ['Java 21', 'Spring Boot 4', 'PostgreSQL', 'JWT', 'Docker', 'GitHub Actions'],
    image: '/img/space-booking.gif',
    live: 'https://space-booking-api-dtam.onrender.com/swagger-ui.html',
    repo: 'https://github.com/thiagoCardoso13/space-booking-api',
    problem:
      'Booking is easy until two people try to book the same slot at the same moment. The interesting part is getting that right, not only CRUD.',
    solution: [
      'The no-overlap guarantee lives in PostgreSQL (an exclusion constraint over time ranges), and tests fire parallel requests at the same slot.',
      'Business rules (opening hours, slots, limits, cancellation notice) live in one small, unit-tested policy class.',
      'The OpenAPI document is checked by a test against what the security configuration really enforces.',
      'Every push to main runs CI and deploys automatically (Render + Neon, public Docker image).',
    ],
    learned:
      'Pushing invariants down to the database, testing against a real PostgreSQL, and shipping a service end to end with CI/CD.',
  },
  {
    slug: 'data-job-market-spain',
    title: 'Data Job Market in Spain',
    tagline: 'What do data job offers in Spain actually ask for, and what does that look like in Alicante/Elche?',
    stack: ['Python', 'DuckDB', 'Streamlit', 'GitHub Actions'],
    image: '/img/job-market.png',
    live: 'https://spain-data-job-market.streamlit.app',
    repo: 'https://github.com/thiagoCardoso13/JobOffersPainel',
    problem:
      'Job boards show offers one by one. I wanted to know which skills, seniority levels, salaries and work modes the market really shows.',
    solution: [
      'Collects about 570 postings from a job-offers API, removes duplicate ads and stores them in DuckDB.',
      'Extracts skills, seniority, work mode and salary, then serves everything in an interactive dashboard.',
      'Built under a free-tier quota of 25 API calls, so sampling biases and limitations are documented openly.',
    ],
    learned:
      'Designing a data pipeline under hard constraints and being honest about what the data can and cannot say.',
  },
  {
    slug: 'chat-with-your-data',
    title: 'Chat With Your Data (text to SQL)',
    tagline: 'An AI agent that picks the tables, writes the SQL, runs it, draws a chart and explains the result.',
    stack: ['Python', 'LangGraph', 'DuckDB', 'Streamlit', 'Plotly'],
    image: '/img/text-to-sql.jpg',
    live: 'https://projectaiagent-pgybf64azfpyftzwls2l2t.streamlit.app/',
    repo: 'https://github.com/thiagoCardoso13/Project_AI_Agent',
    problem:
      'Business users have questions but not SQL. An agent has to be useful without being allowed to break anything.',
    solution: [
      'A LangGraph agent with tools to list tables, describe them, execute SQL and create charts.',
      'A safety layer restricts what queries can run, and every answer shows a timeline of the tools it used.',
      'Works with several LLM providers (Gemini, Groq, OpenRouter, Ollama).',
    ],
    learned: 'Tool-using agents, guardrails around generated SQL, and making agent behaviour visible to the user.',
  },
];
