import { CryptoImages } from '../asset/project/crypto-wave'
import { CVJuryImages } from '../asset/project/cv-jury'
import { DefinePediaImages } from '../asset/project/define-pedia'
import { GrantMatchImages } from '../asset/project/grant-match'
import { TripeSaverImages } from '../asset/project/my-trip-saver'
import { SigneoImages } from '../asset/project/signeo'

export const ProjectsDictionary = {
  'crypto-wave': {
    title: 'Crypto Wave',
    link: '',
    images: CryptoImages,
    technologies: ['React', 'Bootstrap', 'Python', 'FastAPI', 'MongoDB'],
    description: `Crypto Wave is a cryptocurrency tracking tool that displays live data for well-known
                    cryptocurrencies and enables real-time price comparisons through interactive graphs. It
                    also includes a forecasting feature that predicts future price trends. The frontend is
                    built with React and Bootstrap, while the backend runs on Python FastAPI with MongoDB
                    for data storage. I integrated the APIs powering the live data feed and forecasting
                    functionality, working from ML models built by a fellow engineer on the team.`,
  },
  signeo: {
    title: 'Signeo',
    link: '',
    images: SigneoImages,
    technologies: ['React', 'Material UI', 'Python', 'FastAPI'],
    description: `Signeo is a data-driven sales forecasting platform built for the paint industry. Using
                  React on the frontend and FastAPI on the backend, it delivers real-time visualizations
                  and predictions of sales data so the business can track trends and plan ahead. I built
                  the platform end to end, integrating forecasting models developed by the AI team into
                  the FastAPI service.`,
  },
  'my-trip-saver': {
    title: 'My Trip Saver',
    link: '',
    images: TripeSaverImages,
    technologies: ['React', 'Redux', 'Ant Design', 'Java', 'SQL'],
    description: `My Trip Saver is a flight-booking application for Indian airlines, aggregating
                  real-time data from 10+ flight providers so users can search and book flights in one
                  place. The frontend was built in React and the backend in Java. I owned the frontend,
                  working alongside a backend engineer on the API integration.`,
  },
  'grant-match': {
    title: 'Grant Match',
    link: 'https://grantmatch.ai/',
    images: GrantMatchImages,
    technologies: [
      'React',
      'Redux Toolkit',
      'Material UI',
      'Node.js',
      'Express',
      'Swagger',
      'Jest',
      'TypeScript',
      'Python',
      'FastAPI',
      'Stripe',
      'MongoDB',
      'Pinecone',
      'Docker',
    ],
    description: `GrantMatch surfaces the most relevant grant opportunities for its users, replacing
                    slow, manual searches with a matched, filterable feed — with a free 15-day trial and
                    no card required. I worked alongside a team of developers under an experienced team
                    lead, contributing across both the frontend and backend, including the Stripe
                    subscription flow and the FastAPI-based matching service.`,
  },
  'cv-jury': {
    title: 'CV Jury',
    link: 'https://coverletterai.uk/',
    images: CVJuryImages,
    technologies: [
      'React',
      'Redux Toolkit',
      'Material UI',
      'Python',
      'FastAPI',
      'Docker',
      'Digital Ocean',
      'OpenAI API',
    ],
    description: `CV Jury is an AI-powered cover letter writer that suggests content and language
                  tailored to each industry's best practices. I built the frontend in React and the
                  backend APIs in Python FastAPI, integrating the OpenAI API for content generation. I
                  also containerized the application with Docker and deployed it to Digital Ocean.`,
  },
  'time-pay-jao': {
    title: 'Time Pay Jao',
    link: '',
    images: TripeSaverImages,
    technologies: ['React', 'Tailwind CSS'],
    description: `Time Pay Jao is a ride-booking platform. This is the manager-side console for
                  overseeing drivers, rides and payouts. I built the frontend in React with Tailwind CSS.`,
  },
  'define-pedia': {
    title: 'DefinePedia',
    link: '',
    images: DefinePediaImages,
    technologies: [
      'Next.js',
      'React',
      'Material UI',
      'Stripe',
      'Express',
      'TypeScript',
      'MongoDB',
      'Docker',
    ],
    description: `DefinePedia helps students grasp their study material with clarity, organizing
                  content into a focused, easy-to-navigate learning experience. I worked with a team of
                  web developers across both the frontend and backend on this user-facing module, which
                  also includes two dashboard modules.`,
  },
  emercient: {
    title: 'Emercient',
    link: '',
    images: TripeSaverImages,
    technologies: [
      'React',
      'Material UI',
      'Python',
      'FastAPI',
      'Azure Active Directory',
      'Azure Blob Storage',
      'Cosmos DB',
      'Docker',
    ],
    description: `Emercient lets teams build Knowledge Bases from their own uploaded files and search
                    across that data conversationally, using natural-language prompts instead of manual
                    lookups.`,
  },
}
