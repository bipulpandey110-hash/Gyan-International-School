from rest_framework import serializers

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


class SchoolInfoSerializer(serializers.ModelSerializer):
    logo_url = serializers.SerializerMethodField()

    class Meta:
        model = SchoolInfo
        fields = [
            "id",
            "name",
            "short_name",
            "tagline",
            "description",
            "classes",
            "address",
            "phone",
            "email",
            "youtube_url",
            "maps_url",
            "established_year",
            "logo",
            "logo_url",
            "created_at",
            "updated_at",
        ]

    def get_logo_url(self, obj):
        request = self.context.get("request")

        if not obj.logo:
            return ""

        url = obj.logo.url

        if request:
            return request.build_absolute_uri(url)

        return url


class LeadershipSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()

    class Meta:
        model = Leadership
        fields = [
            "id",
            "name",
            "role",
            "designation",
            "photo",
            "photo_url",
            "message",
            "bio",
            "is_active",
            "created_at",
            "updated_at",
        ]

    def get_photo_url(self, obj):
        request = self.context.get("request")

        if not obj.photo:
            return ""

        url = obj.photo.url

        if request:
            return request.build_absolute_uri(url)

        return url


class FacultySerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()

    class Meta:
        model = Faculty
        fields = [
            "id",
            "name",
            "designation",
            "subject",
            "qualification",
            "photo",
            "photo_url",
            "bio",
            "is_active",
            "created_at",
            "updated_at",
        ]

    def get_photo_url(self, obj):
        request = self.context.get("request")

        if not obj.photo:
            return ""

        url = obj.photo.url

        if request:
            return request.build_absolute_uri(url)

        return url


class AcademicProgramSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = AcademicProgram
        fields = [
            "id",
            "title",
            "class_name",
            "description",
            "subjects",
            "highlights",
            "image",
            "image_url",
            "is_featured",
            "is_active",
            "created_at",
            "updated_at",
        ]

    def get_image_url(self, obj):
        request = self.context.get("request")

        if not obj.image:
            return ""

        url = obj.image.url

        if request:
            return request.build_absolute_uri(url)

        return url


class FacilitySerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Facility
        fields = [
            "id",
            "title",
            "description",
            "image",
            "image_url",
            "icon",
            "is_featured",
            "is_active",
            "created_at",
            "updated_at",
        ]

    def get_image_url(self, obj):
        request = self.context.get("request")

        if not obj.image:
            return ""

        url = obj.image.url

        if request:
            return request.build_absolute_uri(url)

        return url


class GalleryImageSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = GalleryImage
        fields = [
            "id",
            "title",
            "image",
            "image_url",
            "category",
            "description",
            "is_featured",
            "is_active",
            "created_at",
        ]

    def get_image_url(self, obj):
        request = self.context.get("request")

        if not obj.image:
            return ""

        url = obj.image.url

        if request:
            return request.build_absolute_uri(url)

        return url


class EventSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = [
            "id",
            "title",
            "description",
            "event_date",
            "location",
            "image",
            "image_url",
            "is_featured",
            "is_active",
            "created_at",
        ]

    def get_image_url(self, obj):
        request = self.context.get("request")

        if not obj.image:
            return ""

        url = obj.image.url

        if request:
            return request.build_absolute_uri(url)

        return url


class NoticeSerializer(serializers.ModelSerializer):
    attachment_url = serializers.SerializerMethodField()

    class Meta:
        model = Notice
        fields = [
            "id",
            "title",
            "description",
            "notice_date",
            "attachment",
            "attachment_url",
            "is_important",
            "is_active",
            "created_at",
        ]

    def get_attachment_url(self, obj):
        request = self.context.get("request")

        if not obj.attachment:
            return ""

        url = obj.attachment.url

        if request:
            return request.build_absolute_uri(url)

        return url


class AchievementSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Achievement
        fields = [
            "id",
            "title",
            "description",
            "year",
            "image",
            "image_url",
            "is_featured",
            "is_active",
            "created_at",
        ]

    def get_image_url(self, obj):
        request = self.context.get("request")

        if not obj.image:
            return ""

        url = obj.image.url

        if request:
            return request.build_absolute_uri(url)

        return url


class AdmissionEnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionEnquiry
        fields = [
            "id",
            "name",
            "email",
            "phone",
            "student_name",
            "class_applying_for",
            "message",
            "created_at",
        ]
        read_only_fields = ["id", "created_at"]


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = [
            "id",
            "name",
            "email",
            "phone",
            "subject",
            "message",
            "is_read",
            "created_at",
        ]
        read_only_fields = [
            "id",
            "is_read",
            "created_at",
        ]