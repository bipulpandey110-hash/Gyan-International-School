const schoolData = {
  school: {
    name: "Gyan International",
    fullName: "Gyan International Future Training Res School",
    shortName: "Gyan International",
    tagline: "Learning with purpose. Growing with confidence.",
    classes: "Classes 0–10",
    year: "2026",
    location: {
      city: "",
      state: "",
      country: "India",
      address: "",
    },
    description:
      "A learning environment focused on knowledge, character, confidence and future readiness.",
  },

  brand: {
    mark: "G",
    secondaryMark: "I",
  },

  navigation: [
    {
      label: "Home",
      path: "/",
      end: true,
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Academics",
      path: "/academics",
    },
    {
      label: "Faculty",
      path: "/faculty",
    },
    {
      label: "Campus",
      path: "/campus",
    },
    {
      label: "Gallery",
      path: "/gallery",
    },
    {
      label: "Events",
      path: "/events",
    },
    {
      label: "Admissions",
      path: "/admissions",
    },
  ],

  /*
  |--------------------------------------------------------------------------
  | IMAGES
  |--------------------------------------------------------------------------
  */

  images: {
    school: {
      main: "/images/campus/campus-01.webp",
    },

    hero: {
      main: "/images/campus/campus-01.webp",
      secondary: "/images/campus/campus-02.webp",
    },

    /*
    |--------------------------------------------------------------------------
    | LEADERSHIP
    |--------------------------------------------------------------------------
    */

    leadership: {
      principal: {
        id: "principal",
        name: "Principal",
        role: "School Principal",
        category: "Principal",
        src: "/images/leadership/principal-original.webp",
        initials: "P",
        description:
          "Supporting academic direction, student development and a positive learning environment.",
      },

      director: {
        id: "director",
        name: "Director",
        role: "School Director",
        category: "Director",
        src: "/images/leadership/director-original.webp",
        initials: "D",
        description:
          "Providing direction and supporting the overall development of the school community.",
      },
    },

    /*
    |--------------------------------------------------------------------------
    | STUDENTS
    |--------------------------------------------------------------------------
    */

    students: [
      {
        id: "student-01",
        src: "/images/students/students-01.webp",
        title: "Student Life",
        label: "LEARNING",
        description:
          "A positive learning environment where students can explore, participate and grow.",
      },
      {
        id: "student-02",
        src: "/images/students/students-02.webp",
        title: "Young Minds",
        label: "DISCOVERY",
        description:
          "Encouraging curiosity, creativity and confidence from the early years.",
      },
      {
        id: "student-03",
        src: "/images/students/students-03.webp",
        title: "Together We Learn",
        label: "COMMUNITY",
        description:
          "Students learning, communicating and growing together as a school community.",
      },
      {
        id: "student-04",
        src: "/images/students/students-04.webp",
        title: "Learning Together",
        label: "LEARNING",
        description:
          "Students participating in meaningful classroom and school experiences.",
      },
      {
        id: "student-05",
        src: "/images/students/students-05.webp",
        title: "Growing Together",
        label: "EXPERIENCE",
        description:
          "School experiences that support learning beyond the classroom.",
      },
      {
        id: "student-06",
        src: "/images/students/students-06.webp",
        title: "Student Experience",
        label: "SCHOOL LIFE",
        description:
          "Everyday experiences that help students learn, communicate and participate.",
      },
      {
        id: "student-07",
        src: "/images/students/students-07.webp",
        title: "Active Students",
        label: "ACTIVITY",
        description:
          "Students taking part in activities and developing confidence through participation.",
      },
      {
        id: "student-08",
        src: "/images/students/students-08.webp",
        title: "Confidence",
        label: "DEVELOPMENT",
        description:
          "Helping students become confident, responsible and expressive learners.",
      },
      {
        id: "student-09",
        src: "/images/students/students-09.webp",
        title: "Active Learning",
        label: "ACTIVITY",
        description:
          "Opportunities for students to participate and develop new interests.",
      },
      {
        id: "student-10",
        src: "/images/students/students-10.webp",
        title: "School Community",
        label: "TOGETHER",
        description:
          "A welcoming environment where students can learn and develop together.",
      },
      {
        id: "student-11",
        src: "/images/students/students-11.webp",
        title: "Future Ready",
        label: "GROWTH",
        description:
          "Building knowledge, habits and skills for the next stage of life.",
      },
      {
        id: "student-12",
        src: "/images/students/students-12.webp",
        title: "Growing Together",
        label: "COMMUNITY",
        description:
          "Students developing confidence through learning and shared experiences.",
      },
      {
        id: "student-13",
        src: "/images/students/students-13.webp",
        title: "Learning Experience",
        label: "LEARNING",
        description:
          "Meaningful learning experiences designed around student participation.",
      },
      {
        id: "student-14",
        src: "/images/students/students-14.webp",
        title: "Student Activities",
        label: "ACTIVITY",
        description:
          "Opportunities for students to explore interests and participate actively.",
      },
      {
        id: "student-15",
        src: "/images/students/students-15.webp",
        title: "School Moments",
        label: "EXPERIENCE",
        description:
          "Special moments from everyday school life and student experiences.",
      },
      {
        id: "student-16",
        src: "/images/students/students-16.webp",
        title: "Future Growth",
        label: "DEVELOPMENT",
        description:
          "Supporting students as they learn, participate and grow with confidence.",
      },
    ],

    /*
    |--------------------------------------------------------------------------
    | CAMPUS
    |--------------------------------------------------------------------------
    */

    campus: [
      {
        id: "campus-01",
        src: "/images/campus/campus-01.webp",
        title: "School Campus",
        description:
          "The school environment where students learn and grow every day.",
      },
      {
        id: "campus-02",
        src: "/images/campus/campus-02.webp",
        title: "Learning Environment",
        description:
          "A purposeful environment designed around everyday school learning.",
      },
      {
        id: "campus-03",
        src: "/images/campus/campus-03.webp",
        title: "School Spaces",
        description:
          "Spaces supporting classroom learning and student interaction.",
      },
      {
        id: "campus-04",
        src: "/images/campus/campus-04.webp",
        title: "Learning Spaces",
        description:
          "Purposeful spaces designed to support focused classroom learning.",
      },
      {
        id: "campus-05",
        src: "/images/campus/campus-05.webp",
        title: "Campus Life",
        description:
          "An environment created to support learning, interaction and growth.",
      },
    ],

    /*
    |--------------------------------------------------------------------------
    | EVENTS / ACTIVITIES
    |--------------------------------------------------------------------------
    */

    eventsGallery: [
      {
        id: "event-photo-01",
        src: "/images/events/events-01.webp",
        title: "School Activity",
      },
      {
        id: "event-photo-02",
        src: "/images/events/events-02.webp",
        title: "Student Activity",
      },
      {
        id: "event-photo-03",
        src: "/images/events/events-03.webp",
        title: "School Experience",
      },
      {
        id: "event-photo-04",
        src: "/images/events/events-04.webp",
        title: "Student Participation",
      },
      {
        id: "event-photo-05",
        src: "/images/events/events-05.webp",
        title: "School Event",
      },
      {
        id: "event-photo-06",
        src: "/images/events/events-06.webp",
        title: "Student Life",
      },
      {
        id: "event-photo-07",
        src: "/images/events/events-07.webp",
        title: "School Activities",
      },
      {
        id: "event-photo-08",
        src: "/images/events/events-08.webp",
        title: "Learning Activity",
      },
      {
        id: "event-photo-09",
        src: "/images/events/events-09.webp",
        title: "School Community",
      },
      {
        id: "event-photo-10",
        src: "/images/events/events-10.webp",
        title: "Student Experience",
      },
      {
        id: "event-photo-11",
        src: "/images/events/events-11.webp",
        title: "School Moment",
      },
      {
        id: "event-photo-12",
        src: "/images/events/events-12.webp",
        title: "Activity Day",
      },
      {
        id: "event-photo-13",
        src: "/images/events/events-13.webp",
        title: "Student Activities",
      },
      {
        id: "event-photo-14",
        src: "/images/events/events-14.webp",
        title: "School Life",
      },
      {
        id: "event-photo-15",
        src: "/images/events/events-15.webp",
        title: "Learning Together",
      },
      {
        id: "event-photo-16",
        src: "/images/events/events-16.webp",
        title: "Student Participation",
      },
      {
        id: "event-photo-17",
        src: "/images/events/events-17.webp",
        title: "School Activity",
      },
      {
        id: "event-photo-18",
        src: "/images/events/events-18.webp",
        title: "School Experience",
      },
      {
        id: "event-photo-19",
        src: "/images/events/events-19.webp",
        title: "Community Activity",
      },
      {
        id: "event-photo-20",
        src: "/images/events/events-20.webp",
        title: "Student Life",
      },
      {
        id: "event-photo-21",
        src: "/images/events/events-21.webp",
        title: "School Event",
      },
      {
        id: "event-photo-22",
        src: "/images/events/events-22.webp",
        title: "Learning Experience",
      },
      {
        id: "event-photo-23",
        src: "/images/events/events-23.webp",
        title: "School Community",
      },
      {
        id: "event-photo-24",
        src: "/images/events/events-24.webp",
        title: "Student Activity",
      },
      {
        id: "event-photo-25",
        src: "/images/events/events-25.webp",
        title: "School Moment",
      },
      {
        id: "event-photo-26",
        src: "/images/events/events-26.webp",
        title: "Student Experience",
      },
      {
        id: "event-photo-27",
        src: "/images/events/events-27.webp",
        title: "School Activities",
      },
    ],

    /*
    |--------------------------------------------------------------------------
    | MAIN GALLERY
    |--------------------------------------------------------------------------
    */

    gallery: [
      {
        id: "gallery-01",
        src: "/images/gallery/gallery-01.webp",
        title: "School Life",
      },
      {
        id: "gallery-02",
        src: "/images/gallery/gallery-02.webp",
        title: "Student Experience",
      },
      {
        id: "gallery-03",
        src: "/images/gallery/gallery-03.webp",
        title: "Learning Together",
      },
      {
        id: "gallery-04",
        src: "/images/gallery/gallery-04.webp",
        title: "School Community",
      },
      {
        id: "gallery-05",
        src: "/images/gallery/gallery-05.webp",
        title: "Learning Environment",
      },
      {
        id: "gallery-06",
        src: "/images/gallery/gallery-06.webp",
        title: "Campus Experience",
      },
      {
        id: "gallery-07",
        src: "/images/gallery/gallery-07.webp",
        title: "Student Activities",
      },
    ],

    /*
    |--------------------------------------------------------------------------
    | FACULTY
    | Teachers will be added later.
    |--------------------------------------------------------------------------
    */

    faculty: [
      {
        id: "principal",
        name: "Principal",
        role: "School Principal",
        category: "Principal",
        src: "/images/leadership/principal-original.webp",
        initials: "P",
        description:
          "Supporting academic direction, student development and a positive learning environment.",
      },
      {
        id: "director",
        name: "Director",
        role: "School Director",
        category: "Director",
        src: "/images/leadership/director-original.webp",
        initials: "D",
        description:
          "Providing direction and supporting the overall development of the school community.",
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | VALUES
  |--------------------------------------------------------------------------
  */

  values: [
    {
      id: "knowledge",
      number: "01",
      title: "Knowledge",
      description:
        "Building strong academic foundations through meaningful learning and curiosity.",
    },
    {
      id: "character",
      number: "02",
      title: "Character",
      description:
        "Encouraging responsibility, respect, discipline and positive values.",
    },
    {
      id: "confidence",
      number: "03",
      title: "Confidence",
      description:
        "Helping students express themselves, explore ideas and grow with confidence.",
    },
    {
      id: "future-readiness",
      number: "04",
      title: "Future Readiness",
      description:
        "Preparing students with skills, awareness and a mindset for the changing world.",
    },
  ],

  /*
  |--------------------------------------------------------------------------
  | ACADEMICS
  |--------------------------------------------------------------------------
  */

  academicLevels: [
    {
      id: "foundation",
      number: "01",
      title: "Foundation Years",
      classes: "Classes 0–2",
      description:
        "A nurturing beginning focused on curiosity, communication, creativity and foundational learning.",
    },
    {
      id: "primary",
      number: "02",
      title: "Primary Years",
      classes: "Classes 3–5",
      description:
        "Developing strong academic fundamentals alongside confidence, collaboration and practical learning.",
    },
    {
      id: "middle",
      number: "03",
      title: "Middle School",
      classes: "Classes 6–8",
      description:
        "Encouraging deeper understanding, independent thinking, exploration and responsible learning.",
    },
    {
      id: "secondary",
      number: "04",
      title: "Secondary School",
      classes: "Classes 9–10",
      description:
        "Focused academic preparation with stronger subject understanding, discipline and future direction.",
    },
  ],

  /*
  |--------------------------------------------------------------------------
  | HIGHLIGHTS
  |--------------------------------------------------------------------------
  */

  highlights: [
    {
      id: "student-centred",
      number: "01",
      title: "Student-Centred Learning",
      description:
        "Learning experiences designed around student participation, understanding and growth.",
    },
    {
      id: "holistic",
      number: "02",
      title: "Holistic Development",
      description:
        "Academic learning supported by communication, creativity, confidence and character.",
    },
    {
      id: "supportive",
      number: "03",
      title: "Supportive Environment",
      description:
        "A school environment where students can learn, ask questions and develop at their own pace.",
    },
    {
      id: "future",
      number: "04",
      title: "Future Focus",
      description:
        "Building the knowledge, habits and mindset students need for the next stage of their journey.",
    },
  ],

  /*
  |--------------------------------------------------------------------------
  | SCHOOL LIFE
  |--------------------------------------------------------------------------
  */

  schoolLife: [
    {
      id: "learning",
      title: "Learning",
      label: "ACADEMICS",
      description:
        "Focused classrooms and meaningful learning experiences.",
    },
    {
      id: "activities",
      title: "Activities",
      label: "EXPERIENCE",
      description:
        "Opportunities for students to explore interests beyond textbooks.",
    },
    {
      id: "community",
      title: "Community",
      label: "TOGETHER",
      description:
        "A school community built around respect, participation and belonging.",
    },
  ],

  /*
  |--------------------------------------------------------------------------
  | FACULTY CATEGORIES
  |--------------------------------------------------------------------------
  */

  facultyCategories: [
    {
      id: "teaching",
      title: "Teaching Faculty",
      description:
        "Teachers supporting students through subject learning, guidance and classroom engagement.",
    },
    {
      id: "leadership",
      title: "School Leadership",
      description:
        "Leadership focused on academic direction, student development and the school community.",
    },
    {
      id: "support",
      title: "Student Support",
      description:
        "A supportive environment designed to help students learn confidently and responsibly.",
    },
  ],

  /*
  |--------------------------------------------------------------------------
  | CAMPUS AREAS
  |--------------------------------------------------------------------------
  */

  campusAreas: [
    {
      id: "learning-spaces",
      number: "01",
      title: "Learning Spaces",
      description:
        "Purposeful spaces designed to support focused classroom learning.",
    },
    {
      id: "activity-spaces",
      number: "02",
      title: "Activity Spaces",
      description:
        "Areas where students can participate, explore and develop new interests.",
    },
    {
      id: "school-environment",
      number: "03",
      title: "School Environment",
      description:
        "A welcoming environment designed around student learning and everyday school life.",
    },
  ],

  /*
  |--------------------------------------------------------------------------
  | EVENTS
  |--------------------------------------------------------------------------
  */

  events: [
    {
      id: "event-01",
      title: "School Activities",
      category: "ACTIVITY",
      date: "",
      location: "School Campus",
      description:
        "Student activities and experiences designed to encourage participation, confidence and learning.",
      image: "/images/events/events-01.webp",
      status: "upcoming",
    },
    {
      id: "event-02",
      title: "Learning Experience",
      category: "ACADEMICS",
      date: "",
      location: "School Campus",
      description:
        "Meaningful learning experiences that encourage curiosity and active participation.",
      image: "/images/events/events-08.webp",
      status: "upcoming",
    },
    {
      id: "event-03",
      title: "School Community",
      category: "COMMUNITY",
      date: "",
      location: "School Campus",
      description:
        "Moments that bring students and the school community together.",
      image: "/images/events/events-14.webp",
      status: "upcoming",
    },
    {
      id: "event-04",
      title: "Student Activities",
      category: "ACTIVITY",
      date: "",
      location: "School Campus",
      description:
        "Students participating in school activities and shared experiences.",
      image: "/images/events/events-21.webp",
      status: "upcoming",
    },
  ],

  /*
  |--------------------------------------------------------------------------
  | ADMISSIONS
  |--------------------------------------------------------------------------
  */

  admissions: {
    title: "Begin the Journey",
    description:
      "For admissions and school information, connect with the school team through the admissions or contact section.",
    status: "Admissions Enquiry",

    steps: [
      {
        id: "enquiry",
        number: "01",
        title: "Enquiry",
        description:
          "Share your basic requirements and learn more about the school.",
      },
      {
        id: "interaction",
        number: "02",
        title: "Interaction",
        description:
          "Connect with the school team and understand the learning environment.",
      },
      {
        id: "admission-process",
        number: "03",
        title: "Admission Process",
        description:
          "Complete the required admission formalities and documentation.",
      },
    ],

    enquiryTypes: [
      {
        value: "admission",
        label: "Admissions",
      },
      {
        value: "school-information",
        label: "School Information",
      },
      {
        value: "campus-visit",
        label: "Campus Visit",
      },
      {
        value: "general",
        label: "General Enquiry",
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | CONTACT
  |--------------------------------------------------------------------------
  */

  contact: {
    heading: "Let's Connect",

    description:
      "For admissions, school information and general enquiries, connect with the school team.",

    phone: "",
    email: "",
    address: "",

    officeHours: {
      days: "Monday – Saturday",
      time: "08:00 AM – 04:00 PM",
    },

    social: {
      facebook: "",
      instagram: "",
      youtube: "",
    },

    enquiryTypes: [
      {
        value: "admission",
        label: "Admissions",
      },
      {
        value: "academic",
        label: "Academics",
      },
      {
        value: "general",
        label: "General Information",
      },
      {
        value: "campus",
        label: "Campus Visit",
      },
      {
        value: "other",
        label: "Other",
      },
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | FOOTER
  |--------------------------------------------------------------------------
  */

  footer: {
    description:
      "Learning with purpose. Growing with confidence. A learning environment focused on knowledge, character and future readiness.",

    status: "Classes 0–10",

    closingLine: "Learning · Growing · Becoming",
  },
};

export default schoolData;