from rest_framework import routers

from .api import LeadViewSet

# Автоматически создает пути и методы для создания, удаления, измения модели
router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')

urlpatterns = router.urls
