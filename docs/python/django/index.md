# Django has admin UI...

## Installation 
`python3.8 -m pip install Django`  
`django-admin startproject mysite`  
`python3.8 manage.py runserver`  

To change the port  
`python3.8 manage.py runserver 8080`

Create new directory for our app __polls__  
`python3.8 manage.py startapp polls`

## Routing
`mysite/urls.py`
```py 
urlpatterns = [
    path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls),
]
```
`polls/urls.py`
```py
from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
]
```

::: tip When to use include
You should always use include() when you include other URL patterns. admin.site.urls is the only exception to this.
:::
::: details path(route, view, name, kwargs)
- _route_ - string that contains a URL pattern  
- _view_  
- _name_  
- _kwargs_  
:::

## Database
By default it's using SQLite.  For the default migrations, that come with Django:  
`python3.8 manage.py migrate` 

## Models
::: tip Models and migrations
Migrations are entirely derived from your models file, and are essentially a history that Django can roll through to update your database schema to match your current models
:::
`polls/models.py` 
```py
from django.db import models
class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    def __str__(self):
        return self.question_text
class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    def __str__(self):
        return self.choice_text
```
- Each field is represented by an instance of a Field class 
- You can use an optional first positional argument to a Field to designate a human-readable name, as is the case with 'date published'
- Some Field classes have required arguments, CharField requires max_length, used in db schema and validation. Of course, there are more arguments, such as default.
- [ForeignKey](https://docs.djangoproject.com/en/3.0/ref/models/fields/#django.db.models.ForeignKey) - for reference, because I have problems with relations.

We also need to include in `mysite/settings.py`
```py
INSTALLED_APPS = ['polls.apps.PollsConfig', ...]
```
`python3.8 manage.py makemigrations polls`
::: tip makemigrations
You’re telling Django that you’ve made some changes to your models and that you’d like the changes to be stored as a migration. It generates a file __polls/migrations/0001_initial.py__. They are designed to be editable.
:::
`python3.8 manage.py sqlmigrate polls 0001`
::: warning SQL representation of our model
The __sqlmigrate__ command takes migration names and returns their SQL
::: details SQL 
```sql
BEGIN;
--
-- Create model Question
--
CREATE TABLE "polls_question" 
(
    "id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
    "question_text" varchar(200) NOT NULL, 
    "pub_date" datetime NOT NULL
);
--
-- Create model Choice
--
CREATE TABLE "polls_choice" 
(
"id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
"choice_text" varchar(200) NOT NULL, 
"votes" integer NOT NULL, 
"question_id" integer NOT NULL REFERENCES "polls_question" ("id") DEFERRABLE INITIALLY DEFERRED
);
CREATE INDEX "polls_choice_question_id_c5b4b260" ON "polls_choice" ("question_id");
COMMIT;
```
::: 
::: danger VERY IMPORTANT
The `sqlmigrate` command doesn’t actually run the migration on your database - instead, it prints it to the screen so that you can see what SQL Django thinks is required.  
It’s useful for checking what Django is going to do or if you have database administrators who require SQL scripts for changes.  
You should also first run `python manage.py check` - checks if there are any problems without making migrations or touching the db
:::
- Primary keys (IDs) are added automatically.
- By convention, Django appends "_id" to the foreign key field name.
  
__Actually run the migrations__  
`python3.8 manage.py migrate`

## Shell
`python3.8 manage.py shell`
With this command you have access to [db api](https://docs.djangoproject.com/en/3.0/topics/db/queries/)
::: details Interaction example
```bash
>>> from polls.models import Choice, Question  # Import the model classes we just wrote.

# No questions are in the system yet.
>>> Question.objects.all()
<QuerySet []>

# Create a new Question.
# Support for time zones is enabled in the default settings file, so
# Django expects a datetime with tzinfo for pub_date. Use timezone.now()
# instead of datetime.datetime.now() and it will do the right thing.
>>> from django.utils import timezone
>>> q = Question(question_text="What's new?", pub_date=timezone.now())

# Save the object into the database. You have to call save() explicitly.
>>> q.save()

# Now it has an ID.
>>> q.id
1

# Access model field values via Python attributes.
>>> q.question_text
"What's new?"
>>> q.pub_date
datetime.datetime(2012, 2, 26, 13, 0, 0, 775217, tzinfo=<UTC>)

# Change values by changing the attributes, then calling save().
>>> q.question_text = "What's up?"
>>> q.save()

# objects.all() displays all the questions in the database.
>>> Question.objects.all()
<QuerySet [<Question: What's up>]>
>>> from polls.models import Choice, Question

# Make sure our __str__() addition worked.
>>> Question.objects.all()
<QuerySet [<Question: What's up?>]>

# Django provides a rich database lookup API that's entirely driven by
# keyword arguments.
>>> Question.objects.filter(id=1)
<QuerySet [<Question: What's up?>]>
>>> Question.objects.filter(question_text__startswith='What')
<QuerySet [<Question: What's up?>]>

# Get the question that was published this year.
>>> from django.utils import timezone
>>> current_year = timezone.now().year
>>> Question.objects.get(pub_date__year=current_year)
<Question: What's up?>

# Request an ID that doesn't exist, this will raise an exception.
>>> Question.objects.get(id=2)
Traceback (most recent call last):
    ...
DoesNotExist: Question matching query does not exist.

# Lookup by a primary key is the most common case, so Django provides a
# shortcut for primary-key exact lookups.
# The following is identical to Question.objects.get(id=1).
>>> Question.objects.get(pk=1)
<Question: What's up?>

# Make sure our custom method worked.
>>> q = Question.objects.get(pk=1)
>>> q.was_published_recently()
True

# Give the Question a couple of Choices. The create call constructs a new
# Choice object, does the INSERT statement, adds the choice to the set
# of available choices and returns the new Choice object. Django creates
# a set to hold the "other side" of a ForeignKey relation
# (e.g. a question's choice) which can be accessed via the API.
>>> q = Question.objects.get(pk=1)

# Display any choices from the related object set -- none so far.
>>> q.choice_set.all()
<QuerySet []>

# Create three choices.
>>> q.choice_set.create(choice_text='Not much', votes=0)
<Choice: Not much>
>>> q.choice_set.create(choice_text='The sky', votes=0)
<Choice: The sky>
>>> c = q.choice_set.create(choice_text='Just hacking again', votes=0)

# Choice objects have API access to their related Question objects.
>>> c.question
<Question: What's up?>

# And vice versa: Question objects get access to Choice objects.
>>> q.choice_set.all()
<QuerySet [<Choice: Not much>, <Choice: The sky>, <Choice: Just hacking again>]>
>>> q.choice_set.count()
3

# The API automatically follows relationships as far as you need.
# Use double underscores to separate relationships.
# This works as many levels deep as you want; there's no limit.
# Find all Choices for any question whose pub_date is in this year
# (reusing the 'current_year' variable we created above).
>>> Choice.objects.filter(question__pub_date__year=current_year)
<QuerySet [<Choice: Not much>, <Choice: The sky>, <Choice: Just hacking again>]>

# Let's delete one of the choices. Use delete() for that.
>>> c = q.choice_set.filter(choice_text__startswith='Just hacking')
>>> c.delete()
```
:::

## Django admin
[Philosophy](https://docs.djangoproject.com/en/3.0/intro/tutorial02/#introducing-the-django-admin)

Create a user.
`python3.8 manage.py createsuperuser`
[Admin panel](http://127.0.0.1:8000/admin/)

### Make the poll app modifiable in the admin
`polls/admin.py`
```py
from django.contrib import admin
from .models import Question
admin.site.register(Question)
```
The result is that we can crud questions from the admin UI.
- This form is automatically generated from the __Question__ model
- Each Field corresponds to HTML input widget

