from leads.models import Lead
from rest_framework import permissions, viewsets

from .serializers import LeadSerializer


class LeadViewSet(viewsets.ModelViewSet):
	permission_classes = [
		permissions.IsAuthenticated # Только для авторизированных
	]
	serializer_class = LeadSerializer

	def get_queryset(self):
		return self.request.user.leads.all()

	def perform_create(self, serializer):
		serializer.save(owner = self.request.user)
