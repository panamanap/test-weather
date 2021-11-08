import './Header.scss';

type HeaderProps = {
    name: string;
}

export const Header: React.FC<HeaderProps> = ({name}) => {
    return (
        <header className="header">
            <h1>{name}</h1>
            <div className="infoToday">
                <p>Monday, 08.11.2021</p>
                <div className="weatherToday">
                    <img width="55" height="55" src="assets/partly_cloudy.png" alt="Weater today" />
                    <p>3°C</p>
                </div>
            </div>
        </header>
    );
};
