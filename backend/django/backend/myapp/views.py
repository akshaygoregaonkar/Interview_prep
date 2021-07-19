from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import *

# Create your views here.

def test(request):
    return JsonResponse(data={'test':'this is test message'})
@csrf_exempt
def all_blogs(request):
    if request.method=="GET":
        blogs=Blog.objects.all()
        res=[blog.to_json() for blog in blogs]
        print(res)
        return JsonResponse(data={"all_blogs":res})
    elif request.method=="POST":
        req_data=json.loads(request.body)
        print(req_data)
        Blog.objects.create(**req_data)
        newBlog=Blog.objects.last()
        return JsonResponse(data=newBlog.to_json())
@csrf_exempt
def get_update_delete_blog(request,id):
    if request.method=="OPTIONS":
        return JsonResponse(data={"allowed_methods":['GET','PUT','DELETE']})
    elif request.method=="GET":
        blog=Blog.objects.get(id=id)
        return JsonResponse(data=blog.to_json())
    elif request.method=="PUT":
        req_data=json.loads(request.body)
        print(req_data.get('title'))
        if not req_data.get('author'):
            return HttpResponse('bad request')
        blog=Blog.objects.get(id=id)
        update=blog.to_json()
        update.title=req_data.get('title')
        update.author=req_data.get('author')
        update.save()

        return JsonResponse(data=update.to_json())


