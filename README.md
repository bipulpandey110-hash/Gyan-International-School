# Gyan International Future Training Res School

Official school website for **Gyan International Future Training Res School**, designed to provide students, parents, teachers and visitors with a professional digital experience.

The website presents information about the school, academics, leadership, faculty, campus facilities, gallery, events, admissions and contact information.

---

## 🌐 Project Overview

**Gyan International Future Training Res School** is a responsive full-stack school website built with a modern React frontend and Django REST API backend.

The project focuses on:

- Professional school presentation
- Easy access to academic information
- School leadership and faculty information
- Campus and facilities showcase
- Gallery management
- Events and notices
- Online admission enquiries
- Contact enquiries
- Admin-managed school content
- Responsive experience across desktop, tablet and mobile

---

## ✨ Features

### 🏫 School Information
- School name and introduction
- Tagline
- Classes information
- Address
- Phone number
- Email
- Google Maps location
- YouTube channel

### 📚 Academics
- Primary School
- Middle School
- Secondary School
- Subjects
- Academic highlights
- Learning approach

### 👨‍🏫 Leadership & Faculty
- Principal information
- Director information
- Faculty profiles
- Designations
- Qualifications
- Profile photos
- Faculty descriptions

### 🏢 Campus & Facilities
- Smart Classrooms
- Computer Lab
- Library
- Science Lab
- Playground
- Facility descriptions and images

### 🖼️ Gallery
- School image gallery
- Gallery categories
- Featured images
- Image lightbox
- Previous/next image navigation
- Admin-managed image uploads

### 📅 Events & Notices
- School events
- Event dates
- Event locations
- Important notices
- Notice attachments

### 🎓 Admissions
- Online admission enquiry form
- Student information
- Class applying for
- Parent/guardian contact details
- Admission enquiry management through admin panel

### 📩 Contact
- Contact form
- Phone contact
- Email contact
- Google Maps
- YouTube channel

### ⚙️ Admin Panel
The Django admin panel allows authorized administrators to manage:

- School information
- Principal
- Director
- Faculty
- Academic programs
- Facilities
- Gallery
- Events
- Notices
- Achievements
- Admission enquiries
- Contact messages

---

## 🛠️ Technology Stack

### Frontend

- React
- Vite
- React Router
- CSS3
- Lucide React
- JavaScript

### Backend

- Python
- Django
- Django REST Framework
- Django CORS Headers
- Pillow

### Database

- SQLite for local development
- PostgreSQL ready for production

### Deployment

- GitHub
- Render

---

## 📁 Project Structure

```text
Gyan_International_School/
│
├── backend/
│   ├── api/
│   ├── config/
│   ├── media/
│   ├── venv/
│   ├── db.sqlite3
│   ├── manage.py
│   └── requirements.txt
│
├── public/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── data/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
📄 Website Pages

The website contains separate pages for:

Home
About
Academics
Faculty
Campus
Gallery
Events
Admissions
Contact
🔌 API Endpoints

The backend provides REST API endpoints for:

/api/school/
/api/leadership/
/api/faculty/
/api/academics/
/api/facilities/
/api/gallery/
/api/events/
/api/notices/
/api/achievements/
/api/admissions/
/api/contact/
🚀 Local Development
Frontend

Install dependencies:

npm install

Start the development server:

npm run dev

The frontend will normally run on:

http://localhost:5173
Backend

Go to the backend directory:

cd backend

Activate the virtual environment on Windows:

.\venv\Scripts\Activate.ps1

Run migrations:

python manage.py migrate

Start Django:

python manage.py runserver

The backend will normally run on:

http://127.0.0.1:8000
🔐 Django Admin

The Django administration panel is available at:

/admin/

Example local address:

http://127.0.0.1:8000/admin/

Administrators can manage the website content without changing frontend code.

🖼️ Media Management

Images and uploaded files are managed through Django media storage.

Examples include:

media/
├── school/
├── leadership/
├── faculty/
├── academics/
├── facilities/
├── gallery/
├── events/
├── achievements/
└── notices/

This makes it possible to add or replace school photos through the admin panel.

📱 Responsive Design

The website is designed to work across:

Desktop
Laptop
Tablet
Mobile phones

The interface uses responsive layouts, flexible grids and mobile navigation.

🎨 Design Direction

The visual design follows a professional educational identity with:

Clean white backgrounds
Light blue accents
Deep navy typography
Soft shadows
Subtle gradients
Modern cards
Gentle 3D depth
Responsive layouts
Clear navigation

The goal is to maintain a trustworthy school-focused appearance rather than an overly flashy or commercial design.

🔒 Security

For production deployment:

Django DEBUG should be disabled
Production SECRET_KEY should be kept private
Allowed hosts should be configured
CORS should be restricted to the production frontend
Production database credentials should be stored as environment variables
Admin credentials should never be committed to GitHub
🚀 Production Deployment

The project is prepared for deployment using:

Frontend
Render Static Site

Build command:

npm run build

Publish directory:

dist
Backend
Render Web Service

The Django backend can be deployed with Gunicorn and a production PostgreSQL database.

🔗 Repository

GitHub:

Gyan International School

Repository:

https://github.com/bipulpandey110-hash/Gyan-International-School
📌 Project Status

Development Status: Production Deployment Preparation

Core website functionality has been implemented, including:

Frontend pages
Django REST API
Admin management
School information
Leadership
Academics
Facilities
Gallery
Events
Notices
Achievements
Admissions
Contact enquiries

The project is ready for final production deployment and live testing.

👨‍💻 Development

Developed as a full-stack school website project using:

React + Django REST Framework + SQLite/PostgreSQL

📄 License

This project is created for Gyan International Future Training Res School.

All school-specific content, photographs, branding and information belong to the respective school.


### Ab kya karna hai

VS Code me:

**`README.md` → pura purana content delete → upar wala pura content paste → Save (`Ctrl + S`)**

Phir terminal:

```powershell
git add README.md
git commit -m "Add professional project README"
git push origin main
