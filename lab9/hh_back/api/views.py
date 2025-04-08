from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

@api_view(['GET'])
def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def company_detail(request,id):
    try:
        company = Company.object.get(id=id)
    except Company.DoesNotExist:
        return Response(
            {
                "error": "Company not found"
            },
            status = 404
        )
    serializer = CompanySerializer(company)
    return Response(serializer.data)

@api_view(['GET'])
def vacancies_by_company(request,id):
    try:
        company = Company.object.get(id=id)
    except Company.DoesNotExist:
        return Response(
            {
                "error": "Company not found"
            },
            status = 404
        )
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies,many=True)
    return Response(request,id)

@api_view(['GET'])
def vacancy_list(request):
    vacancies = Vacancy.object.all()
    serializer = VacancySerializer(vacancies, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def vacancy_detail(request,id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist:
        return Response(
            {
                "error": "Vacancy does not found"
            },
            status = 404
        )
    serializer = VacancySerializer(vacancy)
    return Response(serializer.data)

@api_view(['GET'])
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies,many = True)
    return Response(serializer.data)