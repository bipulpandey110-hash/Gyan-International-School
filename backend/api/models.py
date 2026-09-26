from django.db import models


class SchoolInfo(models.Model):
    name = models.CharField(max_length=255)
    short_name = models.CharField(max_length=100, blank=True)
    tagline = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    classes = models.CharField(
        max_length=100,
        blank=True,
        help_text="Example: Classes 0 to 10",
    )

    address = models.TextField(blank=True)
    phone = models.CharField(max_length=50, blank=True)
    email = models.EmailField(blank=True)

    youtube_url = models.URLField(blank=True)
    maps_url = models.URLField(blank=True)

    established_year = models.PositiveIntegerField(
        null=True,
        blank=True,
    )

    logo = models.ImageField(
        upload_to="school/",
        blank=True,
        null=True,
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "School Information"
        verbose_name_plural = "School Information"

    def __str__(self):
        return self.name


class Leadership(models.Model):
    ROLE_CHOICES = [
        ("principal", "Principal"),
        ("director", "Director"),
    ]

    name = models.CharField(max_length=150)
    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
    )
    designation = models.CharField(
        max_length=150,
        blank=True,
    )

    photo = models.ImageField(
        upload_to="leadership/",
        blank=True,
        null=True,
    )

    message = models.TextField(blank=True)
    bio = models.TextField(blank=True)

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["role", "name"]

    def __str__(self):
        return f"{self.name} - {self.get_role_display()}"


class Faculty(models.Model):
    name = models.CharField(max_length=150)
    designation = models.CharField(max_length=150)
    subject = models.CharField(
        max_length=150,
        blank=True,
    )
    qualification = models.CharField(
        max_length=255,
        blank=True,
    )

    photo = models.ImageField(
        upload_to="faculty/",
        blank=True,
        null=True,
    )

    bio = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class AcademicProgram(models.Model):
    title = models.CharField(max_length=200)
    class_name = models.CharField(
        max_length=100,
        blank=True,
        help_text="Example: Primary, Middle School, Class 9-10",
    )

    description = models.TextField(blank=True)
    subjects = models.TextField(blank=True)
    highlights = models.TextField(blank=True)

    image = models.ImageField(
        upload_to="academics/",
        blank=True,
        null=True,
    )

    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["title"]

    def __str__(self):
        return self.title


class Facility(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)

    image = models.ImageField(
        upload_to="facilities/",
        blank=True,
        null=True,
    )

    icon = models.CharField(
        max_length=100,
        blank=True,
    )

    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["title"]

    def __str__(self):
        return self.title


class GalleryImage(models.Model):
    title = models.CharField(max_length=200)

    image = models.ImageField(
        upload_to="gallery/",
    )

    category = models.CharField(
        max_length=100,
        blank=True,
    )

    description = models.TextField(blank=True)

    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    def __str__(self):
        return self.title


class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)

    event_date = models.DateField()

    location = models.CharField(
        max_length=200,
        blank=True,
    )

    image = models.ImageField(
        upload_to="events/",
        blank=True,
        null=True,
    )

    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    def __str__(self):
        return self.title


class Notice(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    notice_date = models.DateField()

    attachment = models.FileField(
        upload_to="notices/",
        blank=True,
        null=True,
    )

    is_important = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    class Meta:
        ordering = [
            "-notice_date",
            "-created_at",
        ]

    def __str__(self):
        return self.title


class Achievement(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)

    year = models.PositiveIntegerField(
        null=True,
        blank=True,
    )

    image = models.ImageField(
        upload_to="achievements/",
        blank=True,
        null=True,
    )

    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    def __str__(self):
        return self.title


class AdmissionEnquiry(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=50)

    student_name = models.CharField(
        max_length=150,
    )

    class_applying_for = models.CharField(
        max_length=50,
    )

    message = models.TextField(
        blank=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} - {self.student_name}"


class ContactMessage(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()

    phone = models.CharField(
        max_length=50,
        blank=True,
    )

    subject = models.CharField(
        max_length=200,
        blank=True,
    )

    message = models.TextField()

    is_read = models.BooleanField(
        default=False,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    def __str__(self):
        return (
            f"{self.name} - "
            f"{self.subject or 'Contact Message'}"
        )