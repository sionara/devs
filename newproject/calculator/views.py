from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
# Create your views here.
def homepage(request):
    template = loader.get_template("calculator/index.html")
    return HttpResponse(template.render())

def boxtest(request):
    template = loader.get_template("calculator/position_text.html")
    return HttpResponse(template.render())