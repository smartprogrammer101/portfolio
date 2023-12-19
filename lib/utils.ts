import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getProjectsData() {
  const data = [
    {
      name: 'School Management System 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci saepe eaque. Tenetur, sint inventore voluptates iure qui perferendis sequi libero cupiditate reprehenderit quasi quidem incidunt similique ipsam odio quam.',
      slug: 'e-commerce',
      tools: [
        'React',
        'Django'
      ],
      thumbnailUrl: '/ecommerce-project-screenshot.png',
      screenshotUrls: [
        '/project-snapshot-1.jpg',
        '/project-snapshot-2.jpg',
        '/project-snapshot-3.jpg',
        '/project-snapshot-4.jpg',
        '/project-snapshot-5.jpg',
        '/project-snapshot-6.jpg',
      ],
      prevProject: null,
      nextProject: {
        name: 'School Management System',
        slug: 'school-management-system',
      }
    },
    {
      name: 'School Management System',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci saepe eaque. Tenetur, sint inventore voluptates iure qui perferendis sequi libero cupiditate reprehenderit quasi quidem incidunt similique ipsam odio quam.',
      slug: 'school-management-system',
      tools: [
        'React',
        'Django'
      ],
      thumbnailUrl: '/sms-project-screenshots/sms-project-screenshot.png',
      screenshotUrls: [
        '/sms-project-screenshots/student-registration-page.png',
        '/sms-project-screenshots/assign-score-page.png',
        '/sms-project-screenshots/classroom-grid-view.png',
        '/sms-project-screenshots/classroom-list-view.png',
        '/sms-project-screenshots/events-dark-mode.png',
        '/sms-project-screenshots/events-light-mode.png',
        '/sms-project-screenshots/student-classroom.png',
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