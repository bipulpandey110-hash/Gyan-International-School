from rest_framework import generics

from .models import (
    SchoolInfo,
    Leadership,
    Faculty,
    AcademicProgram,
    Facility,
    GalleryImage,
    Event,
    Notice,
    Achievement,
    AdmissionEnquiry,
    ContactMessage,
)

from .serializers import (
    SchoolInfoSerializer,
    LeadershipSerializer,
    FacultySerializer,
    AcademicProgramSerializer,
    FacilitySerializer,
    GalleryImageSerializer,
    EventSerializer,
    NoticeSerializer,
    AchievementSerializer,
    AdmissionEnquirySerializer,
    ContactMessageSerializer,
)


# =========================================================
# SCHOOL INFORMATION
# =========================================================

class SchoolInfoListCreateView(generics.ListCreateAPIView):
    queryset = SchoolInfo.objects.all()
    serializer_class = SchoolInfoSerializer


# =========================================================
# LEADERSHIP
# =========================================================

class LeadershipListCreateView(generics.ListCreateAPIView):
    queryset = Leadership.objects.filter(is_active=True)
    serializer_class = LeadershipSerializer


# =========================================================
# FACULTY
# =========================================================

class FacultyListCreateView(generics.ListCreateAPIView):
    queryset = Faculty.objects.filter(is_active=True)
    serializer_class = FacultySerializer


# =========================================================
# ACADEMIC PROGRAMS
# =========================================================

class AcademicProgramListCreateView(generics.ListCreateAPIView):
    queryset = AcademicProgram.objects.filter(is_active=True)
    serializer_class = AcademicProgramSerializer


# =========================================================
# FACILITIES
# =========================================================

class FacilityListCreateView(generics.ListCreateAPIView):
    queryset = Facility.objects.filter(is_active=True)
    serializer_class = FacilitySerializer


# =========================================================
# GALLERY
# =========================================================

class GalleryListCreateView(generics.ListCreateAPIView):
    queryset = GalleryImage.objects.filter(is_active=True)
    serializer_class = GalleryImageSerializer


# =========================================================
# EVENTS
# =========================================================

class EventListCreateView(generics.ListCreateAPIView):
    queryset = Event.objects.filter(is_active=True)
    serializer_class = EventSerializer


# =========================================================
# NOTICES
# =========================================================

class NoticeListCreateView(generics.ListCreateAPIView):
    queryset = Notice.objects.filter(is_active=True)
    serializer_class = NoticeSerializer


# =========================================================
# ACHIEVEMENTS
# =========================================================

class AchievementListCreateView(generics.ListCreateAPIView):
    queryset = Achievement.objects.filter(is_active=True)
    serializer_class = AchievementSerializer


# =========================================================
# ADMISSION ENQUIRIES
# =========================================================

class AdmissionEnquiryCreateView(generics.CreateAPIView):
    queryset = AdmissionEnquiry.objects.all()
    serializer_class = AdmissionEnquirySerializer


# =========================================================
# CONTACT MESSAGES
# =========================================================

class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer