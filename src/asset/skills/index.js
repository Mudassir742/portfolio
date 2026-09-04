import antdLogo from './Ant Design.png'
import awsLogo from './AWS.png'
import bootstrapLogo from './Bootstrap.png'
import bitbucketLogo from './BitBucket.png'
import cssLogo from './CSS3.png'
import digitalOceanLogo from './Digital Ocean.png'
import djangoRestLogo from './Django REST.png'
import dockerLogo from './docker.png'
import fastApiLogo from './FastAPI.png'
import firebaseLogo from './Firebase.png'
import flaskLogo from './Flask.png'
import githubLogo from './GitHub.png'
import htmlLogo from './HTML5.png'
import javascriptLogo from './JavaScript.png'
import jenkinsLogo from './Jenkins.png'
import jestLogo from './Jest.png'
import materialUILogo from './Material UI.png'
import mongoDBLogo from './MongoDB.png'
import mySqlLogo from './MySQL.png'
import nextLogo from './Next.js.png'
import nginxLogo from './NGINX.png'
import nodeLogo from './Node.js.png'
import postmanLogo from './Postman.png'
import pythonLogo from './Python.png'
import reactLogo from './React.png'
import reduxLogo from './Redux.png'
import swaggerLogo from './Swagger.png'
import tailwindLogo from './Tailwind CSS.png'
import typescriptLogo from './TypeScript.png'
import vercelLogo from './Vercel.png'

// Flat list retained for anything that still wants every logo at once.
export const skillsLogos = [
  { logo: reactLogo, title: 'React' },
  { logo: reduxLogo, title: 'Redux' },
  { logo: nextLogo, title: 'Next.js' },
  { logo: antdLogo, title: 'Ant Design' },
  { logo: bootstrapLogo, title: 'Bootstrap' },
  { logo: cssLogo, title: 'CSS3' },
  { logo: htmlLogo, title: 'HTML5' },
  { logo: materialUILogo, title: 'Material UI' },
  { logo: tailwindLogo, title: 'Tailwind CSS' },
  { logo: javascriptLogo, title: 'JavaScript' },
  { logo: pythonLogo, title: 'Python' },
  { logo: typescriptLogo, title: 'TypeScript' },
  { logo: djangoRestLogo, title: 'Django REST' },
  { logo: fastApiLogo, title: 'FastAPI' },
  { logo: flaskLogo, title: 'Flask' },
  { logo: nodeLogo, title: 'Node.js' },
  { logo: firebaseLogo, title: 'Firebase' },
  { logo: mongoDBLogo, title: 'MongoDB' },
  { logo: mySqlLogo, title: 'MySQL' },
  { logo: awsLogo, title: 'AWS' },
  { logo: digitalOceanLogo, title: 'Digital Ocean' },
  { logo: vercelLogo, title: 'Vercel' },
  { logo: jenkinsLogo, title: 'Jenkins' },
  { logo: dockerLogo, title: 'Docker' },
  { logo: nginxLogo, title: 'NGINX' },
  { logo: githubLogo, title: 'GitHub' },
  { logo: bitbucketLogo, title: 'BitBucket' },
  { logo: postmanLogo, title: 'Postman' },
  { logo: swaggerLogo, title: 'Swagger' },
  { logo: jestLogo, title: 'Jest' },
]

// Grouped by category (mirrors the Skills section of the résumé) so the
// Technology component can render labeled groups instead of one flat grid.
export const skillsByCategory = [
  {
    category: 'Languages',
    skills: [
      { logo: typescriptLogo, title: 'TypeScript' },
      { logo: javascriptLogo, title: 'JavaScript' },
      { logo: pythonLogo, title: 'Python' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { logo: reactLogo, title: 'React' },
      { logo: nextLogo, title: 'Next.js' },
      { logo: reduxLogo, title: 'Redux' },
      { logo: tailwindLogo, title: 'Tailwind CSS' },
      { logo: materialUILogo, title: 'Material UI' },
      { logo: antdLogo, title: 'Ant Design' },
      { logo: bootstrapLogo, title: 'Bootstrap' },
      { logo: htmlLogo, title: 'HTML5' },
      { logo: cssLogo, title: 'CSS3' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { logo: nodeLogo, title: 'Node.js' },
      { logo: fastApiLogo, title: 'FastAPI' },
      { logo: flaskLogo, title: 'Flask' },
      { logo: djangoRestLogo, title: 'Django REST' },
    ],
  },
  {
    category: 'Data & Messaging',
    skills: [
      { logo: mongoDBLogo, title: 'MongoDB' },
      { logo: mySqlLogo, title: 'MySQL' },
      { logo: firebaseLogo, title: 'Firebase' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { logo: dockerLogo, title: 'Docker' },
      { logo: awsLogo, title: 'AWS' },
      { logo: digitalOceanLogo, title: 'Digital Ocean' },
      { logo: vercelLogo, title: 'Vercel' },
      { logo: jenkinsLogo, title: 'Jenkins' },
      { logo: nginxLogo, title: 'NGINX' },
    ],
  },
  {
    category: 'Testing & Tools',
    skills: [
      { logo: jestLogo, title: 'Jest' },
      { logo: swaggerLogo, title: 'Swagger' },
      { logo: postmanLogo, title: 'Postman' },
      { logo: githubLogo, title: 'GitHub' },
      { logo: bitbucketLogo, title: 'BitBucket' },
    ],
  },
]
