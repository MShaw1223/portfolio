import { Component } from '@angular/core';
import { ServicesCard } from './services.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-card',
  imports: [CommonModule],
  templateUrl: './services-card.component.html',
  styleUrl: './services-card.component.css',
})
export class ServicesCardComponent {
  services: ServicesCard[] = [
    {
      header: 'Hosting & Deployment Platforms',
      fields: ['Vercel', 'GitHub Pages', 'NeonDB', 'Supabase', 'Azure', 'AWS'],
    },
    {
      header: 'Web Frameworks & Application Runtimes',
      fields: ['React', 'Angular', 'NextJS', 'Django', 'ASP.NET Core'],
    },
    {
      header: 'Source Control & Code Repositories',
      fields: ['Git', 'GitHub', 'GitLab'],
    },
    {
      header: 'Databases & Data Storage',
      fields: ['SQLite3', 'PostgreSQL', 'MySQL', 'MSSQL'],
    },
    {
      header: 'Infrastructure as Code & DevOps',
      fields: ['Docker', 'Jenkins', 'Ansible', 'Kubernetes', 'Terraform'],
    },
    {
      header: 'Monitoring & Observability',
      fields: ['Grafana'],
    },
    {
      header: 'Operating Systems & Environments',
      fields: ['Linux', 'macOS', 'Windows'],
    },
  ];
}
