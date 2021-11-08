import { Button } from '../Button';
import "./Menu.scss"

const arr: Array<string> = [
    'Minsk', 'Moscow', 'Bratislava',
] 

export const Menu = () => {
    return (
        <footer className="footerMenu">
            {arr.map((btn, index) => <Button key={index} btn={btn}/>)}
        </footer>
    );
};
