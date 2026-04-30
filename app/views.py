from django.shortcuts import get_object_or_404, render,redirect
from . import models

#readlist
def users_list(request):
    users = models.User.objects.all()
    return render(request, 'index.html', context={'users': users})

#readone
def user_view(request, slug):
    user = models.User.objects.get(slug=slug)
    return render(request, 'user_view.html', {'users': user})

#create
def user_create(request):
    if request.POST:
        name=request.POST.get('name')
        surename=request.POST.get('surename')
        age=request.POST.get('age')
        picture=request.FILES.get('picture')

        models.User.objects.create(
            ism=name, 
            familiya=surename, 
            yosh=age, 
            picture=picture
)
        return redirect('users_list')
    return render(request, 'user_create.html')


def user_update(request, slug):
    user = get_object_or_404(models.User, slug=slug)

    if request.method == "POST":
        user.ism = request.POST.get('name')
        user.familiya = request.POST.get('surename')
        user.yosh = request.POST.get('age')

        if request.FILES.get('picture'):
            user.picture = request.FILES.get('picture')

        user.save()

        return redirect(f'/user/{user.slug}/')

    return render(request, 'user_update.html', {'user': user})

#delete
def user_delete(request, slug):
    user = get_object_or_404(models.User, slug=slug)
    if request.POST:
        user.delete()
        return redirect('users_list')
    return render(request, 'user_delete.html', {'user': user})