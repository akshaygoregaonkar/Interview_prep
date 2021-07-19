from  django.urls import  path
from .views import *
urlpatterns=[
    path('test/',test ,name='test'),
    path('allblog/',all_blogs,name="allblog"),
    path('blog/<int:id>/' ,get_update_delete_blog,name="get_update_delete")
]