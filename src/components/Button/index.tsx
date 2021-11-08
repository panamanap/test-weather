import "./Button.scss";

type ButtonProps = {
    btn: string;
}

export const Button: React.FC<ButtonProps> = ({btn}) => {
    return (
        <button className="cityBtn">{btn}</button>
    )
}
