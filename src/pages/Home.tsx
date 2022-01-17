import React from 'react';
import { BasicInformation } from '../components/BasicInformation';
import { Form } from '../components/Form';

interface HomeProps {
    setCityName: (action: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCityName }) => {
    return (
        <div className="homepage">
            <Form setCityName={setCityName}></Form>
            <BasicInformation />
        </div>
    );
};
