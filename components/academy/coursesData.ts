export interface Course {
  id: number;

  title: string;
  category: string;

  duration: string;
  mode: string;
  level: string;

  rating: number;
  students: string;
  lessons: string;
  instructor: string;

  oldPrice: string;
  price: string;

  image: string;

  description: string;

  enrollButtonText: string;
  enrollLink: string;

  detailsButtonText: string;
  detailsButtonLink: string;
}

export const courses: Course[] = [
  {
    id: 1,

    title: "Digital Marketing Mastery",

    category: "Digital Marketing",

    duration: "4 Months",
    mode: "Offline",
    level: "Beginner",

    rating: 4.9,
    students: "2,500+",
    lessons: "120 Lessons",
    instructor: "BIGBEANS DIGITAL",

    oldPrice: "₹39,999",
    price: "₹24,999",

    image: "/assets/courses/course1.jpg",

    description:
      "Master SEO, Google Ads, Meta Ads, AI marketing, content strategy, analytics and real client projects.",

    enrollButtonText: "Enroll Now",
    enrollLink: "/connect",

    detailsButtonText: "View Course",
    detailsButtonLink: "/courses/digital-marketing-mastery",
  },











  

];