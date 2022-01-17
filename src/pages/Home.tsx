import React from 'react';
import { BasicInformation } from '../components/BasicInformation';
import { Form } from '../components/Form';

interface HomeProps {
    cityName: string;
    setCityName: (action: string) => void;
}

export const Home: React.FC<HomeProps> = ({ cityName, setCityName }) => {
    return (
        <div className="homepage">
            <Form cityName={cityName} setCityName={setCityName}></Form>
            <BasicInformation />
        </div>
    );
};
