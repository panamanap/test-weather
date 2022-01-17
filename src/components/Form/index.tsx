import React from 'react';
import './Form.scss';

interface FormProps {
    cityName: string;
    setCityName: (action: string) => void;
}

export const Form: React.FC<FormProps> = ({ cityName, setCityName }) => {
    const [text, setText] = React.useState('');

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
        if (text.search(/\d/) != -1) {
            alert('Use letters');
            setText('');
        }
    };

    const onSearchCity = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (text.length === 0) {
            return;
        }
        setCityName(text);
        setText('');
    };

    const onSubmitCity = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (text.length === 0) {
            return;
        }
        setCityName(text);
        setText('');
    };

    return (
        <form className="form-wrapper" onSubmit={onSubmitCity}>
            <input
                type="text"
                placeholder="Enter city name..."
                onChange={onChangeInput}
                value={text}
            />
            <button type="button" onClick={onSearchCity}>
                Search
            </button>
        </form>
    );
};
