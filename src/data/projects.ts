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
    slug: 'energy-demand-forecast',
    title: 'Energy Demand Forecast',
    tagline: 'Every day it forecasts the next day of Spain\'s electricity demand, hour by hour, and records how close it was.',
    stack: ['Python', 'pandas', 'scikit-learn', 'MLflow', 'FastAPI', 'Streamlit', 'GitHub Actions'],
    image: '/img/energy-forecast.jpg',
    live: 'https://energy-demand-forecast-pz2daz6h6ksbmcszecf7nl.streamlit.app/',
    repo: 'https://github.com/thiagoCardoso13/energy-demand-forecast',
    problem:
      'A forecast is easy to make look good by accident: one value from the future slipping into the features is enough. The goal was an error number that would hold in real use.',
    solution: [
      'Each forecast uses only what is known at 10:00 the day before, including the temperature forecast of that moment instead of the observed temperature. Tests tamper with later data and check that nothing changes.',
      'A rolling backtest compares gradient boosting and linear regression against a simple baseline, with runs tracked in MLflow.',
      'On a held-out period used once (September to November 2026): 2.70% mean error, against 4.94% for repeating the previous week.',
      'A scheduled GitHub Actions job records the forecast in the repository, a Streamlit dashboard shows it, and a read-only FastAPI service (run locally) serves it.',
    ],
    learned:
      'Preventing data leakage, comparing against a baseline before trusting a model, and saying where the number is optimistic.',
  },
  {
    slug: 'elche-air-quality',
    title: 'Elche Air Quality Pipeline',
    tagline: 'A daily data pipeline for the air Elche breathes: Airflow, dbt tests and a public report.',
    stack: ['Python', 'Apache Airflow', 'dbt', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    image: '/img/air-quality.jpg',
    live: 'https://thiagocardoso13.github.io/elche-air-quality/',
    repo: 'https://github.com/thiagoCardoso13/elche-air-quality',
    problem:
      'Hourly measurements arrive with gaps, invalid values and later corrections, and the legal thresholds themselves change on 12 December 2026. Running the pipeline twice must not duplicate or distort anything.',
    solution: [
      'Apache Airflow downloads the data of two stations from the European Environment Agency, loads it into PostgreSQL without duplicates and runs dbt once a day, on my own machine with Docker Compose.',
      'dbt models keep gaps visible, handle 23 and 25 hour days, and judge each hour by the rules in force on that day, with 26 automated tests plus dbt data tests.',
      'A GitHub Actions job rebuilds the public report every day with the same extraction and models.',
      'From January to 28 November 2026, ozone was above the WHO guideline on 123 days at each station, while no EU threshold was exceeded. The source data is not yet verified.',
    ],
    learned:
      'Making loads safe to repeat, putting rules and their dates in data instead of code, and separating a health guideline from a legal limit when reporting.',
  },
  {
    slug: 'telemetry-test-station',
    title: 'Telemetry & Test Station',
    tagline: 'A ground test station for a simulated pressurised tank: live telemetry, commands, alarms and test reports.',
    stack: ['Python', 'PostgreSQL', 'TypeScript', 'Fastify', 'React', 'Playwright', 'Docker', 'GitHub Actions'],
    image: '/img/telemetry-station.jpg',
    live: 'https://telemetry-test-station.onrender.com',
    repo: 'https://github.com/thiagoCardoso13/telemetry-test-station',
    problem:
      'Testing hardware means trusting what the screen says. Packets get lost or corrupted, alarms must not flicker, and every requirement needs evidence that it was checked, or a clear statement that it was not.',
    solution: [
      'A simulator sends binary telemetry over UDP, with a packet format inspired by CCSDS and ECSS (not compliant), and accepts commands and injected faults.',
      'An ingest service checks every packet, counts losses and corruption, stores readings in PostgreSQL, raises alarms and rides out short database outages.',
      'A React dashboard shows live values, charts, alarms and the result of each command. A test runner traces sequences to requirements and also lists what is not covered.',
      '128 automated tests, including browser tests in CI. Median 5 ms from simulator to browser feed, measured on a laptop. All data is synthetic.',
    ],
    learned:
      'Designing a binary protocol, treating bad input as normal (one wild packet could silence the ingest until I made it resynchronise), and reporting honestly what the tests do not cover.',
  },
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
  {
    slug: 'spain-paperwork-assistant',
    title: 'Spain Paperwork Assistant (RAG)',
    tagline: 'A chat that answers NIE, empadronamiento, health card and degree recognition questions, citing the official page.',
    stack: ['Python', 'Streamlit', 'ChromaDB', 'fastembed', 'Gemini', 'GitHub Actions'],
    image: '/img/paperwork-assistant.jpg',
    live: 'https://spain-paperwork-assistant-y7ancesxw2rncyukxz8r5s.streamlit.app/',
    repo: 'https://github.com/thiagoCardoso13/spain-paperwork-assistant',
    problem:
      'Paperwork information for foreigners is scattered across ministries and councils, written in administrative Spanish, and a generic chatbot will confidently invent fees and deadlines.',
    solution: [
      'Retrieval over twelve official pages with a free, local multilingual embedding model and a ChromaDB index committed to the repo.',
      'Every answer cites the page it comes from, and the app refuses instead of guessing when nothing relevant is found.',
      'Hybrid search (semantic + keyword) and an evaluation set that measures retrieval: 95% on the tuning questions and 88% on questions written after tuning, up from 79%.',
      'Runs entirely on free services, with model fallback and a per-session question limit to protect the free quota.',
    ],
    learned:
      'Retrieval quality is mostly about chunking, hybrid search and honest evaluation, not the model: measuring found a bug that cut words in half, and a held-out set kept me from fooling myself. I also removed a change that did not help the numbers.',
  },
  {
    slug: 'job-application-agent',
    title: 'Job Application Agent',
    tagline: 'An AI agent that reads recruiter emails, updates a tracker, flags deadlines and drafts follow-ups.',
    stack: ['Python', 'LangGraph', 'Gemini', 'Gmail API', 'Streamlit', 'GitHub Actions'],
    image: '/img/job-agent.jpg',
    live: 'https://job-application-agent-xxdsl3jntxsgwh9ctxkwbf.streamlit.app/',
    repo: 'https://github.com/thiagoCardoso13/job-application-agent',
    problem:
      'After about 190 applications, the replies were scattered across my inbox: interview invitations, tests, rejections and automatic confirmations. Keeping track by hand was slow and I was missing things.',
    solution: [
      'A LangGraph agent classifies each email (English or Spanish), extracts company, role and date, updates a tracker and flags deadlines in the next 48 hours.',
      'Business rules live in code, not in the prompt: a stage never goes backwards, a rejection is final, and unclear emails go to a review queue.',
      'Gmail access is read-only and follow-ups are only drafted, never sent. The public demo uses synthetic emails only.',
      'On 30 labelled emails the model got 100% of categories right against 63% for a generic keyword baseline. The set is synthetic, so I treat it as a pipeline check, not a benchmark.',
    ],
    learned:
      'Keeping the rules that must not break out of the prompt, writing a fair baseline (my first one, tuned on my own data, scored 100% and proved nothing), and making an agent fail gracefully on free-tier quotas.',
  },
];
