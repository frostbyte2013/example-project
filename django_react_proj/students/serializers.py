# from rest_framework import serializers
# from students.models import Student
# from django.db import models

# class StudentSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Student
#         fields = '__all__'




# from rest_framework import serializers
# from .models import Student

# class StudentSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Student 
#         fields = ('pk', 'name', 'email', 'document', 'phone', 'registrationDate')
        
from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student 
        fields = ('pk', 'name', 'email', 'document', 'phone', 'registrationDate')