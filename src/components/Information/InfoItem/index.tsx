import './InfoItem.scss';

type InfoProps = {
    day: string;
    image: string;
    temperature: string;
};

export const InfoItem: React.FC<InfoProps> = ({ day, image, temperature }) => {
    return (
        <div className="infoPerDay">
            {day}
            <img src={image} alt="OtherWeather" />
            {temperature}
        </div>
    );
};
