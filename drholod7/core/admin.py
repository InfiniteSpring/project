from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Orders


admin.site.register(Orders)
admin.site.register(CustomUser)

class CustomUserAdmin(UserAdmin):

    model = CustomUser
    # add_form = CustomUserCreationForm
    # form = CustomUserChangeForm

    list_display = ['username', 'fio', 'email', 'user_groups_display', 'is_staff']

    # Add user
    add_fieldsets = (
        *UserAdmin.add_fieldsets,
        (
            'Custom fields',
            {
                'fields': (
                    'username',
                    'fio',
                    'email',
                    'groups',
                )
            }
        )
    )

    # Edit user
    fieldsets = (
        *UserAdmin.fieldsets,
        (
            'Custom fields',
            {
                'fields': (
                    'username',
                    'fio',
                    'email',
                )
            }
        )
    )

    def user_groups_display(self, user):
        try:
            groups = []
            for group in user.groups.all():
                groups.append(group.name)
            return ', '.join(groups)
        except:
            return '-'