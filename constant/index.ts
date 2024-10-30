export const titles: string[] = [
    'About',
    'Education',
    'Certifications',
    'Skills',
    'Projects'
  ];

  interface Education {
    time: string;
    title: string;
    subtitle ?: string;
  }
  

  export const education: Education[] = [
    {
      time: "2023 - Present",
      title: "Computer Science Engineer At Académie internationale Mohammed VI de l'aviation civile",
      subtitle: "Engineer Student"
    },
    {
      time : "2021-2023" ,
      title: "Student at Classe préparatoire aux grandes écoles"
    },
  ];

  export const Certifications : Education[] = [
    {
      time: "Apr 2023" ,
      title: "CCNA: Introduction to Networks",
      subtitle: "knowledge of networking including IP addressing, how physical, data link protocols support Ethernet, can configure connectivity between switches, routers and end devices to provide access to local and remote resources."
    },
  ];

export const tags : string[] = [
    "javascript",
    "HTML",
    "CSS",
    "Python" ,
    "Java",
    "C++", 
    "PHP"
];