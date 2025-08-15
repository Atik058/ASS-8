import React from 'react';
// import { removeID } from '../utility/LocalStorage';

const DoctorAppointmentCard = ({doctorBooked, onCancel}) => {

  const handleCancel = id => {

    onCancel(id)
    alert("Canceled")
  }
    
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Doctor Header */}
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <img 
            className="h-16 w-16 rounded-full object-cover border-2 border-blue-100"
            src={doctorBooked.image}
            alt="Dr. Cameron Williamson"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">{doctorBooked.name}</h2>
            <p className="text-gray-600 text-sm">{doctorBooked.qualifications}</p>
          </div>
        </div>
      </div>

      {/* Fee Section */}
      <div className="px-6 py-4 bg-blue-50 border-t border-b border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-medium">Appointment Fee:</span>
          <span className="text-lg font-bold text-blue-600">950 Taka <span className="text-sm font-normal text-gray-500">+ VAT</span></span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 flex justify-between">
        <button onClick={()=>handleCancel(doctorBooked.id)} className="px-6 py-2 bg-red-100 text-red-600 font-medium rounded-lg hover:bg-red-200 transition-colors">
          Cancel Appointment
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Reschedule
        </button>
      </div>
    </div>
  );
};

export default DoctorAppointmentCard;