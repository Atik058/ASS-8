import React from "react";

const MedicalServices = ({totalDoctors}) => {
  const stats = [
    { value: totalDoctors, label: "Total Doctors" },
    { value: "467 +", label: "Total Reviews" },
    { value: "1900 +", label: "Patients" },
    { value: "300 +", label: "Total Staff" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          We Provide Best Medical Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
        </p>
      </div>

      <div className="border-t border-gray-200 my-8 w-16 mx-auto"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
            <p className="text-lg text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalServices;