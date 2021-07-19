from django.db import models

# Create your models here.
class Blog(models.Model):
    title=models.CharField(max_length=50)
    author=models.CharField(max_length=50)
    content=models.TextField()
    created_at=models.DateTimeField(auto_now=True)
    def to_json(self):
        return {"title":self.title,"author":self.author,"content":self.content,"created_at":self.created_at}
    

class Employee(models.Model):
    name=models.CharField(max_length=40)
    email=models.EmailField()
    salary=models.IntegerField()

    