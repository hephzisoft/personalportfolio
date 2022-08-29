from django import template
from django.urls import reverse

register = template.Library()

@register.simple_tag
def anchor(home, about,):
    return reverse(home) + '#' + about
    


@register.simple_tag
def anchor(home, contact):
    return reverse(home) + '#' + contact