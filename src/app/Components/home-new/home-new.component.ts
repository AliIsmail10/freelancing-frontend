import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-new',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './home-new.component.html',
  styleUrl: './home-new.component.css'
})
export class HomeNewComponent {
  searchTerm = '';

  trendingTags = [
    'website development',
    'architecture & interior design',
    'UGC videos',
    'presentation design'
  ];

  featuredProjects = [
    {
      id: 1,
      title: 'Build a Responsive Landing Page',
      projectType: 'Bidding',
      description: 'Looking for a frontend developer to build a modern, responsive landing page for our new product.',
      experienceLevel: 'Intermediate',
      minimumPrice: 200,
      maximumprice: 500,
      numOfBids: 12,
      projectSkills: ['HTML', 'CSS', 'Angular']
    },
    {
      id: 2,
      title: 'E-commerce Website Backend',
      projectType: 'Fixed Price',
      description: 'Need a backend developer to create APIs for an e-commerce platform.',
      experienceLevel: 'Expert',
      minimumPrice: 1000,
      maximumprice: 2000,
      numOfBids: 8,
      projectSkills: ['Node.js', 'Express', 'MongoDB']
    },
    {
      id: 3,
      title: 'Logo & Brand Identity Design',
      projectType: 'Bidding',
      description: 'Seeking a creative designer for a new brand identity and logo.',
      experienceLevel: 'Beginner',
      minimumPrice: 100,
      maximumprice: 300,
      numOfBids: 15,
      projectSkills: ['Logo Design', 'Branding', 'Illustrator']
    }
  ];

  categories = [
    { name: 'Programming & Tech', icon: 'fa fa-laptop-code', description: 'Web, mobile, and software development.' },
    { name: 'Graphics & Design', icon: 'fa fa-paint-brush', description: 'Logos, branding, and creative design.' },
    { name: 'Digital Marketing', icon: 'fa fa-bullhorn', description: 'SEO, social media, and advertising.' },
    { name: 'Writing & Translation', icon: 'fa fa-pen-nib', description: 'Content, copywriting, and translation.' },
    { name: 'Video & Animation', icon: 'fa fa-video', description: 'Explainers, animation, and video editing.' },
    { name: 'Music & Audio', icon: 'fa fa-music', description: 'Voice over, mixing, and audio production.' },
    { name: 'Business', icon: 'fa fa-briefcase', description: 'Business plans, consulting, and research.' },
    { name: 'Consulting', icon: 'fa fa-user-tie', description: 'Strategy, operations, and management.' }
  ];

  testimonials = [
    {
      name: 'Sarah M.',
      role: 'Startup Founder',
      avatar: 'assets/images/users/user1.jpg',
      text: 'This platform helped me find the perfect developer for my app. Fast, reliable, and professional!'
    },
    {
      name: 'James L.',
      role: 'Marketing Director',
      avatar: 'assets/images/users/user2.jpg',
      text: 'We got our branding and website done in record time. Highly recommended for any business!'
    },
    {
      name: 'Aisha K.',
      role: 'Freelance Designer',
      avatar: 'assets/images/users/user3.jpg',
      text: 'I love working here. The clients are great and the payment system is secure and easy.'
    }
  ];

  onSearch() {
    // Implement your search logic or navigation here
    alert('Searching for: ' + this.searchTerm);
  }
}
