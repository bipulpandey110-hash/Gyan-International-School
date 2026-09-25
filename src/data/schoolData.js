const schoolData = {
  /* =========================================================
     SCHOOL IDENTITY
     ========================================================= */

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

  /* =========================================================
     BRAND
     ========================================================= */

  brand: {
    mark: "G",
    secondaryMark: "I",
  },

  /* =========================================================
     NAVIGATION
     ========================================================= */

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

  /* =========================================================
     SCHOOL IMAGES

     Keep all image references here.
     Later these can easily come from Django/API.
     ========================================================= */

  images: {
    school: {
      main: "/images/school/school-10.webp",
    },

    hero: {
      main: "/images/school/school-10.webp",
      secondary: "/images/gallery/gallery-06.webp",
    },

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
        id: "student-05",
        src: "/images/students/students-05.webp",
        title: "Growing Together",
        label: "EXPERIENCE",
        description:
          "School experiences that support learning beyond the classroom.",
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
        title: "School Community",
        label: "TOGETHER",
        description:
          "A welcoming environment where every student can learn and develop.",
      },
    ],

    campus: [
      {
        id: "campus-04",
        src: "/images/campus/campus-04.webp",
        title: "Learning Spaces",
        description:
          "Purposeful spaces designed to support focused classroom learning.",
      },

      {
        id: "campus-06",
        src: "/images/campus/campus-06.webp",
        title: "School Environment",
        description:
          "A welcoming environment designed around everyday school life.",
      },

      {
        id: "campus-07",
        src: "/images/campus/campus-07.webp",
        title: "Activity Spaces",
        description:
          "Spaces where students can participate, explore and develop new interests.",
      },

      {
        id: "campus-10",
        src: "/images/campus/campus-10.webp",
        title: "Campus Life",
        description:
          "An environment created to support learning, interaction and growth.",
      },
    ],

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

      {
        id: "gallery-08",
        src: "/images/gallery/gallery-08.webp",
        title: "School Moments",
      },

      {
        id: "gallery-09",
        src: "/images/gallery/gallery-09.webp",
        title: "Together",
      },

      {
        id: "gallery-10",
        src: "/images/gallery/gallery-10.webp",
        title: "School Journey",
      },

      {
        id: "gallery-11",
        src: "/images/gallery/gallery-11.webp",
        title: "Growing Together",
      },

      {
        id: "gallery-12",
        src: "/images/gallery/gallery-12.webp",
        title: "Future Ready",
      },
    ],

    /*
      Faculty images are currently using available school images.
      Later replace only the `src` values with actual
      Director / Principal / Teacher photographs.
    */

    faculty: [
      {
        id: "director",
        name: "Director",
        role: "School Director",
        category: "Director",
        src: "/images/students/students-01.webp",
        initials: "D",
        description:
          "Providing direction and supporting the overall development of the school community.",
      },

      {
        id: "principal",
        name: "Principal",
        role: "School Principal",
        category: "Principal",
        src: "/images/students/students-02.webp",
        initials: "P",
        description:
          "Supporting academic direction, student development and a positive learning environment.",
      },

      {
        id: "faculty-01",
        name: "Teaching Faculty",
        role: "Teaching Faculty",
        category: "Teaching",
        src: "/images/students/students-03.webp",
        initials: "TF",
        description:
          "Supporting students through classroom learning, participation and continuous development.",
      },

      {
        id: "faculty-02",
        name: "Academic Faculty",
        role: "Academic Faculty",
        category: "Teaching",
        src: "/images/students/students-05.webp",
        initials: "AF",
        description:
          "Helping students build strong academic foundations and develop curiosity.",
      },

      {
        id: "faculty-03",
        name: "Student Support",
        role: "Student Support",
        category: "Support",
        src: "/images/students/students-08.webp",
        initials: "SS",
        description:
          "Creating a supportive environment where students can learn and grow confidently.",
      },

      {
        id: "faculty-04",
        name: "Subject Faculty",
        role: "Subject Faculty",
        category: "Teaching",
        src: "/images/students/students-09.webp",
        initials: "SF",
        description:
          "Supporting subject understanding through meaningful classroom interaction.",
      },
    ],
  },

  /* =========================================================
     SCHOOL VALUES
     ========================================================= */

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

  /* =========================================================
     ACADEMIC LEVELS
     ========================================================= */

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

  /* =========================================================
     SCHOOL HIGHLIGHTS
     ========================================================= */

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

  /* =========================================================
     SCHOOL LIFE
     ========================================================= */

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

  /* =========================================================
     FACULTY CATEGORIES
     ========================================================= */

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

  /* =========================================================
     CAMPUS AREAS
     ========================================================= */

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

  /* =========================================================
     EVENTS
     
     Ready for future Django/API data.
     ========================================================= */

  events: [
    {
      id: "event-01",
      title: "School Activities",
      category: "ACTIVITY",
      date: "",
      location: "School Campus",
      description:
        "Student activities and experiences designed to encourage participation, confidence and learning.",
      image: "/images/gallery/gallery-07.webp",
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
      image: "/images/gallery/gallery-03.webp",
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
      image: "/images/gallery/gallery-04.webp",
      status: "upcoming",
    },
  ],

  /* =========================================================
     ADMISSIONS
     ========================================================= */

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

  /* =========================================================
     CONTACT
     ========================================================= */

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

  /* =========================================================
     FOOTER
     ========================================================= */

  footer: {
    description:
      "Learning with purpose. Growing with confidence. A learning environment focused on knowledge, character and future readiness.",

    status: "Classes 0–10",

    closingLine: "Learning · Growing · Becoming",
  },
};

export default schoolData;