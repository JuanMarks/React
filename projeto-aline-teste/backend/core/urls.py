from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('meetings.urls')),
    path('', include('feedbacks.urls')),
    path('', include('log.urls')),
    path('', include('pdi.urls')),
    path('',include('user.urls')),
]

