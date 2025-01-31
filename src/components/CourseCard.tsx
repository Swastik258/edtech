import React from 'react';
import { Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Course } from '../types';
import { motion } from 'framer-motion';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
    >
      <div className="relative h-48">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-white/90 text-primary backdrop-blur-sm">
            {course.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
          <div className="flex items-center text-white/90 text-sm space-x-4">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {course.duration}
            </span>
            <span className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              {course.price}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-6 line-clamp-2">{course.description}</p>
        <button className="w-full bg-primary text-white py-3 px-6 rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center group">
          Learn More
          <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}