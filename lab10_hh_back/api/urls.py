from django.urls import path
from . import views
from .views import (
    company_list,
    company_detail,
    vacancies_by_company,
    vacancy_list,
    vacancy_detail,
    top_ten_vacancies
)
urlpatterns = [
    path('companies/', company_list.as_view(), name='company-list'),
    path('companies/<int:id>/', company_detail.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', vacancies_by_company.as_view(), name='company-vacancies'),

   
    path('vacancies/', vacancy_list, name='vacancy-list'),

    path('vacancies/<int:id>/', vacancy_detail.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', top_ten_vacancies.as_view(), name='top-ten-vacancies'),
]