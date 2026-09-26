from django.urls import path

from .views import (
    SchoolInfoListCreateView,
    LeadershipListCreateView,
    FacultyListCreateView,
    AcademicProgramListCreateView,
    FacilityListCreateView,
    GalleryListCreateView,
    EventListCreateView,
    NoticeListCreateView,
    AchievementListCreateView,
    AdmissionEnquiryCreateView,
    ContactMessageCreateView,
)


urlpatterns = [
    path(
        "school/",
        SchoolInfoListCreateView.as_view(),
        name="school",
    ),

    path(
        "leadership/",
        LeadershipListCreateView.as_view(),
        name="leadership",
    ),

    path(
        "faculty/",
        FacultyListCreateView.as_view(),
        name="faculty",
    ),

    path(
        "academics/",
        AcademicProgramListCreateView.as_view(),
        name="academics",
    ),

    path(
        "facilities/",
        FacilityListCreateView.as_view(),
        name="facilities",
    ),

    path(
        "gallery/",
        GalleryListCreateView.as_view(),
        name="gallery",
    ),

    path(
        "events/",
        EventListCreateView.as_view(),
        name="events",
    ),

    path(
        "notices/",
        NoticeListCreateView.as_view(),
        name="notices",
    ),

    path(
        "achievements/",
        AchievementListCreateView.as_view(),
        name="achievements",
    ),

    path(
        "admissions/",
        AdmissionEnquiryCreateView.as_view(),
        name="admissions",
    ),

    path(
        "contact/",
        ContactMessageCreateView.as_view(),
        name="contact",
    ),
]