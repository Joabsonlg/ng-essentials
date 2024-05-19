import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  features = [
    {
      title: 'Dashboard',
      description: 'Personalized dashboard with all the information you need.',
      link: '/docs/dashboard',
    },
    {
      title: 'Forms',
      description: 'Create and manage forms for your organization.',
      link: '/docs/forms',
    },
    {
      title: 'Tables',
      description: 'View and manage data in tables.',
      link: '/docs/tables',
    },
    {
      title: 'Alerts',
      description: 'View and manage alerts for your organization.',
      link: '/docs/alerts',
    },
    {
      title: 'Buttons',
      description: 'View and manage buttons for your organization.',
      link: '/docs/buttons',
    },
    {
      title: 'Cards',
      description: 'View and manage cards for your organization.',
      link: '/docs/cards',
    },
    {
      title: 'Modals',
      description: 'View and manage modals for your organization.',
      link: '/docs/modals',
    },
    {
      title: 'Colors',
      description: 'View and manage colors for your organization.',
      link: '/docs/colors',
    },
    {
      title: 'Grid',
      description: 'View and manage grid for your organization.',
      link: '/docs/grid',
    },
  ]
}
