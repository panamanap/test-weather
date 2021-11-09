import "./Button.scss";

type ButtonProps = {
    btn: string,
    setCityName: (btn: string) => void,
}

export const Button: React.FC<ButtonProps> = ({btn, setCityName}) => {
    return (
        <button onClick={() => setCityName(btn)} className="cityBtn">{btn}</button>
    )
}
