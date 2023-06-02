from django.shortcuts import render
from django.http import HTTPResponse

# Create your views here.
def main(request):
    return HTTPResponse('Hello')