import React from "react";
import SingleDoctor from "../Components/SingleDoctor";
import { useState } from "react";


const DoctorsSection = ({ doctors }) => {

    const [visibleCount, setVisibleCount] = useState(6);

    const handleSeeMore = () => {
        setVisibleCount(doctors.length); // Show all
    };

    const visibleDoctors = doctors.slice(0, visibleCount);


    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Best Doctors</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Our platform connects you with verified, experienced doctors across various specialties—all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                visibleDoctors.map((doctor) => (
                    <SingleDoctor key={doctor.id} doctor={doctor}></SingleDoctor>
                ))
                }

                {/* {Array.isArray(visibleDoctors) &&
                    visibleDoctors.map((doctor) => (
                        <SingleDoctor key={doctor.id} doctor={doctor} />
                    ))} */}


            </div>

            {visibleCount < doctors.length && (
                <div className="text-center mt-6">
                    <button onClick={handleSeeMore} className="btn btn-primary">
                        See More
                    </button>
                </div>
            )}

        </div>
    );
};

export default DoctorsSection;