import { Navigate, useLoaderData, useNavigate, useParams } from "react-router";
import { saveID } from "../utility/LocalStorage";

const DoctorProfileDetails = () => {
   const navigate = useNavigate();
  const { id } = useParams();
  const DoctorId = parseInt(id);
  const data = useLoaderData();
  console.log(data)
  const thisDoctor = data.find(doctor => doctor.id === DoctorId);
  const { name, qualifications, regNo, available,  image, availability, consultationFee, workingPlace: { hospital, address } = {} } = thisDoctor || {};

  const handleBooking = id => {

    saveID(id)
    alert("Booked")
    navigate("/my-bookings");
  }
  return (
    <>
      <div className="max-w-3xl mx-auto p-6 font-sans bg-white mt-6 rounded-3xl ">
        <h1 className="text-center text-2xl md:text-3xl text-slate-800 font-semibold mb-6 pb-3 ">
          Doctor's Profile Details
        </h1>

        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut.
          Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet
          mattis donec dignissim volutpat.
        </p>

        {/* Additional profile sections would go here */}
      </div>


      {/* doctor info */}
      <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8">
        {/* Doctor Image and Basic Info */}
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="rounded-2xl h-48 w-full object-cover md:h-full md:w-48"
              src={image}
              alt="Dr. Cameron Williamson"
            />
          </div>
          <div className="p-8">
            {/* Doctor Name */}
            <h1 className="text-2xl font-bold text-gray-800">{name}</h1>

            {/* Qualifications */}
            <p className="mt-2 text-gray-600">{qualifications}</p>

            {/* Hospital */}
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-500">Working Place</p>
              <p className="text-gray-700 text-xl font-bold">{hospital && address ? `${hospital}, ${address}` : hospital || address}</p>
            </div>

            {/* Registration Number */}
            <div className="mt-3">
              <p className="text-sm font-semibold text-gray-500">Registration</p>
              <p className="text-gray-700">{regNo}</p>
            </div>
          </div>
        </div>

        {/* Availability Section */}
        <div className=" pb-6">
          <div>
            <h2 className="mt-4 text-lg font-semibold text-gray-800 mb-1">Availability</h2>
            <span className={`${available ? 'text-green-600' : 'text-gray-600'}`}>
              {available ? 'Available' : 'Not Available'}
            </span>
          </div>

          <div className="flex gap-4">
            {availability.map((avDay) => (
              <span  key={avDay.day}  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{avDay.day}</span>
            ))}


          </div>
        </div>

        {/* Consultation Fee */}
        <div className=" pb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Consultation Fee</h2>
          <p className="text-gray-700">{consultationFee} BDT (incl. VAT) Per consultation</p>
        </div>

        {/* Action Buttons */}
        <div className=" pb-8 flex gap-4">
          <button onClick={() => handleBooking(id)} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
            Book Appointment
          </button>
          <button className="border border-blue-600 text-blue-600 font-medium py-2 px-6 rounded-md hover:bg-blue-50 transition-colors">
            Message
          </button>
        </div>
      </div>

    </>
  );
};

export default DoctorProfileDetails;