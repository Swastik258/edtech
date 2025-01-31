import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Trophy, Briefcase, Star, CheckCircle, Building } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {/* Power Your Career<br />With Industry-Ready Skills */}
              Power Your Career
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join 500,000+ professionals advancing their careers with our industry-recognized certifications
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
                Explore Programs
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                Talk to an Expert
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500K+</div>
                <div className="text-blue-100">Learners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">300+</div>
                <div className="text-blue-100">Hiring Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">45%</div>
                <div className="text-blue-100">Average Salary Hike</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">92%</div>
                <div className="text-blue-100">Placement Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-lg text-gray-600">TRUSTED BY LEADING COMPANIES</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <Building className="w-12 h-12 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose EduTech?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the skills you need to succeed with our comprehensive learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: <Star className="h-8 w-8" />,
                title: "Industry-Recognized Certification",
                description: "Earn certificates valued by top employers worldwide"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "1:1 Mentorship",
                description: "Get personalized guidance from industry experts"
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Live Learning",
                description: "Interactive sessions with real-world projects"
              },
              {
                icon: <Trophy className="h-8 w-8" />,
                title: "Career Support",
                description: "Resume building and interview preparation"
              },
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "Job Guarantee",
                description: "100% job guarantee or money back"
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Flexible Learning",
                description: "Learn at your own pace with lifetime access"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-block p-3 bg-primary-light/10 rounded-lg text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our wide range of industry-aligned programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300 shadow-lg">
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our alumni who transformed their careers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 1}`}
                    alt="Student"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-primary">John Doe</h4>
                    <p className="text-gray-600">Data Scientist at Google</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The program helped me transition from a non-tech role to a data scientist position. The mentorship and career support were invaluable."
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}