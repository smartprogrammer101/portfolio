import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getProjectsData() {
  const data = [
    {
      name: 'Ezone',
      description: 'Ezone is a simple ecommerce website inspired by the amazon e-commerce website. Users can search for products, view products information, add products to cart, add products to whish list, and many more.',
      slug: 'e-commerce',
      tools: [
        'Django'
      ],
      thumbnailUrl: '/ezone-screenshots/cart-page.jpg',
      screenshotUrls: [
        '/ezone-screenshots/detail-page.jpg',
        '/ezone-screenshots/search-page-one.jpg',
        '/ezone-screenshots/homepage-desktop.jpg',
        '/ezone-screenshots/homepage-mobile.jpg',
        '/ezone-screenshots/search-page-two.jpg',
        '/ezone-screenshots/cart-page.jpg',
        '/ezone-screenshots/authentication-signup.jpg',
        '/ezone-screenshots/authentication-login-email.jpg',
        '/ezone-screenshots/authentication-login-password.jpg',
      ],
      prevProject: null,
      nextProject: {
        name: 'School Management System',
        slug: 'school-management-system',
      }
    },
    {
      name: 'School Management System',
      // description: 'This is a system for african secondary schools to manage their academic activities seamlessly.  Impedit adipisci saepe eaque. Tenetur, sint inventore voluptates iure qui perferendis sequi libero cupiditate reprehenderit quasi quidem incidunt similique ipsam odio quam .',
      description: 'This is a system for african secondary schools to manage their academic activities seamlessly. Admin can keep track of all students, teachers and parents/guardian records. The student feature is carefully implemented to enable more students to see learning as a thing of fun rather than a tedious task, as they are forced to compete with themselves and beat their previous and recent performances. The system is packed with many other features including real time notifications on various events and parents keeping track of their students performances, attendance, etc.',
      slug: 'school-management-system',
      tools: [
        'React',
        'Django'
      ],
      thumbnailUrl: '/sms-project-screenshots/student-classroom.png',
      screenshotUrls: [
        '/sms-project-screenshots/student-registration-page.png',
        '/sms-project-screenshots/assign-score-page.png',
        '/sms-project-screenshots/student-dashoard.jpg',
        '/sms-project-screenshots/classroom-list-view.png',
        '/sms-project-screenshots/events-dark-mode.png',
        '/sms-project-screenshots/events-light-mode.png',
        '/sms-project-screenshots/student-classroom.png',
      ],
      nextProject: {
        name: 'SmartMoney money tracker',
        slug: 'smart-money'
      },
      prevProject: {
        name: 'School Management System 2',
        slug: 'e-commerce'
      },
    },
    {
      name: 'SmartMoney',
      // description: 'This is a system for african secondary schools to manage their academic activities seamlessly.  Impedit adipisci saepe eaque. Tenetur, sint inventore voluptates iure qui perferendis sequi libero cupiditate reprehenderit quasi quidem incidunt similique ipsam odio quam .',
      description: 'In life we all agree that money is an important commodity. SmartMoney helps you keep track of your money, both income and expenses. You get to see the history of all your transactions daily, monthly, yearly and even by a range of dates (e.g from 23rd of November 2012 - 5th of January 2024).',
      slug: 'smart-money',
      tools: [
        'Django'
      ],
      thumbnailUrl: '/smart-money-screenshots/smartmoney-thumnail.jpg',
      screenshotUrls: [
        '/smart-money-screenshots/smartmoney-login-page.jpg',
        '/smart-money-screenshots/smartmoney-registration-page.jpg',
        '/smart-money-screenshots/smartmoney-expenses-summary-bar-chart-page.jpg',
        '/smart-money-screenshots/smartmoney-expenses-summary-pie-chart-page.jpg',
        '/smart-money-screenshots/smartmoney-expenses-page.jpg',
        '/smart-money-screenshots/smartmoney-expenses-page-two.jpg',
        '/smart-money-screenshots/smartmoney-income-page.jpg',
        '/smart-money-screenshots/smartmoney-income-page-two.jpg',
      ],
      nextProject: null,
      prevProject: {
        name: 'School Management System 2',
        slug: 'e-commerce'
      },
    },
  ]
  return data
}