// import React, { useState } from 'react';
import Banner from '../Header/Banner';
import DoctorsSection from '../Pages/DoctorsSection';
import MedicalServices from '../Pages/MedicalServices';
import { useLoaderData } from 'react-router';
// import { useEffect } from 'react';

const Home = () => {

    // const [doctors, setDoctors] = useState([]);

    const doctors = useLoaderData();

    // useEffect(() => {
    //     setDoctors(data);
    // }, [data]);

    
    
    
    return (
        <div>
            <Banner></Banner>
            <DoctorsSection doctors={doctors}></DoctorsSection>
            <MedicalServices totalDoctors={doctors.length}></MedicalServices>
        </div>
    );
};

export default Home;