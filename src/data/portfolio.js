export const profile = {
  name: 'Mukesh Rathore',
  role: 'Senior Software Engineer',
  email: 'mukesh.rathore86@gmail.com',
  resumeUrl: 'https://mukeshrathore.github.io/resume',
  about: 'Versatile and Dynamic Java UI Developer',
  aboutDetail: 'Working as Senior Software Developer, capable of pushing the limits creatively in fast paced, deadline-oriented environment and experience with Information Architecture.',
  social: {
    linkedin: 'https://www.linkedin.com/in/mukeshrathore86/',
    x: 'https://x.com/mukeshrathore86',
    github: 'https://github.com/mukeshrathore',
  },
  address: 'Charlotte, NC',
}

export const skills = [
  { name: 'HTML5 & CSS3', level: 90 },
  { name: 'JavaScript & jQuery', level: 90 },
  { name: 'Angular & Reactjs', level: 80 },
  { name: 'Node.js & MongoDB', level: 70 },
  { name: 'Java SpringBoot & MySQL', level: 60 },
]

export const specialties = [
  { title: 'Enterprise Application Development', description: 'Financial, Banking and Insurance Domain Knowledge' },
  { title: 'Front-End Development', description: 'Modern and Responsive Designs.' },
  { title: 'Team Player', description: 'It takes two flints to make a fire.' },
]

export const hobbies = [
  { name: 'Music' },
  { name: 'Photography' },
  { name: 'Travel' },
]

export const timeline = [
  { date: 'Jan 2004 - Dec 2008', title: 'Bachelor Degree Electronics', org: 'University of Mumbai, India' },
  { date: 'Jan 2009 - Dec 2011', title: 'Software Engineer', org: 'RVMK Semantic Labs, India' },
  { date: 'Jan 2012 - Mar 2013', title: 'UI Developer', org: 'TalentServ Consulting, India' },
  { date: 'Mar 2013 - Nov 2015', title: 'Senior Associate Software', org: 'Synechron Technologies, India' },
  { date: 'Nov 2015 - Dec 2016', title: 'Software Programmer', org: 'Bank of America Merrill Lynch, NJ' },
  { date: 'Dec 2016 - Jun 2021', title: 'Senior FrontEnd Developer', org: 'Synechron INC, NC' },
  { date: 'June 2021 - Present', title: 'Senior Software Engineer', org: 'Wells Fargo Bank N.A., NC' },
]

export const projects = [
  { title: 'IR Digital Marketing', image: '/assets/img/projects/ir.jpg', url: 'https://mukeshrathore.github.io/resume/projects/#ir_digital_marketing', span: 'lg:col-span-2' },
  { title: 'The General Insurance', image: '/assets/img/projects/tgi.jpg', url: 'https://mukeshrathore.github.io/resume/projects/#tgi', span: '' },
  { title: 'FeelBetter', image: '/assets/img/projects/feelBetter.jpg', url: 'https://mukeshrathore.github.io/resume/projects/#feelBetter', span: '' },
  { title: 'TapToBook', image: '/assets/img/projects/tapToBook.png', url: 'https://mukeshrathore.github.io/resume/projects/#tapToBook', span: '' },
  { title: 'NATS AERO BLOG', image: '/assets/img/projects/nats.jpg', url: 'https://mukeshrathore.github.io/resume/projects/#nats', span: 'lg:col-span-2' },
  { title: 'Mucinex', image: '/assets/img/projects/mucinex.jpg', url: 'https://mukeshrathore.github.io/resume/projects/#mucinex', span: '' },
]

export const testimonials = [
  {
    text: "Last night Mukesh Rathore went above and beyond to log in from home to help the Global Markets business distribute a client communication on market volatility ahead of the election results overnight to 300,000+ institutional client contacts. I wanted to let you know that I appreciated Mukesh's willingness to go above and beyond to help us accomplish this goal. Thank you",
    name: 'Mark Winarsky',
    org: 'Bank of America',
    avatar: '/assets/img/photos/testimonial-avatar01.jpg',
  },
  {
    text: 'Thank you very much for your support and commitment towards this PBIG PWA redesign project. Keep it up!',
    name: 'Paresh Pawar',
    org: 'Synechron Inc.',
    avatar: '/assets/img/photos/testimonial-avatar03.jpg',
  },
  {
    text: "Thank you Mukesh, I very much appreciate your dedication and partnership. It's great to get these types of emails from our LOB partners.",
    name: 'Thomas M Kerekes',
    org: 'Bank of America',
    avatar: '/assets/img/photos/testimonial-avatar04.jpg',
  },
]

export const posts = [
  {
    image: '/assets/img/photos/post-01.jpg',
    readTime: '4 minutes',
    tags: 'Cloud Foundry, AWS',
    date: '8 April, 2018',
    title: 'PCF Articulate Code',
    summary: 'Demonstrating Capabilities of Cloud Foundry',
    detail: 'A sample application built with Spring Boot that demonstrates capabilities of Cloud Foundry.',
    url: 'https://github.com/mukeshrathore/pcf-articulate-code',
  },
  {
    image: '/assets/img/photos/post-02.jpg',
    readTime: '4 minutes',
    tags: 'Node.js, Express.js',
    date: '2 June, 2018',
    title: 'Http Service Interceptor using Node',
    summary: 'Microservice based on Express.js',
    detail: 'This micro-service is used as layer between local angular presentation layer and domain services to resolve CORS issues on latest browsers',
    url: 'https://github.com/mukeshrathore/http-service-interceptor-using-node',
  },
  {
    image: '/assets/img/photos/post-03.jpg',
    readTime: '4 minutes',
    tags: 'Angular, Material',
    date: '18 May, 2018',
    title: 'Angular Material mat-table',
    summary: 'This demo showcases Paginator and Sorting on mat-table using http services',
    detail: 'The demo will include inline-editing, CRUD operations and many more feature in future Enhancement',
    url: 'https://github.com/mukeshrathore/angular-material-mat-table',
  },
]

export const navItems = [
  { label: 'Start', href: '#start' },
  { label: 'Profile', href: '#profile' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Latest Posts', href: '#posts' },
  { label: 'Contact', href: '#contact' },
]
