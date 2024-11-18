/* eslint-disable @typescript-eslint/no-explicit-any */
import { TClient } from '../modules/about/client/client.interface';
import { TWork } from '../modules/about/work/work.interface';
import { TBlog } from '../modules/blog/blog.interface';
import { TPortfolio } from '../modules/portfolio/portfolio.interface';
import { TEducation } from '../modules/resume/education/education.interface';
import { TExperience } from '../modules/resume/experience/experience.interface';
import { TSkill } from '../modules/resume/skill/skill.interface';
import { TSocial } from '../modules/user/social/social.interface';

export const skillData: TSkill[] = [
  { skill: 'Flutter', level: 90 },
  { skill: 'Firebase', level: 85 },
  { skill: 'Python (Flask)', level: 80 },
  { skill: 'Dart', level: 85 },
  { skill: 'Git & Version Control', level: 75 },
  { skill: 'UI/UX Integration', level: 70 },
];

export const experienceData: TExperience[] = [
  {
    position: 'Software Engineer',
    companyName: 'Brain Station 23',
    startDate: new Date('2023-01-01'),
    endDate: new Date('2020-12-31'),
  },
  {
    position: 'Junior Developer',
    companyName: 'Tech Innovators Ltd.',
    startDate: new Date('2021-02-01'),
    endDate: new Date('2022-12-31'),
  },
  {
    position: 'Intern',
    companyName: 'ABC Solutions',
    startDate: new Date('2020-06-01'),
    endDate: new Date('2020-12-31'),
  },
];

export const educationData: TEducation[] = [
  {
    instituteName: 'University of Dhaka',
    degreeName: 'B.Sc. in Computer Science & Engineering',
    startDate: new Date('2016-01-01'),
    endDate: new Date('2020-12-31'),
  },
  {
    instituteName: 'Chittagong College',
    degreeName: 'Higher Secondary Certificate (HSC) in Science',
    startDate: new Date('2013-06-01'),
    endDate: new Date('2015-05-31'),
  },
  {
    instituteName: 'Govt. High School, Chittagong',
    degreeName: 'Secondary School Certificate (SSC) in Science',
    startDate: new Date('2011-01-01'),
    endDate: new Date('2013-12-31'),
  },
];

export const workData: TWork[] = [
  {
    photo: '/uploads/mobile.png',
    title: 'Creating Modern Apps',
    description:
      'Building responsive and high-performing mobile applications with Flutter for Android and iOS platforms.',
  },
  {
    photo: '/uploads/server.png',
    title: 'API and Server Solutions',
    description:
      'Developing secure and scalable backend systems using Python Flask and Firebase for smooth app functionality.',
  },
  {
    photo: '/uploads/design.png',
    title: 'Designing User-Centric Interfaces',
    description:
      'Integrating intuitive and visually appealing designs to enhance user experiences in every project.',
  },
  {
    photo: '/uploads/guide.png',
    title: 'Guiding Future Developers',
    description:
      'Offering consultancy and training sessions on Flutter development and best practices for app creation.',
  },
];

export const clientData: TClient[] = [
  { photo: '/uploads/client1.png' },
  { photo: '/uploads/client2.png' },
  { photo: '/uploads/client3.png' },
  { photo: '/uploads/client4.png' },
  { photo: '/uploads/client5.png' },
];

export const socialData: TSocial[] = [
  {
    name: 'github',
    url: 'https://github.com/finaltry-innovations',
  },
  {
    name: 'facebook',
    url: 'https://web.facebook.com',
  },
];

export const portfolioData: TPortfolio[] = [
  {
    title: 'Echo Estate (Real Estate)',
    category: 'Real Estate Website',
    description: 'A Good Project WIth Various Rules',
    technologiesUsed: ['react', 'firebase', 'mongodb', 'mongoose', 'tailwind css', 'typescript'],
    features: ['Has Various Dashboard For Various User', 'Admin Can Block A Agent'],
    livePreview: 'https://echo-state.web.app/',
    sourceCode: 'https://echo-state.web.app/',
    thumbnail: '/uploads/photo-1730609730807-516621179.png',
    reviews: [],
    startDate: new Date('2013-12-31'),
    endDate: 'undefined' as any,
    currentlyWorking: true,
  },
];

export const blogData: TBlog[] = [
  {
    title: 'Mobile App Development with Flutter',
    category: 'Mobile App Development',
    content: `
      <h2>Backend Development: Building the Foundation for Scalable Apps</h2>
      <p>Backend development is the backbone of modern applications, handling everything from data storage to user authentication. A robust backend ensures that an app runs smoothly, securely, and efficiently.</p>

      <h3>Why Backend Development Matters</h3>
      <p>The backend is where all the essential business logic takes place, including data management, user interactions, and server-side operations. A well-structured backend can improve performance, scalability, and security, providing a seamless experience for users.</p>

      <h3>Key Technologies in Backend Development</h3>
      <ul>
        <li>Python (Flask): A lightweight and flexible web framework for building secure APIs and backend systems quickly and efficiently.</li>
        <li>Node.js: A JavaScript runtime that enables building fast, scalable server-side applications using JavaScript.</li>
        <li>Django: A high-level Python framework that encourages rapid development of secure, maintainable websites and APIs.</li>
        <li>MySQL/PostgreSQL: Relational databases that store and organize data for easy retrieval and management.</li>
        <li>MongoDB: A NoSQL database designed for scalability and high performance with large volumes of data.</li>
        <li>Redis: A key-value store used for caching, improving the performance of data-intensive applications.</li>
      </ul>

      <h3>The Development Process</h3>
      <ol>
        <li>Requirement Gathering and Planning</li>
        <li>Database Design</li>
        <li>API Development</li>
        <li>Security and Authentication</li>
        <li>Testing and Debugging</li>
        <li>Deployment and Maintenance</li>
      </ol>

      <h3>Trends Shaping Backend Development</h3>
      <ul>
        <li>Microservices Architecture: Breaking down monolithic applications into smaller, independent services that can be developed, deployed, and scaled separately.</li>
        <li>Serverless Computing: Reducing infrastructure management by running backend functions on-demand without managing servers.</li>
        <li>GraphQL: Providing a flexible API query language that allows clients to request only the data they need, optimizing performance.</li>
        <li>Containerization (Docker): Packaging applications and services into containers for easier deployment and scaling across different environments.</li>
      </ul>

      <h3>Challenges and Solutions</h3>
      <p>Backend development faces challenges like maintaining performance under heavy traffic, managing data consistency, and securing sensitive information. Using the right tools and frameworks, along with proper monitoring and testing, ensures the system is reliable and efficient.</p>

      <h3>Conclusion</h3>
      <p>Backend development is essential for creating powerful, scalable applications. With the right technologies, practices, and design patterns, developers can ensure their apps run securely, efficiently, and are ready to scale as user demands grow.</p>
    `,
    photo: '/uploads/backend_development.jpg',
  },
];
