import React, { useEffect, useState } from 'react';
import DoctorAppointmentCard from '../Components/DoctorAppointmentCard';
import { useLoaderData } from 'react-router';
import { getSavedIDs, removeID } from '../utility/LocalStorage';

const MyBookings = () => {

    const [booked, setBooked] = useState([])
    const data = useLoaderData()

    const handleCancelBooking = (id) => {
        removeID(id);
        setBooked(prev => prev.filter(doctor => doctor.id !== id));
    };

    useEffect(() => {
        const lsData = getSavedIDs();
        const parsedlsData = lsData.map(id => parseInt(id))
        const bd = data.filter(doctor => parsedlsData.includes(doctor.id));
        setBooked(bd);

    }, [])
    // console.log("Booked", booked)
    return (
        <div>
            <h1 className='font-bold text-2xl'>My Today Appointments</h1>
            <p className='font-light'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>

            {
                booked.map(doctorBooked => <DoctorAppointmentCard key={doctorBooked.id} doctorBooked={doctorBooked} onCancel={handleCancelBooking} ></DoctorAppointmentCard>)

                // booked.map(d => {
                //     console.log(d); // check if it’s an object
                //     return <DoctorAppointmentCard key={d.id} doctorBooked={d} />;
                // })

            }

        </div>
    );
};

export default MyBookings;