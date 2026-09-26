const API_BASE_URL = "http://127.0.0.1:8000/api";

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...(options.body instanceof FormData
        ? {}
        : {
            "Content-Type": "application/json",
          }),
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      errorText || `API request failed: ${response.status}`
    );
  }

  return response.json();
}

export const schoolAPI = {
  // School
  getSchool: () => request("/school/"),

  // Leadership
  getLeadership: () => request("/leadership/"),

  // Faculty
  getFaculty: () => request("/faculty/"),

  // Academics
  getAcademics: () => request("/academics/"),

  // Facilities
  getFacilities: () => request("/facilities/"),

  // Gallery
  getGallery: () => request("/gallery/"),

  // Events
  getEvents: () => request("/events/"),

  // Notices
  getNotices: () => request("/notices/"),

  // Achievements
  getAchievements: () => request("/achievements/"),

  // Admissions
  submitAdmission: (data) =>
    request("/admissions/", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  // Contact
  submitContact: (data) =>
    request("/contact/", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};

export default schoolAPI;