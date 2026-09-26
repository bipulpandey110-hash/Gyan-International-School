from pathlib import Path

from django import forms
from django.contrib import admin, messages
from django.http import HttpResponseRedirect
from django.template.response import TemplateResponse
from django.urls import path, reverse
from django.utils.html import format_html

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


# ============================================================
# COMMON IMAGE PREVIEW
# ============================================================

def image_preview(image_field):
    if not image_field:
        return "No image"

    try:
        return format_html(
            '<img src="{}" '
            'style="max-width:180px; '
            'max-height:120px; '
            'object-fit:cover; '
            'border-radius:10px; '
            'border:1px solid #dbe7f3;" />',
            image_field.url,
        )
    except Exception:
        return "Image unavailable"


# ============================================================
# SCHOOL INFORMATION
# ============================================================

@admin.register(SchoolInfo)
class SchoolInfoAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "short_name",
        "classes",
        "phone",
        "email",
        "updated_at",
    )

    search_fields = (
        "name",
        "short_name",
        "tagline",
        "email",
        "phone",
        "address",
        "youtube_url",
        "maps_url",
        "description",
    )

    readonly_fields = (
        "logo_preview",
        "created_at",
        "updated_at",
    )

    list_per_page = 20

    fieldsets = (
        (
            "School Information",
            {
                "fields": (
                    "name",
                    "short_name",
                    "tagline",
                    "description",
                    "classes",
                )
            },
        ),
        (
            "Contact & Social Information",
            {
                "fields": (
                    "address",
                    "phone",
                    "email",
                    "youtube_url",
                    "maps_url",
                )
            },
        ),
        (
            "School Details",
            {
                "fields": (
                    "established_year",
                    "logo",
                    "logo_preview",
                )
            },
        ),
        (
            "System Information",
            {
                "fields": (
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    def logo_preview(self, obj):
        return image_preview(obj.logo)

    logo_preview.short_description = "Logo Preview"


# ============================================================
# LEADERSHIP
# ============================================================

@admin.register(Leadership)
class LeadershipAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "role",
        "designation",
        "is_active",
        "created_at",
    )

    list_filter = (
        "role",
        "is_active",
    )

    search_fields = (
        "name",
        "role",
        "designation",
        "message",
        "bio",
    )

    readonly_fields = (
        "photo_preview",
        "created_at",
        "updated_at",
    )

    ordering = (
        "role",
        "name",
    )

    fieldsets = (
        (
            "Leadership Information",
            {
                "fields": (
                    "name",
                    "role",
                    "designation",
                    "message",
                    "bio",
                    "is_active",
                )
            },
        ),
        (
            "Photo",
            {
                "fields": (
                    "photo",
                    "photo_preview",
                )
            },
        ),
        (
            "System Information",
            {
                "fields": (
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    def photo_preview(self, obj):
        return image_preview(obj.photo)

    photo_preview.short_description = "Photo Preview"


# ============================================================
# FACULTY
# ============================================================

@admin.register(Faculty)
class FacultyAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "designation",
        "subject",
        "qualification",
        "is_active",
    )

    list_filter = (
        "is_active",
        "subject",
    )

    search_fields = (
        "name",
        "designation",
        "subject",
        "qualification",
        "bio",
    )

    readonly_fields = (
        "photo_preview",
        "created_at",
        "updated_at",
    )

    ordering = ("name",)

    fieldsets = (
        (
            "Teacher Information",
            {
                "fields": (
                    "name",
                    "designation",
                    "subject",
                    "qualification",
                    "bio",
                    "is_active",
                )
            },
        ),
        (
            "Teacher Photo",
            {
                "fields": (
                    "photo",
                    "photo_preview",
                )
            },
        ),
        (
            "System Information",
            {
                "fields": (
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    def photo_preview(self, obj):
        return image_preview(obj.photo)

    photo_preview.short_description = "Photo Preview"


# ============================================================
# ACADEMIC PROGRAMS
# ============================================================

@admin.register(AcademicProgram)
class AcademicProgramAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "class_name",
        "is_featured",
        "is_active",
        "created_at",
    )

    list_filter = (
        "is_featured",
        "is_active",
    )

    search_fields = (
        "title",
        "class_name",
        "description",
        "subjects",
        "highlights",
    )

    readonly_fields = (
        "image_preview",
        "created_at",
        "updated_at",
    )

    ordering = ("title",)

    fieldsets = (
        (
            "Academic Program",
            {
                "fields": (
                    "title",
                    "class_name",
                    "description",
                    "subjects",
                    "highlights",
                )
            },
        ),
        (
            "Program Image",
            {
                "fields": (
                    "image",
                    "image_preview",
                )
            },
        ),
        (
            "Visibility",
            {
                "fields": (
                    "is_featured",
                    "is_active",
                )
            },
        ),
        (
            "System Information",
            {
                "fields": (
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    def image_preview(self, obj):
        return image_preview(obj.image)

    image_preview.short_description = "Image Preview"


# ============================================================
# FACILITIES
# ============================================================

@admin.register(Facility)
class FacilityAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "icon",
        "is_featured",
        "is_active",
        "created_at",
    )

    list_filter = (
        "is_featured",
        "is_active",
    )

    search_fields = (
        "title",
        "description",
        "icon",
    )

    readonly_fields = (
        "image_preview",
        "created_at",
        "updated_at",
    )

    ordering = ("title",)

    fieldsets = (
        (
            "Facility Information",
            {
                "fields": (
                    "title",
                    "description",
                    "icon",
                )
            },
        ),
        (
            "Facility Image",
            {
                "fields": (
                    "image",
                    "image_preview",
                )
            },
        ),
        (
            "Visibility",
            {
                "fields": (
                    "is_featured",
                    "is_active",
                )
            },
        ),
        (
            "System Information",
            {
                "fields": (
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    def image_preview(self, obj):
        return image_preview(obj.image)

    image_preview.short_description = "Image Preview"


# ============================================================
# MULTIPLE FILE UPLOAD WIDGET
# ============================================================

class MultipleFileInput(forms.FileInput):
    allow_multiple_selected = True


class MultipleFileField(forms.FileField):
    widget = MultipleFileInput

    def clean(self, data, initial=None):
        if not data:
            return []

        if isinstance(data, (list, tuple)):
            files = data
        else:
            files = [data]

        cleaned_files = []

        for file in files:
            cleaned_files.append(
                super().clean(file, initial)
            )

        return cleaned_files


# ============================================================
# GALLERY BULK UPLOAD FORM
# ============================================================

class GalleryBulkUploadForm(forms.Form):

    images = MultipleFileField(
        label="Select School Photos",
        required=True,
        widget=MultipleFileInput(
            attrs={
                "multiple": True,
                "accept": "image/jpeg,image/png,image/webp",
            }
        ),
        help_text=(
            "Select multiple JPG, JPEG, PNG or WEBP "
            "images at once."
        ),
    )

    category = forms.CharField(
        label="Category",
        max_length=100,
        required=False,
        initial="School Life",
        widget=forms.TextInput(
            attrs={
                "placeholder": "Example: School Life",
            }
        ),
    )

    description = forms.CharField(
        label="Description",
        required=False,
        widget=forms.Textarea(
            attrs={
                "rows": 3,
                "placeholder": (
                    "Optional description for all uploaded images"
                ),
            }
        ),
    )

    is_featured = forms.BooleanField(
        label="Mark all as featured",
        required=False,
        initial=False,
    )

    is_active = forms.BooleanField(
        label="Make all images active",
        required=False,
        initial=True,
    )


# ============================================================
# GALLERY
# ============================================================

@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):

    list_display = (
        "thumbnail",
        "title",
        "category",
        "is_featured",
        "is_active",
        "created_at",
    )

    list_filter = (
        "category",
        "is_featured",
        "is_active",
        "created_at",
    )

    search_fields = (
        "title",
        "category",
        "description",
    )

    readonly_fields = (
        "image_preview",
        "created_at",
    )

    ordering = (
        "-created_at",
    )

    list_per_page = 25

    date_hierarchy = "created_at"

    change_list_template = "admin/gallery_change_list.html"

    fieldsets = (
        (
            "Gallery Information",
            {
                "fields": (
                    "title",
                    "category",
                    "description",
                )
            },
        ),
        (
            "Image",
            {
                "fields": (
                    "image",
                    "image_preview",
                )
            },
        ),
        (
            "Visibility",
            {
                "fields": (
                    "is_featured",
                    "is_active",
                )
            },
        ),
        (
            "System Information",
            {
                "fields": (
                    "created_at",
                )
            },
        ),
    )

    def thumbnail(self, obj):
        if not obj.image:
            return "—"

        try:
            return format_html(
                '<img src="{}" '
                'style="width:70px; '
                'height:50px; '
                'object-fit:cover; '
                'border-radius:8px; '
                'border:1px solid #dbe7f3;" />',
                obj.image.url,
            )
        except Exception:
            return "—"

    thumbnail.short_description = "Preview"

    def image_preview(self, obj):
        return image_preview(obj.image)

    image_preview.short_description = "Image Preview"

    # --------------------------------------------------------
    # CUSTOM ADMIN URL
    # --------------------------------------------------------

    def get_urls(self):
        urls = super().get_urls()

        custom_urls = [
            path(
                "bulk-upload/",
                self.admin_site.admin_view(
                    self.bulk_upload_view
                ),
                name="api_galleryimage_bulk_upload",
            ),
        ]

        return custom_urls + urls

    # --------------------------------------------------------
    # BULK UPLOAD VIEW
    # --------------------------------------------------------

    def bulk_upload_view(self, request):

        if request.method == "POST":

            form = GalleryBulkUploadForm(
                request.POST,
                request.FILES,
            )

            if form.is_valid():

                uploaded_files = form.cleaned_data["images"]

                category = (
                    form.cleaned_data.get("category")
                    or "School Life"
                )

                description = (
                    form.cleaned_data.get("description")
                    or ""
                )

                is_featured = form.cleaned_data.get(
                    "is_featured",
                    False,
                )

                is_active = form.cleaned_data.get(
                    "is_active",
                    True,
                )

                created_count = 0

                for uploaded_file in uploaded_files:

                    original_name = Path(
                        uploaded_file.name
                    ).stem

                    title = (
                        original_name
                        .replace("_", " ")
                        .replace("-", " ")
                        .strip()
                    )

                    if not title:
                        title = "School Moment"

                    GalleryImage.objects.create(
                        title=title.title(),
                        image=uploaded_file,
                        category=category,
                        description=description,
                        is_featured=is_featured,
                        is_active=is_active,
                    )

                    created_count += 1

                self.message_user(
                    request,
                    (
                        f"{created_count} gallery image(s) "
                        "uploaded successfully."
                    ),
                    messages.SUCCESS,
                )

                return HttpResponseRedirect(
                    reverse(
                        "admin:api_galleryimage_changelist"
                    )
                )

        else:
            form = GalleryBulkUploadForm()

        context = {
            **self.admin_site.each_context(request),
            "title": "Bulk Upload Gallery Images",
            "form": form,
            "opts": self.model._meta,
            "has_permission": True,
            "media": self.media + form.media,
        }

        return TemplateResponse(
            request,
            "admin/gallery_bulk_upload.html",
            context,
        )


# ============================================================
# EVENTS
# ============================================================

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "event_date",
        "location",
        "is_featured",
        "is_active",
    )

    list_filter = (
        "is_featured",
        "is_active",
        "event_date",
    )

    search_fields = (
        "title",
        "description",
        "location",
    )

    readonly_fields = (
        "image_preview",
        "created_at",
    )

    ordering = (
        "-event_date",
    )

    date_hierarchy = "event_date"

    fieldsets = (
        (
            "Event Information",
            {
                "fields": (
                    "title",
                    "description",
                    "event_date",
                    "location",
                )
            },
        ),
        (
            "Event Image",
            {
                "fields": (
                    "image",
                    "image_preview",
                )
            },
        ),
        (
            "Visibility",
            {
                "fields": (
                    "is_featured",
                    "is_active",
                )
            },
        ),
        (
            "System Information",
            {
                "fields": (
                    "created_at",
                )
            },
        ),
    )

    def image_preview(self, obj):
        return image_preview(obj.image)

    image_preview.short_description = "Image Preview"


# ============================================================
# NOTICES
# ============================================================

@admin.register(Notice)
class NoticeAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "notice_date",
        "is_important",
        "is_active",
        "created_at",
    )

    list_filter = (
        "is_important",
        "is_active",
        "notice_date",
    )

    search_fields = (
        "title",
        "description",
    )

    readonly_fields = (
        "created_at",
    )

    ordering = (
        "-notice_date",
        "-created_at",
    )

    date_hierarchy = "notice_date"

    fieldsets = (
        (
            "Notice Information",
            {
                "fields": (
                    "title",
                    "description",
                    "notice_date",
                )
            },
        ),
        (
            "Attachment",
            {
                "fields": (
                    "attachment",
                )
            },
        ),
        (
            "Visibility",
            {
                "fields": (
                    "is_important",
                    "is_active",
                )
            },
        ),
        (
            "System Information",
            {
                "fields": (
                    "created_at",
                )
            },
        ),
    )


# ============================================================
# ACHIEVEMENTS
# ============================================================

@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "year",
        "is_featured",
        "is_active",
        "created_at",
    )

    list_filter = (
        "is_featured",
        "is_active",
        "year",
    )

    search_fields = (
        "title",
        "description",
    )

    readonly_fields = (
        "image_preview",
        "created_at",
    )

    ordering = (
        "-year",
        "-created_at",
    )

    fieldsets = (
        (
            "Achievement Information",
            {
                "fields": (
                    "title",
                    "description",
                    "year",
                )
            },
        ),
        (
            "Achievement Image",
            {
                "fields": (
                    "image",
                    "image_preview",
                )
            },
        ),
        (
            "Visibility",
            {
                "fields": (
                    "is_featured",
                    "is_active",
                )
            },
        ),
        (
            "System Information",
            {
                "fields": (
                    "created_at",
                )
            },
        ),
    )

    def image_preview(self, obj):
        return image_preview(obj.image)

    image_preview.short_description = "Image Preview"


# ============================================================
# ADMISSION ENQUIRIES
# ============================================================

@admin.register(AdmissionEnquiry)
class AdmissionEnquiryAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "student_name",
        "class_applying_for",
        "phone",
        "email",
        "created_at",
    )

    list_filter = (
        "class_applying_for",
        "created_at",
    )

    search_fields = (
        "name",
        "student_name",
        "email",
        "phone",
        "class_applying_for",
        "message",
    )

    readonly_fields = (
        "created_at",
    )

    ordering = (
        "-created_at",
    )

    date_hierarchy = "created_at"

    list_per_page = 25

    fieldsets = (
        (
            "Parent / Guardian",
            {
                "fields": (
                    "name",
                    "email",
                    "phone",
                )
            },
        ),
        (
            "Student Information",
            {
                "fields": (
                    "student_name",
                    "class_applying_for",
                    "message",
                )
            },
        ),
        (
            "System Information",
            {
                "fields": (
                    "created_at",
                )
            },
        ),
    )


# ============================================================
# CONTACT MESSAGES
# ============================================================

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "email",
        "phone",
        "subject",
        "read_status",
        "created_at",
    )

    list_filter = (
        "is_read",
        "created_at",
        "subject",
    )

    search_fields = (
        "name",
        "email",
        "phone",
        "subject",
        "message",
    )

    readonly_fields = (
        "created_at",
    )

    ordering = (
        "is_read",
        "-created_at",
    )

    date_hierarchy = "created_at"

    list_per_page = 25

    actions = (
        "mark_as_read",
        "mark_as_unread",
    )

    fieldsets = (
        (
            "Contact Information",
            {
                "fields": (
                    "name",
                    "email",
                    "phone",
                    "subject",
                )
            },
        ),
        (
            "Message",
            {
                "fields": (
                    "message",
                )
            },
        ),
        (
            "Status",
            {
                "fields": (
                    "is_read",
                )
            },
        ),
        (
            "System Information",
            {
                "fields": (
                    "created_at",
                )
            },
        ),
    )

    @admin.display(
        description="Status",
        ordering="is_read",
    )
    def read_status(self, obj):

        if obj.is_read:
            return format_html(
                '<span style="'
                'display:inline-block;'
                'padding:4px 10px;'
                'border-radius:999px;'
                'background:#e8f7ee;'
                'color:#167a45;'
                'font-weight:600;'
                'font-size:12px;'
                '">'
                "READ"
                "</span>"
            )

        return format_html(
            '<span style="'
            'display:inline-block;'
            'padding:4px 10px;'
            'border-radius:999px;'
            'background:#fff4e5;'
            'color:#a85b00;'
            'font-weight:600;'
            'font-size:12px;'
            '">'
            "UNREAD"
            "</span>"
        )

    @admin.action(description="Mark selected messages as read")
    def mark_as_read(self, request, queryset):

        updated = queryset.update(
            is_read=True
        )

        self.message_user(
            request,
            f"{updated} message(s) marked as read.",
            messages.SUCCESS,
        )

    @admin.action(description="Mark selected messages as unread")
    def mark_as_unread(self, request, queryset):

        updated = queryset.update(
            is_read=False
        )

        self.message_user(
            request,
            f"{updated} message(s) marked as unread.",
            messages.SUCCESS,
        )