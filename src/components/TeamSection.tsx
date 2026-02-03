import { motion } from "motion/react";
import { GraduationCap, MapPin, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

export function TeamSection() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = (email: string) => {
    // Fallback method for environments where Clipboard API is blocked
    const textarea = document.createElement('textarea');
    textarea.value = email;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      document.execCommand('copy');
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const teamMembers = [
    {
      name: "Devid Sokun",
      role: "Lead Developer & Designer",
      initials: "DS",
      color: "from-blue-500 to-cyan-500",
      email: "devid.sokun13@gmail.com"
    },
    {
      name: "Pheakna Choun",
      role: "Developer & Researcher",
      initials: "PC",
      color: "from-purple-500 to-pink-500",
      email: "pheaknaa12062005@gmail.com"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full px-5 py-2 mb-4 border border-blue-200">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">Meet The Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Project Creators
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Developed with passion by students from Norton University
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all border border-gray-100"
            >
              <div className="flex items-center gap-6">
                {/* Avatar */}
                <div
                  className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
                >
                  <span className="text-3xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  
                  {/* Email Link - Clickable */}
                  <a 
                    href={`mailto:${member.email}`}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('Email link clicked:', member.email);
                      window.location.href = `mailto:${member.email}`;
                    }}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors w-fit mb-2 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="underline">{member.email}</span>
                  </a>

                  {/* Copy Email Button */}
                  <button
                    onClick={() => copyToClipboard(member.email)}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-green-600 transition-colors"
                  >
                    {copiedEmail === member.email ? (
                      <>
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-green-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* University Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 md:p-10 shadow-2xl text-white relative overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center flex-shrink-0"
              >
                <GraduationCap className="w-10 h-10 text-white" />
              </motion.div>

              {/* Content */}
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Norton University
                </h3>
                <p className="text-white/90 text-lg mb-3">
                  Department of Computer Studies, College of Science
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-white/80">
                  <MapPin className="w-4 h-4" />
                  <span>Phnom Penh, Cambodia</span>
                </div>
              </div>

              {/* Logo Placeholder */}
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-white">NU</span>
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 pt-8 border-t border-white/20 text-center"
            >
              <p className="text-white/80 text-sm md:text-base">
                This project was developed as part of our academic curriculum to demonstrate
                interactive educational technology and sustainable learning solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Project Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md border border-gray-200">
            <span className="text-2xl">🎓</span>
            <div className="text-left">
              <p className="text-xs text-gray-500 font-medium">Academic Project</p>
              <p className="text-sm font-bold text-gray-800">Literacy Starter Kit 2026</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}