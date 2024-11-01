import React from 'react';
import Icons from '../../assets/Icons';
import ProfileImage from "../../assets/images/jack2.jpg"

const Home = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e8e6e1' }}> {/* Custom beige background color */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Content Section */}
        <div className="relative">
         
          
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-start gap-12 pt-16">
            {/* Image Section */}
            <div className="w-72 h-72 rounded-full overflow-hidden">
              <img 
                src={ProfileImage} 
                alt="Jaswant Kushwaha" 
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Name and Description Section */}
            <div className="flex-1">
              <h1 className="text-6xl font-bold mb-6 tracking-wider">
                JASWANT<br />KUSHWAHA
              </h1>
              <p className="text-lg max-w-2xl leading-relaxed">
              Passionate and skilled Web and App Developer eager to leverage technical expertise and hands-on experience in real-world projects. Driven to collaborate within dynamic teams, learning from industry leaders while deepening skills in MERN, React Native, Django, SWIFT UI and other cutting-edge technologies. Focused on creating impactful solutions and continuously advancing in the field.
              </p>

              {/* Contact Links */}
              <div className="mt-8 flex flex-wrap gap-6">
                <a href="tel:+918766263593" 
                   className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                  <Icons.Phone /> +918766263593
                </a>
                <a href="mailto:jkushwaha1010@gmail.com" 
                   className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                  <Icons.Mail /> jkushwaha1010@gmail.com
                </a>
                <a href="https://github.com/jaswant2111058" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors">
                  <Icons.GitHub /> GitHub
                </a>
              </div>

              {/* Additional Links */}
              <div className="mt-6 flex flex-wrap gap-6">
                <a href="https://jaswant-portfolio.onrender.com" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-gray-700 hover:text-black">
                  <Icons.ExternalLink /> Portfolio Website
                </a>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="bg-transparent">
              <h3 className="text-xl font-medium mb-2">Bachelor In Technology (Computer Science)</h3>
              <p className="text-gray-700">Ajay Kumar Garg Engineering College</p>
              <p className="text-gray-600">2021 - 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;