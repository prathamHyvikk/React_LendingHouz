import React from 'react';
import './Utility.css';

const HowItWorks = ({ steps, bgColor, maintitle }) => {
  return (
    <div className={`py-12 px-4 ${bgColor}`}>
      <div className="container mx-auto px-2">
        <h1 className="text-4xl  sora-regular text-center text-gray-900 mb-10">{maintitle}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col items-center"
              style={{ backgroundColor: step.bgColor || 'white' }}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img src={step.icon} alt={step.title} className="w-full object-contain h-full" />
              </div>
              <h3 className="text-lg  sora-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 sora-regular text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;