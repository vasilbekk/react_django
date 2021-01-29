from django.urls import include, path
from knox import views as knox_views

from .api import LoginAPI, RegisterAPI, UserAPI

urlpatterns = [
	path('api/auth/login/', LoginAPI.as_view()),
	path('api/auth/user/', UserAPI.as_view()),
	path('api/auth/register/', RegisterAPI.as_view()),
	path("api/auth/", include('knox.urls')),
	path("api/auth/logout/", knox_views.LogoutView.as_view()),
	path('api/auth/logoutall', knox_views.LogoutAllView.as_view())
]
