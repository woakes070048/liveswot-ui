"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from swot import views
from rest_framework.urlpatterns import format_suffix_patterns



urlpatterns = [
	url(r'^admin/', admin.site.urls),
	url(
        r'^api/swot-item/$',
        views.SwotItemList.as_view(),
        name='get_post_delete_swot_item',
    ),
	url(
        r'^api/swot-item/(?P<pk>[0-9]+)/$',
        views.SwotItemDetail.as_view(),
        name='delete_swot_item',
    ),
    url(
        r'^api/swot-item/(?P<pk>[0-9]+)/vote/$',
        views.VoteList.as_view(),
        name='get_post_vote',
    ),
]

urlpatterns = format_suffix_patterns(urlpatterns)
