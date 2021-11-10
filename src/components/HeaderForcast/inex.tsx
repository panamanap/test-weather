import { Link } from 'react-router-dom';
import { NavButton } from '../NavButton';

export const HeaderForcast = () => {
    return (
        <header className="header">
            <NavButton>Forecast</NavButton>
            <input placeholder="Start entering city name..."></input>
            <Link to="/">
                <NavButton>Home</NavButton>
            </Link>
        </header>
    );
};
