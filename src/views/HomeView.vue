<script setup>
import { ref } from 'vue'

let dispaly_ambition_text = ref(false)

let dispaly_all_skills = ref(false)

let flag= "india-flag-icon.svg";
let info = {
  name: 'Brijesh Kumar Chaturvedi',
  position: 'Senior Laravel Developer',
  profile_image: 'brijesh.jpeg',
  description:
    'I have a passion for software. I enjoy creating tools that make life easier for people.',
  github: 'https://github.com/brijeshcode',
  linkdin: 'https://www.linkedin.com/in/brijesh-chaturvedi-it',
  freelancer: 'https://www.freelancer.com/u/brijeshlancer'
}

let personal_info = {
  'Date of bith': 'May 10, 1993',
  Language: 'English, Hindi', 
  Nationality: 'Indian',
  'Marital Status': 'Married',
  Address: 'P.No 29 Paldi meena jaipur (302031) Rajasthan.'
}

let contact_info = {
  mobile: '9999999999',
  email: '',
  skype: 'brijesh.it'
}

let skills = [
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
]

let experiesences = [
  {
    work_at: 'Smart working solutions (Keyloop)',
    time_from: 'Nov 2022',
    time_to: 'Oct 2024',
    location: 'Remote',
    title: 'Senior Laravel Developer',
    description: [
      'Worked as Senior Laravel developer on product (Auto Service booking software)',
      'Worked with UK team of Keyloop moters, providing my expertise in PHP, Laravel, Vue, Inertia, Tailwind, Mysql',
      'The main highlights of my work were: Upgrading there systems tech stack to latest (laravel8 to laravel 10, vue2 to vue3), given option to downlad language files from serverless hosting, and added new features.'
    ],
    technology: 'PHP, Laravel, Vue, Mysql, git, github, Homestead',
    logo: 'Keyloop-Logo.png'
  },
  {
    work_at: 'Freelancer',
    time_from: 'Jan 2017',
    time_to: 'Nov 2022',
    location: 'Remote',
    title: 'PHP fullstack Developer',
    description: [
      "Created many project with multiple clients and companies inclucing India's and over seas both",
      'I give my 110% to achieve the gole of my clients and all of my clients love my work and appriciete me with giving 5 star rating on freelancer.com. My rehire rate is 90%.',
      'please visit my profile: https://www.freelancer.com/u/brijeshlancer'
    ],
    technology:
      'PHP, Laravel, Vue, Mysql, git, github, wordpress, inetia Js, tailwind, bootstrap, cypress, pest',
    logo: 'freelancer.svg'
  },
  {
    work_at: 'Web planet soft',
    time_from: 'Oct 2016',
    time_to: 'Nov 2017',
    location: 'Jaipur',
    title: 'Jr PHP Developer',
    description: [
      'Worked on core php, wordpress, laravel, projects',
      'Created many wordpress custom theme and plugins.'
    ],
    technology: 'PHP, Laravel, Vue, Mysql, git, github, Homestead',
    logo: 'webplanet-logo.jpeg'
  }
]
let projects = [
  {
    title: 'Multi tenant accounting app',
    description:
      "It's accounting system for managing Club and resturants. its been use by 10+ companies, from morroco.",
    role: 'Full stack developer',
    technology: ['PHP', 'Laravel', 'Vue', 'Inertia', 'Tailwind', 'Mysql', 'Apache'],
    created_for: 'Freelance Client',
    url: '#',
    images: ['assets/image/project-1.png', 'assets/image/project-2.png'],
    is_featured: true
  },
  {
    title: 'Woocommerce API',
    description: 'Created Woocommerce API for schoolmegamart.com.',
    role: 'Full stack developer',
    technology: ['PHP', 'Wordpress'],
    created_for: 'Freelance Client',
    url: '#',
    is_featured: false
  },
  {
    title: 'Delhivery portal to woocommerce plugin',
    description:
      'Created a wordpress plugin to integrate with delhivery portal. It automaticly fetch delhivery status and can create delivery order from woocommerce.',
    role: 'Full stack developer',
    technology: ['PHP', 'Wordpress'],
    created_for: 'Freelance Client',
    url: '#',
    is_featured: true
  },
  {
    title: 'Auto thumbnail generator plugin',
    description:
      'Created a wordpress plugin to generate thumbnails automatically from the content of the post, it was developed for a wordpress site related to jokes. jokes will automatically print generate thumbnails. The chalanging part was Jokes were writen in Hindi.',
    role: 'Full stack developer',
    technology: ['PHP', 'Wordpress'],
    created_for: 'Freelance Client',
    url: '#',
    is_featured: true
  },
  {
    title: 'Web design Scarabay.com',
    description:
      'Created a web design for Scarabay.com. It was done with Laravel and bootstrap 4, also Integrated with google maps.',
    role: 'Full stack developer',
    technology: ['PHP', 'Laravel', 'Bootstrap 4'],
    created_for: 'Freelance Client',
    url: 'https://scarabay.com/',
    is_featured: false
  },
  {
    title: 'Multi tenant payroll system',
    description:
      'Created a payroll system which is feather distributed to multiple client, The intresting part is that it can be used for multiple client with same code, to enable this we implemented Multi tenant architecture. It was developed with Laravel, vue, inertia, tailwind and mysql.',
    role: 'Full stack developer',
    technology: ['Laravel', 'Inertia', 'Tailwind', 'Mysql', 'Apache'],
    created_for: 'Freelance Client',
    url: '#',
    is_featured: false
  },
  {
    title: 'Electric bill estimator',
    description:
      'It estimate how much electricty bill can come based on multiple factors like number of applience use with ther uses timing and there energy consumption. It was developed with Jquery and bootstrap 4.',
    role: 'Full stack developer',
    technology: ['Jquery', 'Bootstrap 4'],
    created_for: 'Self',
    url: 'https://github.com/brijeshcode/electric-bill-calculator-js',
    is_featured: false
  },
  {
    title: 'Money Exchange System',
    description:
      'It was developed to manage operation of a Money exchange office, It was developed base on the requirements of client. It work as Point of sale for the client office. It automticly calculate profit and loss, also show admin the activity of here tellers and there current balances. It give controll to admin to set a range over currency exchange rate for buy and sell. It was developed with Laravel, Vue, Inertia, Tailwind and mysql. Also we integrated sms notificatoin, whatsapp invoice sending and schedulers to audit system on regular basis. We also added Test cases for api and front end.',
    role: 'Full stack developer',
    technology: ['Laravel', 'Vue', 'Inertia', 'Tailwind', 'Cypress', 'Pest', 'Mysql'],
    created_for: 'Self',
    url: '#',
    is_featured: true
  },
  {
    title: 'Auto Service Booking system',
    description:
      'It allows customers to book their Car service online. It follow microservices architecture and multitenant architecture. It was developed with Laravel, Vue,bootstrap 4 and mysql.',
    role: 'Full stack developer',
    technology: ['Laravel', 'Vue', 'Inertia', 'Mysql'],
    created_for: 'Self',
    url: '#',
    is_featured: true
  }
]

const educations = ref([
  {
    degree: 'Bachelor of Information and technology',
    institute: 'Jaipur national university',
    year: '2011-2015',
    logo: 'jnu.png'
  },
  {
    institute: 'Kendriya Vidyalaya Sri ganganagar',
    year: '2010',
    degree: 'Class 12 th',
    logo: 'kvs.png'
  },
  {
    institute: 'Kendriya Vidyalaya Sri ganganagar',
    year: '2008',
    degree: 'Class 10 th',
    logo: 'kvs.png'
  }
])
let testimonials = [
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
]
</script>

<template>
  <main>
    <section class="py-10 md:py-16">
      <div class="container max-w-screen-xl mx-auto px-4">
        <!-- <nav class="flex items-center justify-between mb-40">
                <img src="assets/image/navbar-logo.png" alt="Logo">

                <button class="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">Get my CV</button>
            </nav> -->

        <div class="text-center">
          <div class="flex justify-center mb-4">
            <img class="rounded-full" :src="'images/'+info.profile_image" alt="Image" />
          </div>
          <div class="flex justify-center mb-8">
            <img class="w-12 h-12" :src="'images/'+flag" alt="Image" />
          </div>
          Hi I'm
          <h6 class="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
            {{ info.name }}
          </h6>

          <h1 class="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
            {{ info.position }}
          </h1>

          <p class="font-normal text-gray-600 text-md md:text-xl mb-16">{{ info.description }}</p>

          <!-- <a href="#" class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Hire me</a> -->

          <section class="social-media">
            <div class="container max-w-screen-xl mx-auto flex gap-4 justify-around w-1/12">
              <div class="github">
                <a :href="info.github" target="_blank">
                  <svg class="w-8 h-8" viewBox="0 0 496 512">
                    <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </a>
              </div>
              <div class="linkedin">
                <a :href="info.linkdin" target="_blank">
                  <svg class="w-8 h-8" viewBox="0 0 448 512">
                    <path
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    />
                  </svg>
                </a>
              </div>
              <!-- <div class="skype">
                  <a href="#brijesh.it7" target="_blank">
                  
                  <svg class="w-8 h-8" viewBox="0 0 448 512"><path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"/></svg>
                  </a>
                </div> -->
              <div class="freelance">
                <a :href="info.freelancer" target="_blank">
                  <svg class="w-8 h-8 text-black" viewBox="0 0 64 64">
                    <path
                      d="M37.6 8.203l4.36 6.113L64 8.203M14.676 55.797l11.93-11.663-7.18-7.705M35.783 8.203l-6.376 5.75 10.724.4m-29.134-6.15l2.3 4.693 12.62.786M17.753 32.54l9.324-17.393L0 13.683m18.838 19.96l8.807 9.46 9.715-9.523 3.015-17.737-11.84-.604"
                      fill="#000000"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="py-4 md:py-5 w-100 px-24 flex justify-around">
      <div class="flex gap-4 flex-wrap" v-if="dispaly_all_skills">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="rounded-full border-gray-300 hover:bg-gray-700 hover:text-white border-2 py-2 cursor-pointer px-4"
        >
          {{ skill.name }}
        </div>
        <div
          class="rounded-full bg-gray-700 text-white border-2 py-2 cursor-pointer px-4"
          @click="dispaly_all_skills = false"
        >
          Show Top Skills
        </div>
      </div>
      <div class="flex gap-4 flex-wrap" v-else>
        <div
          v-for="skill in skills.filter((skill) => skill.top_skill)"
          :key="skill.name"
          class="rounded-full border-gray-300 hover:bg-gray-700 hover:text-white border-2 py-2 cursor-pointer px-4"
        >
          {{ skill.name }}
        </div>
        <div
          class="rounded-full bg-gray-700 text-white border-2 py-2 cursor-pointer px-4"
          @click="dispaly_all_skills = true"
        >
          Show All Skills
        </div>
      </div>
    </section>

    <section class="py-10 md:py-16">
      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-gray-50 px-8 py-10 rounded-md">
            <div class="w-20 p-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"
                />
              </svg>
            </div>

            <h4 class="font-medium text-gray-700 text-lg mb-4">High experience</h4>

            <p class="font-normal text-gray-500 text-md">
              Hi there, I am a seasoned Laravel developer with 8 years of experience as a PHP
              developer. <br />I specialize as a full-stack developer and have worked in various
              capacities, including freelancing, full-time, and contract roles.
            </p>
          </div>

          <div class="bg-gray-50 px-8 py-10 rounded-md">
            <div class="w-20 p-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"
                />
              </svg>
            </div>

            <h4 class="font-medium text-gray-700 text-lg mb-4">Highly Adeptive</h4>

            <p class="font-normal text-gray-500 text-md">
              Quick to pick up new skills and adapt to change. Thrives in fast-paced environments,
              easily handling shifts and embracing new challenges to keep things moving forward and
              get great results.
            </p>
          </div>

          <div class="bg-gray-50 px-8 py-10 rounded-md">
            <div class="w-20 p-6 flex justify-center bg-gray-100 rounded-md mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path
                  d="M96 64c0-17.7 14.3-32 32-32l320 0 64 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L96 64zM480 224l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128zM32 416l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                />
              </svg>
            </div>

            <h4 class="font-medium text-gray-700 text-lg mb-4">Ambition and values</h4>

            <p class="font-normal text-gray-500 text-md">
              I want to work with an organization which gives me an opportunity to utilize my
              skills, knowledge and enhances it in a right way, which will help me in achieving mine
              as well as an organization's goals.
              <span v-if="dispaly_ambition_text"
                >I want to make valuable contribution in creating wonderful application which plays
                a meaningful role in people's lives.</span
              >
              <span
                class="text-indigo-600 cursor-pointer"
                @click="dispaly_ambition_text = !dispaly_ambition_text"
                >{{ dispaly_ambition_text ? 'Less' : 'More' }}.</span
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 md:py-16" id="portfolio-section">
      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="flex flex-col lg:flex-row justify-between">
          <div class="mb-10 lg:mb-0">
            <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Portfolio</h1>

            <p class="font-normal text-gray-500 text-xs md:text-base">
              I have brought here my biggest and favorite works <br />
              as a professional.
            </p>
          </div>

          <div class="space-y-24">
            <template
              v-for="(project, index) in projects.filter((project) => project.is_featured)"
              :key="index"
            >
              <div class="flex space-x-6">
                <h1 class="font-normal text-gray-700 text-3xl md:text-4xl">0{{ index + 1 }}</h1>

                <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>

                <div>
                  <h1 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    {{ project.title }}
                  </h1>

                  <p class="font-normal text-gray-500 text-sm md:text-base">
                    {{ project.description.substring(0, 80) }}...
                  </p>
                  <a
                    v-if="project.url != '#'"
                    href="{{ project.url }}"
                    class="font-normal text-gray-500 text-sm md:text-base"
                    >Link</a
                  >
                  <div class="flex flex-wrap gap-2 mt-2">
                    <div
                      class="rounded-full border-gray-300 hover:bg-gray-700 hover:text-white border-2 py-1 cursor-pointer px-3"
                      v-for="tech in project.technology"
                      :key="tech"
                    >
                      <span class="font-normal">{{ tech }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 md:py-16" id="education-section">
      <div class="container max-w-screen-xl mx-auto px-4">
        <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Education</h1>

        <p class="font-normal text-gray-500 text-xs md:text-base mb-20">
          Below is a summary of the places I studied
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            class="bg-gray-50 px-4 py-5 shadow rounded-md flex gap-2"
            v-for="(education, index) in educations"
            :key="'education_' + index"
          >
            <div class="text-center">
              <img :src="'images/'+education.logo" class="w-24 h-24" :alt="education.institute" />
              <h4 class="font-medium text-gray-700 text-lg mt-4">{{ education.year }}</h4>
            </div>
            <div class="text-center">
              <h1 class="font-normal text-gray-700 text-lg md:text-xl mb-4">
                {{ education.institute }}
              </h1>
              <p class="font-normal text-gray-500 text-md mb-4">{{ education.degree }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 md:py-16" id="Work-experience-section">
      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="flex flex-col lg:flex-row justify-between">
          <div class="mb-10 lg:mb-0">
            <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Work exprience</h1>

            <p class="font-normal text-gray-500 text-xs md:text-base">
              Below is a summary of the places I Worked.
            </p>
          </div>

          <div class="space-y-24">
            <template v-for="(exprience, index) in experiesences" :key="'exprience_' + index">
              <div class="flex-none sm:flex space-x-6 ">
                <div class="flex justify-around ">
                  <img :src="'images/'+exprience.logo" class="w-36 h-24" :alt="exprience.work_at" />
                </div>
                <div>
                  <h1 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                    {{ exprience.work_at }} <span class="block text-normal text-lg">{{ exprience.time_from }} - {{ exprience.time_to }}</span>
                  </h1>

                  <p class="text-gray-500 text-xl font-bold">
                    {{ exprience.title }}
                    <span class="font-normal">({{ exprience.location }})</span>
                  </p>
                  <ul class="py-3 md:w-96 list-disc list-inside ">
                    <li
                      class="font-normal text-gray-500 text-sm md:text-base"
                      v-for="desc in exprience.description"
                      :key="desc"
                    >
                      {{ desc }}
                    </li>
                  </ul>
                   
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 md:py-16">
      <div class="container max-w-screen-xl mx-auto px-4">
        <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Testimonial</h1>

        <p class="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">
          Below is some review and recommendation by my clients and coleagues.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <template v-for="testimonial in testimonials" :key="'testimonial_' + testimonial.name">
            <div
              v-if="testimonial.show"
              class="bg-gray-50 px-8 py-10 rounded-md shadow hover:shadow-lg"
            >
              <p class="font-normal text-gray-500 text-md mb-4">{{ testimonial.message }}</p>

              <h6 class="font-semibold text-gray-500 text-md capitalize">
                {{ testimonial.name }}
                <span class="font-normal text-gray-400 text-sm"
                  >- {{ testimonial.position }} at
                  <span class="font-medium text-gray-400">{{ testimonial.company }} </span>
                </span>
              </h6>
            </div>
          </template>
        </div>
      </div>
    </section>

    <section class="footer">
      <div class="m-auto sm:w-8/12 my-4 text-center">
        <p class="leading-5 mb-4">
          If you find my profile intresting please fill free to connect me via
          <a
            class="text-white px-1 text-lg bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer"
            :href="info.linkdin"
            target="_blank"
            >Linkedin</a
          >,
          <span
            class="text-white px-1 text-lg bg-sky-500 hover:bg-sky-600 rounded-md cursor-pointer"
            >Skype: brijesh.it</span
          >
          or
          <a
            :href="info.freelancer"
            target="_blank"
            class="text-white px-1 text-lg bg-sky-500 hover:bg-sky-600 rounded-md cursor-pointer"
            >Freelance</a
          >.
        </p>
        <p>Thank you for taking time to read my profile. <span>&#128522;</span></p>
      </div>
    </section>
  </main>
</template>
