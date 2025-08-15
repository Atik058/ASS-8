import React from 'react';
import { Link } from 'react-router';
const SingleDoctor = ({doctor}) => {
    return (
        <div  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            {/* Doctor Image */}
            <div className="h-48 overflow-hidden">
                <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* Doctor Info */}
            <div className="p-6">
                <div className="flex flex-col mb-4">
                    <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${doctor.available ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        <span className={`${doctor.available ? 'text-green-600' : 'text-gray-600'}`}>
                            {doctor.available ? 'Available' : 'Not Available'}
                        </span>
                    </div>
                    <div className="text-gray-600 mt-1">
                        {doctor.experience}
                    </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-gray-600 mb-3">{doctor.qualifications}</p>
                <p className="text-gray-500 text-sm mb-4">{doctor.regNo}</p>

             <Link key={doctor.id} to={`/DoctorProfileDetails/${doctor.id}`}>   <button className="w-full py-2 px-4 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors duration-200">
                    View Details
                </button>
                </Link>
            </div>
        </div>
    );
};

export default SingleDoctor;