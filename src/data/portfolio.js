import { Code2, Database, Globe, Server, Layers, Cpu } from 'lucide-react';

export const portfolioData = {
  personal: {
    name: "Vijay Prajapati",
    title: "Full Stack Developer",
    subtitle: "Specializing in Laravel, Drupal & Modern Web Technologies",
    description: "I build robust, scalable, and secure backend systems while crafting intuitive frontend experiences. With deep expertise in the PHP ecosystem, I turn complex requirements into elegant solutions.",
    email: "vijayp8229@gmail.com",
    github: "https://github.com/vijju8289",
    linkedin: "https://www.linkedin.com/in/vijayp1998"
  },
  skills: [
    { name: "Laravel", icon: Server, level: 95 },
    { name: "Drupal", icon: Layers, level: 90 },
    { name: "PHP", icon: Code2, level: 95 },

    { name: "MySQL", icon: Database, level: 90 },
    { name: "APIs", icon: Cpu, level: 92 }
  ],
  projects: [
    {
      id: 1,
      title: "Aerial Estimation",
      category: "Laravel",
      description: "A specialized SaaS platform for roof measurements. Built the core Laravel dashboard and developed robust REST APIs to power the mobile application (APK) for field adjusters.",
      tags: ["Laravel", "REST API", "Google Maps API", "Mobile Backend"],
      link: "https://www.aerialestimation.com/",
      github: "#"
    },
    {
      id: 2,
      title: "Roof Measuring",
      category: "Laravel",
      description: "A comprehensive roof reporting tool similar to Aerial Estimation but focused on residential contractors. Features automated report generation and direct integration with satellite imagery providers.",
      tags: ["Laravel", "Satellite Imagery", "PDF Generation", "CRM"],
      link: "https://roofmeasuring.com/",
      github: "#"
    },
    {
      id: 3,
      title: "Drupalify",
      category: "Drupal",
      description: "A premium agency website for a top-rated Drupal development firm. Features custom theme development, seamless CRM integrations, and a high-performance architecture built on Drupal 10.",
      tags: ["Drupal 10", "Twig", "Custom Theme", "SEO"],
      link: "https://drupalify.com/",
      github: "#"
    },
    {
      id: 4,
      title: "UAGC (University of Arizona Global Campus)",
      category: "Drupal",
      description: "A massive higher education portal serving thousands of students. Contributed to the migration to Drupal 10, implemented complex academic workflow modules, and optimized high-traffic performance.",
      tags: ["Drupal 10", "Migration", "Acquia Cloud", "Pantheon", "Higher Ed"],
      link: "https://uagc.edu/",
      github: "#"
    },
    {
      id: 5,
      title: "Xuan Sports",
      category: "Drupal",
      description: "A dynamic sports academy website featuring course management, event scheduling, and an e-commerce store. Built with Drupal to handle complex content structures and user registrations.",
      tags: ["Drupal", "E-commerce", "Event Management", "Responsive Design"],
      link: "https://www.xuansports.com/",
      github: "#"
    }
  ]
};
