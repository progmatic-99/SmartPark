from django.contrib.auth import authenticate, login
from django.shortcuts import render
from django.views import generic
from django.views.generic import FormView

from .login import LoginForm
from .models import prime


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


class LoginView(FormView):
    form_class = LoginForm
    template_name = "booking/login.html"

    def get(self, request):
        form = self.form_class(None)
        return render(request, self.template_name, {"form": form})

    def post(self, request):
        form = self.form_class(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(username=username, password=password)
            print(user)
            if user is not None:
                login(request, user)
                return render(request, 'booking/dashboard.html', {"user":user})
        return render(request, self.template_name, {"form": form})
