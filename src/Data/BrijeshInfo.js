import { ref } from "vue";

export function useBrijeshInfo() {

const personalInfo = {
    name: 'Brijesh Kumar Chaturvedi',
    position: 'Senior Laravel Developer',
    profile_image: 'brijesh.jpeg',
    description:
      'I have a passion for software. I enjoy creating tools that make life easier for people.',
    github: 'https://github.com/brijeshcode',
    linkdin: 'https://www.linkedin.com/in/brijesh-it',
    freelancer: 'https://www.freelancer.com/u/brijeshlancer',

    dob: 'May 10, 1993',
    Language: 'English, Hindi', 
    Nationality: 'Indian',
    'marital_status': 'Married',
    full_address: 'P.No 29 Paldi meena jaipur (302031) Rajasthan.',
    location: 'jaipur, Rajasthan, India',
    languages: [
        { name: 'English', level: 'Professional', rating: 4 },
        { name: 'Hindi', level: 'Native', rating: 5 }
    ]

};
const strengths = [
    {
        name: 'Analytical Skills',
        description: 'Exceptional analytical and problem-solving skills.',
        icon : 'magic-wand'
    },
    {
        name: 'Personal Traits',
        description: 'Disciplined and professional attitude.',
        icon: 'half-star'
    },
    {
        name: 'Communication',
        description: 'Excellent verbal and written communication skills.',
        icon: 'chat'
    },
    {
        name: 'Team Collaboration',
        description: 'Collaborative team player with excellent professional etiquette.',
        icon : 'tick'
    }
]
const flag= "india-flag-icon.svg";
  

const skills = [
    { name: 'Laravel', years: 6, top_skill: true },
    { name: 'Vue', years: 4, top_skill: true },
    { name: 'Mysql', years: 8, top_skill: true },
    { name: 'Wordpress', years: 7, top_skill: true },
    { name: 'HTML', years: 8, top_skill: false },
    { name: 'CSS', years: 8, top_skill: false },
    { name: 'PHP', years: 7, top_skill: false },
    { name: 'JS', years: 8, top_skill: false },
    { name: 'Tailwind', years: 2, top_skill: true },
    { name: 'Bootstrap', years: 6, top_skill: false },
    { name: 'FontAwesome', years: 6, top_skill: false },
  
    { name: 'Cypress', years: 6, top_skill: true },
    { name: 'Pest', years: 6, top_skill: true },
  
    { name: 'Inertia Js', years: 6, top_skill: false },
    { name: 'REST API', years: 6, top_skill: false },
    { name: 'Git', years: 4, top_skill: false },
    { name: 'Github', years: 4, top_skill: false },
    { name: 'Docker', years: 2, top_skill: false },
    { name: 'Digitalocean', years: 2, top_skill: false },
    { name: 'API Devlopment', years: 2, top_skill: false }
  ];

const contact_info = {
    mobile: '9413377890',
    email: 'brijeshchaturvedi.it@gmail.com',
    skype: 'brijesh.it'
}

const objectives = {
    'first' : 'I want to work with an esteemed organization which gives me an opportunity to utilize my skills, knowledge and enhances it in a right way, which will help me in achieving mine as well as an organization\'s  goals. I want  to make valuable contribution in creating wonderful application which plays a meaningful role in people\'s lives.',

    'second' : 'To contribute to an esteemed organization by utilizing my skills and expertise in PHP development, while continuously enhancing my knowledge. I aim to develop impactful applications that bring value to users and help achieve organizational goals',

    'third': 'Dedicated and skilled PHP developer with extensive full-stack experience, particularly in Laravel and Vue.js. I have successfully enhanced applications, contributed to various freelance projects, and developed user-centric solutions, ensuring client satisfaction. My passion for continuous learning and problem-solving drives my ability to deliver impactful results.',
    'fourth' : 'Experienced PHP developer with strong full-stack skills in Laravel and Vue.js. Proven success in enhancing applications, delivering freelance projects, and creating user-centric solutions. Passionate about continuous learning and problem-solving to achieve impactful results.',
    
    'third_fourth' : 'Dedicated and skilled PHP developer with extensive full-stack experience, particularly in Laravel and Vue.js. I have successfully enhanced applications, contributed to various freelance projects, and developed user-centric solutions, ensuring client satisfaction. My passion for continuous learning and problem-solving drives my ability to deliver impactful results. Experienced PHP developer with strong full-stack skills in Laravel and Vue.js. Proven success in enhancing applications, delivering freelance projects, and creating user-centric solutions. Passionate about continuous learning and problem-solving to achieve impactful results.',

    'fifth': 'Experienced PHP Laravel Developer with 7+ years of expertise in building scalable web applications and RESTful APIs. Proven track record of working remotely with UK-based companies like Keyloop and Stickee. Skilled in database optimization, backend development, and collaborating with cross-functional teams. Passionate about delivering high-quality solutions and adapting to new technologies.'

}

const experiences = [
    {
      work_at: 'Smart Working Solutions (Stickee.co.uk)',
      company_description: 'Stickee is a client of SWS, focusing on data analysis and statistics.',
      time_from: 'Oct 2024',
      time_to: 'Jan 2025',
      location: 'Remote (UK)',
      title: 'Senior Data Acquisition Engineer',
      descriptions: [
        'Worked on the Broadband Plan team to scrape and gather data from various websites.',
        'Successfully scraped data from five different websites in a short time, yielding almost 8000 deals per day.'
      ],
    
      technology: 'PHP, Laravel, Vue, MySQL, Git, GitHub, Homestead',
      logo: 'Keyloop-Logo.png'
    },
    {
      work_at: 'Smart Working Solutions (Keyloop)',
      company_description: 'Keyloop is a client of SWS, focusing on the automotive industry.',
      time_from: 'Nov 2022',
      time_to: 'Oct 2024',
      location: 'Remote (UK)',
      title: 'Senior Laravel Developer',
      descriptions: [
        'Collaborated with a UK-based team to enhance auto service booking software as a full-stack developer.',
        'Upgraded the application stack from Laravel 8 to Laravel 10 and Vue.js 2 to Vue.js 3.',
        'Implemented features to enhance customer experience and ensure scalability.',
        'Reduced the average booking time from five minutes to two minutes, helping to increase the booking rate by 30%',
        'Decreased partial bookings from 500 to 100 per month.',
      ],
      technology: 'PHP, Laravel, Vue, MySQL, Git, GitHub, Homestead',
      logo: 'Keyloop-Logo.png'
    },
    {
      work_at: 'Freelancer',
      company_description: '',
      time_from: 'Jan 2016',
      time_to: 'Nov 2022',
      location: 'Remote (multiple countries)',
      title: 'PHP Full Stack Developer',
      descriptions: [
          'Successfully completed multiple projects for diverse clients and organizations.',
          'Delivered high-quality solutions, ensuring client satisfaction and meeting business goals.',
          'Projects included Laravel and Vue.js applications, plugin development, and e-commerce integrations (see the Projects section for details).',
          'Aimed to solve complex problems, delivered user-centric solutions, minimized costs, and increased efficiency.'
      ],
    
    
      technology:
        'PHP, Laravel, Vue, MySQL, Git, GitHub, WordPress, Inertia.js, Tailwind, Bootstrap, Cypress, Pest',
      logo: 'freelancer.svg'
    },
    {
      work_at: 'Web Planet Soft',
      company_description: '',
      time_from: 'Oct 2015',
      time_to: 'Nov 2016',
      location: 'Jaipur',
      title: 'Junior PHP Developer',
      descriptions: [
        'Developed and customized WordPress plugins and themes.',
        'Developed Core PHP and Laravel projects.',
        'Awarded "Star Developer" for outstanding contributions.'
      ],
      technology: 'PHP, Laravel, Vue, MySQL, Git, GitHub, Homestead',
      logo: 'webplanet-logo.jpeg'
    }
  ];
  

const projects = [
    {
      title: 'Multi-Tenant Accounting App',
      description:
        'Developed an accounting system designed for managing clubs and restaurants, successfully adopted by 10+ companies in Morocco.',
      highlights: [
        'Designed and implemented a multi-tenant (Multi-Database) architecture.', 
        'It decreased Warehouse Management (WMS) costs by 50%',
        'It cut auditing and expense tracking time by 70%.',
        'Integrated automatic backup and restore functionality to ensure data security and integrity.',
        'Built with Laravel and Vue.js to deliver a user-friendly and efficient accounting management interface.',
      ],
      role: 'Prodcut Owner',
      technology: ['PHP', 'Laravel', 'Vue', 'Inertia', 'Tailwind', 'MySQL', 'Apache'],
      created_for: 'Freelance (Morocco - Lebanon)',
      url: '#',
      images: ['assets/image/project-1.png', 'assets/image/project-2.png'],
      is_featured: true,
      time: 'Jan 2018 - Feb 2020'
    },
    {
      title: 'WooCommerce API',
      description: 'Created WooCommerce API for schoolmegamart.com.',
      highlights: [
        'Integrated WooCommerce API for schoolmegamart.com to manage products and orders.',
        'Implemented a custom API to sync products and orders with the client’s ERP system.',
        'Developed a custom plugin to manage the API and sync data.',
      ],
      role: 'Senio WordPress Developer',
      technology: ['PHP', 'WordPress'],
      created_for: 'Freelance (India)',
      url: '#',
      is_featured: false,
      time: 'Jan 2020 - Mar 2020'
    },
    {
      title: 'Delhivery Portal to WooCommerce Plugin',
      description:
        'Developed a WordPress plugin to integrate WooCommerce with the Delhivery portal. The plugin automatically fetches shipment statuses from Delhivery and allows the creation of delivery orders directly from WooCommerce.',
      highlights: [
        'It\'s a custom plugin to seamlessly integrate WooCommerce with the Delhivery portal.',
        'Reduced manual effort of creating delivery orders and tracking by 70%.',
        'Enables the creation of delivery orders directly from WooCommerce.',
        'Automatically fetches shipment statuses from Delhivery.',
      ],
      role: 'Senior PHP Developer',
      technology: ['PHP', 'WordPress'],
      created_for: 'Freelance (India)',
      url: '#',
      is_featured: true,
      time: 'Feb 2020 - Mar 2020'
    },
    {
      title: 'Auto Thumbnail Generator Plugin',
      description:
        'Developed a WordPress plugin to automatically generate thumbnails based on post content. The plugin was specifically designed for a jokes-related WordPress site, with the added challenge of handling content written in Hindi.',
      highlights: [
        'Created a custom plugin to generate thumbnails automatically from post content.',
        'Utilized the HTML5 Canvas API to dynamically create thumbnails.',
        'It decreased average post creation time by 50%.',
      ],
      role: 'Senio WordPress Developer',
      technology: ['PHP', 'WordPress', 'Canvas', 'JavaScript'],
      created_for: 'Freelance (India)',
      url: '#',
      is_featured: false,
      time: 'Jan 2017 - Feb 2017'
    },
    {
      title: 'Web Design for Scarabay.com',
      description:
        'Created a web design for Scarabay.com using Laravel and Bootstrap 4. Integrated it with Google Maps for enhanced functionality.',
      highlights: [
        'Developed a web design for Scarabay.com using Laravel and Bootstrap 4.',
        'Integrated it with Google Maps for enhanced functionality.'
      ],
      role: 'Full Stack Developer',
      technology: ['PHP', 'Laravel', 'Bootstrap 4'],
      created_for: 'Freelance (Morocco)',
      url: 'https://scarabay.com/',
      is_featured: false,
      time: 'Apr 2019 - Apr 2017'

    },
    {
      title: 'Multi-Tenant Payroll System',
      description:
        'Created a payroll system distributed to multiple clients. The interesting part is that it can be used by multiple clients with the same codebase due to the implementation of a Multi-Tenant architecture. It was developed using Laravel, Vue, Inertia, Tailwind, and MySQL.',
      highlights: [
        'Implemented a multi-tenant architecture.',
        'Payroll system distributed to multiple clients.'
      ],
      role: 'Project Technical Head',
      technology: ['Laravel', 'Inertia', 'Tailwind', 'MySQL', 'Apache'],
      created_for: 'Freelance (India)',
      url: '#',
      is_featured: false,
      time: 'Oct 2021 - Apr 2022'
    },
    {
      title: 'Electric Bill Estimator',
      description:
        'Estimated electricity bills based on multiple factors such as the number of appliances used, their usage timing, and energy consumption. Developed using jQuery and Bootstrap 4.',
      highlights: [
        'Estimated electricity bills based on multiple factors.',
        'It can give an idea of electricity consumption and cost.',
      ],
      role: 'Product Owner',
      technology: ['jQuery', 'Bootstrap 4'],
      created_for: 'Self (India)',
      url: 'https://github.com/brijeshcode/electric-bill-calculator-js',
      is_featured: false,
      time: 'Jun 2022 - Jun 2022'
    },
    {
      title: 'Money Exchange System',
      description:
        'Developed to manage operations for a money exchange office. Built based on client requirements, it functions as a Point of Sale system for the office. Automatically calculates profit and loss, shows the admin teller activities and balances, and allows the admin to set a range for currency exchange rates (buy/sell). It integrates SMS notifications, WhatsApp invoice sending, and schedulers for regular audits. Test cases were added for APIs and the front end. Built with Laravel, Vue, Inertia, Tailwind, and MySQL.',
      highlights: [
        'Built a secure money exchange system using Laravel and Vue.js.',
        'System reduces 80% of manual audit work.',
        'Automated profit and loss calculations and activity tracking.',
        'Integrated SMS notifications, WhatsApp invoices, and audit schedulers.'
      ],
      role: 'Product Owner',
      technology: ['Laravel', 'Vue', 'Inertia', 'Tailwind', 'Cypress', 'Pest', 'MySQL'],
      created_for: 'Freelancer (Lebanon)',
      url: '#',
      is_featured: true,
      time: 'Jul 2022 - Sep 2022'
    },
    {
      title: 'Auto Service Booking System',
      description:
        'Allows customers to book car services online. It follows Microservices architecture and Multi-Tenant architecture. Developed using Laravel, Vue, Bootstrap 4, and MySQL.',
      highlights: [
          'Enhanced an existing Auto Service Booking System.',
          'We improve average booking time from 5 minutes to 2 minutes.',
          'Optimized Microservices and Multi-Tenant (Single-Database) architecture for better scalability.',
          'Reduced technical debt and improved code quality.',
          'Refactored the application to align with best coding practices.'
      ],      
      role: 'Senior Laravel Developer',
      technology: ['Laravel', 'Vue', 'Inertia', 'MySQL'],
      created_for: 'Keyloop (Uk)',
      url: '#',
      is_featured: true,
      time: 'Nov 2022 - Oct 2024'
    }
  ];
  
  
const educations = [
    {
        degree: 'Bachelor of Information Technology',
        institute: 'Jaipur national university',
        year: '2011-2015',
        logo: 'jnu.png',
        location: 'Jaipur, Rajasthan, India'
    },
    {
        institute: 'Kendriya Vidyalaya Sri ganganagar',
        year: '2010',
        degree: 'Class 12th',
        logo: 'kvs.png',
        location: 'Sri ganganagar, Rajasthan, India'
    },
    {
        institute: 'Kendriya Vidyalaya Sri ganganagar',
        year: '2008',
        degree: 'Class 10th',
        logo: 'kvs.png',
        location: 'Sri ganganagar, Rajasthan, India'
    }
];

const testimonials = [
    {
        name: 'Somen Chakraborty',
        message:
        'I had the pleasure of working with Brijesh at Smart Working and was consistently impressed by his exceptional skills and professionalism. He excelled in Laravel & has great project management skills, he is always keen on delivering results that exceeded expectations. Brijesh is a proactive and reliable team member with a great attitude, making him a valuable asset to any team. I highly recommend him for any organization.',
        company: 'Smart Working Solutions',
        country: 'India',
        // position: 'Operations Lead | Community Management | Client Relationship Specialist | Hospitality Alum'
        position: 'Operations Lead',
        show: true
    },
    {
        name: 'David',
        message:
        'This guy is very professional and helpful He is a problem solver, very skilled and he never sleeps until "job is done as required" He made a complete professional accounting system with perfection I highly recommend him... 5 STARS',
        company: 'Freelancer',
        country: 'Morocco',
        position: 'client',
        show: true
    },
    {
        name: 'Mark',
        message:
        'Overall, Brijesh is a highly skilled and reliable PHP developer who consistently delivers excellent results on time. The technical expertise, dedication, and collaborative spirit make him an asset to any team. I highly recommend Brijesh for any future projects or roles that require a proficient and dependable developer.',
        company: 'Freelancer',
        country: 'Lebanon',
        position: 'client',
        show: true
    },
    {
        name: 'Kailash shirsat',
        message:
        'I was surprise that my plugin is finally created which was never found a solution from the original plugin author also. I like the easily understating nature of this freelancer who suggest improvements also in our project. I assure who will hire first time him will always be satisfied with his work. I feel myself lucky as i found this freelancer. Thanks Brijesh.',
        company: 'Freelancer',
        country: 'India',
        position: 'client',
        show: true
    },
    {
        name: 'Nicholas',
        message:
        'Brijesh is essentially the top coder I use for any PSD to HTML work required. Clients often want WORDPRESS platforms due to its popularity but he will code custom designs from scratch and remove any fluff from the bloated CMS. Often clever solutions to some elements are required, he has a very good grasp on web coding. Brijesh is a pleasure to work with.',
        company: 'Freelancer',
        country: 'India',
        position: 'client',
        show: true
    },
    {
        name: 'Vivek K',
        message:
        'Brijesh is an excellent developer, follows Instructions and provides fast solutions, Ready to hire him for next project.Keep up the good work.',
        company: 'Freelancer',
        country: 'India',
        position: 'client',
        show: true
    }
];

const resumeSkills = {
    programmnig: [

        {
            title: 'Basic',
            skills: [
                { name: 'Core PHP', from: 2015 , is_top_skill:true,  link: 'https://www.php.net/', description: 'PHP (Hypertext Preprocesso) is a popular general-purpose scripting language that is especially suited to web development.'},
                { name: 'MySQL', from: 2014, is_top_skill:true, link: 'https://www.mysql.com/', description: 'MySQL [My Structured Query Language] is an open-source relational database management system.' },
                { name: 'HTML', from: 2013, is_top_skill:true, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', description: 'HTML (HyperText Markup Language) is the most basic building block of the Web.' },
                { name: 'CSS', from: 2013, is_top_skill:true, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', description: 'CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML.' },
                { name: 'JavaScript', from: 2014, is_top_skill:true, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', description: 'JavaScript is a programming language that enables you to interact with web pages.' },
            ]
        },
        {
            title: 'Framework',
            skills: [
                {
                    name: 'Laravel', from: 2016, is_top_skill:true, link: 'https://laravel.com/', description: 'Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling.'
                },
                {
                    name: 'Codeigniter', from: 2017, is_top_skill:true, link: 'https://codeigniter.com/', description: 'CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications.'
                },
            ]
        },
        {
            title: 'Frontend',
            skills: [
                {
                    name: 'Vue', from: 2020, is_top_skill:true, link: 'https://vuejs.org/', description: 'Vue.js is a progressive framework for building user interfaces. It is designed from the ground up to be incrementally adoptable.'
                },
                {
                    name: 'Bootstrap', from: 2016, is_top_skill:true, link: 'https://getbootstrap.com/', description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.'
                },
                {
                    name: 'Tailwind', from: 2021, is_top_skill:true, link: 'https://tailwindcss.com/', description: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.'
                },
                {
                    name: 'Inertia Js', from: 2021, is_top_skill:true, link: 'https://inertiajs.com/', description: 'Inertia.js lets you quickly build modern single-page React, Vue and Svelte apps using classic server-side routing and controllers.'
                }
                
            ],
        },
        {
            title: 'CMS',
            skills: [
                {
                    name: 'WordPress', from: 2015, is_top_skill:true, link: 'https://wordpress.org/', description: 'WordPress is an open-source content management system written in PHP and paired with a MySQL or MariaDB database.'
                }
            ]
        },
        {
            title: 'Development Patterns',
            skills: [
                {
                    name: 'TDD', from: 2020, is_top_skill:true, link: 'https://en.wikipedia.org/wiki/Test-driven_development', description: 'Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle.'
                },
                {
                    name: 'OOP', from: 2014, is_top_skill:true, link: 'https://en.wikipedia.org/wiki/Object-oriented_programming', description: 'Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data, in the form of fields, and code, in the form of procedures.'
                },
                {
                    name: 'SOLID', from: 2015, is_top_skill:true, link: 'https://en.wikipedia.org/wiki/SOLID', description: 'In object-oriented computer programming, SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible, and maintainable.'
                }
            ]
        }

    ],
    tools_and_technologies: [
        {
            title: 'Version Control',
            skills: [
                {
                    name: 'Git', from: 2015, is_top_skill:true, link: 'https://git-scm.com/', description: 'Git is a distributed version-control system for tracking changes in source code during software development.'
                },
                {
                    name: 'Github', from: 2015, is_top_skill:true, link: 'https://github.com', description: 'GitHub is a web-based platform used for version control. It is also a social network where programmers can collaborate and comment on each other’s code.'
                }
            ]
        },
        {
            title: 'APIs',
            skills: [
                {
                    name: 'REST API', from: 2015, is_top_skill:true, link: 'https://restfulapi.net/', description: 'REST (Representational State Transfer) is an architectural style that defines a set of constraints to be used for creating web services.'
                }
            ]
        },
        {
            title: 'Testing',
            skills: [
                {
                    name: 'Cypress', from: 2015, is_top_skill:true, link: 'https://www.cypress.io/', description: 'Cypress is a front end automated testing application created for the modern web.'
                },
                {
                    name: 'Pest', from: 2015, is_top_skill:true, link: 'https://pestphp.com/', description: 'Pest is a Testing Framework with a focus on simplicity.'
                }
            ]
        },
        {
            title: 'DevOps',
            skills: [
                {
                    name: 'Docker', from: 2015, is_top_skill:true, link: 'https://www.docker.com/', description: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.'
                },
                {
                    name: 'Digitalocean', from: 2015, is_top_skill:true, link: 'https://www.digitalocean.com/', description: 'DigitalOcean, Inc. is an American cloud infrastructure provider headquartered in New York City with data centers worldwide.'
                }
            ]
        }
        
    ]
}
const dispaly_ambition_text = ref(false)

const dispaly_all_skills = ref(false)

return {
    skills,
    contact_info,
    objectives,
    experiences,
    projects,
    educations,
    testimonials,
    personalInfo,
    flag,
    strengths,
    resumeSkills,
    dispaly_ambition_text,
    dispaly_all_skills
  };
}
