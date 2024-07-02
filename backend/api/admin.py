from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser,HouseRent, UsedStuffSale, HomemadeFood, DailyNews, CustomUser

admin.site.register(HouseRent)
admin.site.register(UsedStuffSale)
admin.site.register(HomemadeFood)
admin.site.register(DailyNews)


class CustomUserAdmin(UserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name',
         'phone_number', 'address', 'sex', 'date_of_birth')}),
        ('Permissions', {'fields': ('is_active', 'is_staff',
         'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)


admin.site.register(CustomUser, CustomUserAdmin)
