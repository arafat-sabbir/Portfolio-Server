/* eslint-disable @typescript-eslint/no-explicit-any */
import { TClient } from '../modules/about/client/client.interface';
import { TWork } from '../modules/about/work/work.interface';
import { TBlog } from '../modules/blog/blog.interface';
import { TPortfolio } from '../modules/portfolio/portfolio.interface';
import { TEducation } from '../modules/resume/education/education.interface';
import { TExperience } from '../modules/resume/experience/experience.interface';
import { TSkill } from '../modules/resume/skill/skill.interface';
import { TSocial } from '../modules/user/social/social.interface';
import { TUser } from '../modules/user/user/user.interface';

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
    photo: '/uploads/coding.png',
    title: 'Web Design and Development',
    description:
      'Designing responsive, user-friendly websites with sleek interfaces and robust functionality tailored to client needs.',
  },
  {
    photo: '/uploads/mobile-development.png',
    title: 'Mobile App Development',
    description:
      'Building cross-platform mobile applications with a focus on performance, scalability, and excellent user experience.',
  },
  {
    photo: '/uploads/backend.png',
    title: 'Backend Development',
    description:
      ' Developing secure and scalable APIs and server-side systems for seamless app performance and data handling.',
  },
  {
    photo: '/uploads/software-development.png',
    title: 'Software Development',
    description:
      'Offering technical consultancy to optimize software projects and resolve complex development challenges efficiently',
  },
];

export const clientData: TClient[] = [
  { photo: '/uploads/client1.png' },
  { photo: '/uploads/client2.png' },
  { photo: '/uploads/client3.png' },
  { photo: '/uploads/client4.png' },
  { photo: '/uploads/client5.png' },
  { photo: '/uploads/client6.png' },
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
    title: 'Echo Estate',
    category: 'Real Estate Website',
    description: 'A Good Project WIth Various Rules',
    technologiesUsed: ['react', 'firebase', 'mongodb', 'mongoose', 'tailwind css', 'typescript'],
    features: ['Has Various Dashboard For Various User', 'Admin Can Block A Agent'],
    livePreview: 'https://echo-state.web.app/',
    thumbnail: '/uploads/echo-estate.png',
    reviews: [],
    startDate: new Date('2013-12-31'),
    endDate: 'undefined' as any,
    currentlyWorking: true,
  },
  {
    title: 'FinalTry Innovations',
    category: 'Portfolio Website',
    description: 'A Portfolio Website For finalTry-innovations.site',
    technologiesUsed: ['next js', 'framer-motion', 'tailwind css', 'typescript'],
    features: ['User Can Book Appointment With The Admin Through The Website'],
    livePreview: 'https://finaltry-innovations.site/',
    thumbnail: '/uploads/finaltry-innovations.png',
    reviews: [],
    startDate: new Date('2024-7-1'),
    endDate: new Date('2024-10-1'),
    currentlyWorking: false,
  },
];

export const blogData: TBlog[] = [
  {
    title: 'Mobile App Development',
    category: 'Mobile App Development',
    content: `
      <h2>Mobile App Development: Transforming Ideas into Seamless Experiences</h2>
      <p>Mobile app development has become a cornerstone of the digital age, shaping how businesses and individuals interact with technology. With the rise of smartphones and tablets, creating intuitive, efficient, and visually appealing mobile applications is more critical than ever.</p>

      <h3>🌟 Why Mobile App Development Matters</h3>
      <p>Mobile apps provide a direct way to engage with users, offering convenience, accessibility, and personalized experiences. Whether it's for e-commerce, social media, healthcare, or entertainment, a well-designed app can significantly impact user engagement and business growth.</p>

      <h3>🔧 Key Technologies in Mobile App Development</h3>
      <ul>
        <li><b>Flutter:</b> 🖥 A game-changing framework for developing cross-platform apps with a single codebase, ensuring consistent performance across Android and iOS.</li>
        <li><b>Firebase:</b> 📡 A backend-as-a-service (BaaS) offering real-time databases, authentication, and cloud storage, making app development faster and more efficient.</li>
        <li><b>Dart:</b> 📝 The programming language behind Flutter, known for its simplicity and performance optimization.</li>
      </ul>

      <h3>🛠 The Development Process</h3>
      <ol>
        <li><b>Ideation and Planning:</b> 🎯 Understanding client requirements, target audience, and market trends.</li>
        <li><b>Design:</b> 🎨 Crafting user-centric UI/UX designs to enhance the user experience.</li>
        <li><b>Development:</b> 💻 Writing clean and maintainable code using modern frameworks like Flutter.</li>
        <li><b>Testing:</b> 🧪 Ensuring the app is bug-free and performs well across various devices.</li>
        <li><b>Deployment and Maintenance:</b> 🚀 Publishing the app on platforms like Google Play and Apple App Store, followed by continuous updates and support.</li>
      </ol>

      <h3>🚀 Trends Shaping Mobile App Development</h3>
      <ul>
        <li><b>Cross-Platform Development:</b> 🔄 Reducing development time and cost by creating apps for multiple platforms with a single codebase.</li>
        <li><b>AI Integration:</b> 🤖 Adding intelligent features like chatbots, recommendation engines, and predictive analysis.</li>
        <li><b>IoT and Wearables:</b> 🌐 Connecting apps with IoT devices to offer a seamless smart experience.</li>
        <li><b>AR/VR:</b> 🌍 Leveraging augmented reality (AR) and virtual reality (VR) to create immersive user experiences.</li>
      </ul>

      <h3>⚠ Challenges and Solutions</h3>
      <p>Developing a mobile app comes with challenges, including device compatibility, security concerns, and performance optimization. Using the right tools, frameworks, and methodologies ensures these hurdles are addressed effectively.</p>

      <h3>🎯 Conclusion</h3>
      <p>Mobile app development is an ever-evolving field, offering endless opportunities for innovation. By adopting cutting-edge technologies and focusing on user experience, developers can create apps that truly make a difference.</p>
    `,
    photo: '/uploads/mobile-app.jpg',
  },
  {
    title: 'Backend Development with Modern Tools',
    category: 'Backend Development',
    content: `
      <h2>Backend Development: Building the Foundation for Scalable Apps</h2>
      <p>Backend development is the backbone of modern applications, handling everything from data storage to user authentication. A robust backend ensures that an app runs smoothly, securely, and efficiently.</p>

      <h3>🔧 Why Backend Development Matters</h3>
      <p>The backend is where all the essential business logic takes place, including data management, user interactions, and server-side operations. A well-structured backend can improve performance, scalability, and security, providing a seamless experience for users.</p>

      <h3>🛠 Key Technologies in Backend Development</h3>
      <ul>
        <li><b>Python (Flask):</b> 🐍 A lightweight and flexible web framework for building secure APIs and backend systems quickly and efficiently.</li>
        <li><b>Node.js:</b> 🚀 A JavaScript runtime that enables building fast, scalable server-side applications using JavaScript.</li>
        <li><b>Django:</b> 🌐 A high-level Python framework that encourages rapid development of secure, maintainable websites and APIs.</li>
        <li><b>MySQL/PostgreSQL:</b> 🗄 Relational databases that store and organize data for easy retrieval and management.</li>
        <li><b>MongoDB:</b> 📝 A NoSQL database designed for scalability and high performance with large volumes of data.</li>
        <li><b>Redis:</b> ⚡ A key-value store used for caching, improving the performance of data-intensive applications.</li>
      </ul>

      <h3>🛠 The Development Process</h3>
      <ol>
        <li>Requirement Gathering and Planning</li>
        <li>Database Design</li>
        <li>API Development</li>
        <li>Security and Authentication</li>
        <li>Testing and Debugging</li>
        <li>Deployment and Maintenance</li>
      </ol>

      <h3>🚀 Trends Shaping Backend Development</h3>
      <ul>
        <li><b>Microservices Architecture:</b> 🔧 Breaking down monolithic applications into smaller, independent services that can be developed, deployed, and scaled separately.</li>
        <li><b>Serverless Computing:</b> ☁ Reducing infrastructure management by running backend functions on-demand without managing servers.</li>
        <li><b>GraphQL:</b> 📈 Providing a flexible API query language that allows clients to request only the data they need, optimizing performance.</li>
        <li><b>Containerization (Docker):</b> 📦 Packaging applications and services into containers for easier deployment and scaling across different environments.</li>
      </ul>

      <h3>⚠ Challenges and Solutions</h3>
      <p>Backend development faces challenges like maintaining performance under heavy traffic, managing data consistency, and securing sensitive information. Using the right tools and frameworks, along with proper monitoring and testing, ensures the system is reliable and efficient.</p>

      <h3>🎯 Conclusion</h3>
      <p>Backend development is essential for creating powerful, scalable applications. With the right technologies, practices, and design patterns, developers can ensure their apps run securely, efficiently, and are ready to scale as user demands grow.</p>
    `,
    photo: '/uploads/backend_development.jpg',
  },
];

export const userData: TUser[] = [
  {
    name: 'John Doe Example',
    displayEmail: 'john.doe@example.com',
    photo: '/uploads/user.png',
    designation: 'Software Engineer',
    location: 'New York, USA',
    dob: '1990-01-01',
    phone: '+1234567890',
    locationLink:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118076.69070921047!2d91.73663604315058!3d22.357533369429774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2z4Kaa4Kaf4KeN4Kaf4KaX4KeN4Kaw4Ka-4Kau!5e0!3m2!1sbn!2sbd!4v1732514670778!5m2!1sbn!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    bio: 'I am John Doe, a Software Engineer with experience in developing web applications using cutting-edge technologies. I am skilled in both front-end and back-end development and have a strong passion for learning and innovation.',
  },
];
