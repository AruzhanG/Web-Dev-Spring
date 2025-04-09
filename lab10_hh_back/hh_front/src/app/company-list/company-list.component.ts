import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { Vacancy } from '../models/vacancy';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompanyId: number | null = null;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  onSelectCompany(id: number): void {
    this.selectedCompanyId = id;
    this.companyService.getVacanciesByCompany(id).subscribe(data => {
      this.vacancies = data;
    });
  }
}
