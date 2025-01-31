import React from 'react';
import { TeamMember } from '../types';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group"
    >
      <div className="relative">
        <div className="aspect-w-3 aspect-h-4">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex space-x-3">
              <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
        <p className="text-accent-purple font-medium mb-4">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </motion.div>
  );
}