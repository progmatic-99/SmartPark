from django.shortcuts import render
from .models import prime
from django.views import generic
from django.views.generic.edit import CreateView, UpdateView, DeleteView


# help section or contact
def contact(request):
    return render(request, "booking/contact.html")


# home page
class IndexView(generic.ListView):
    model = prime
    template_name = "booking/index.html"
    context_object_name = "all_loactions"

    def get_queryset(self):
        return prime.objects.all()


# booking page
def advance(request):
    return render(request, "booking/advance.html")
