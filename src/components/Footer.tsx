import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-primary-light">
              Empowering careers through quality education and practical skills development.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="text-primary-light hover:text-white">Courses</Link></li>
              <li><Link to="/about" className="text-primary-light hover:text-white">About Us</Link></li>
              <li><Link to="/membership" className="text-primary-light hover:text-white">Membership</Link></li>
              <li><Link to="/contact" className="text-primary-light hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-primary-light">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@edutech.com
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                123 Education St, Tech City
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-light hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-light hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-light hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-light hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-light/20 mt-8 pt-8 text-center text-primary-light">
          <p>&copy; {new Date().getFullYear()} EduTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}