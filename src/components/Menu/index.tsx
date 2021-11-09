import { Button } from '../Button';
import "./Menu.scss"

const arr: Array<string> = [
    'Minsk', 'Moscow', 'Bratislava',
] 

type MenuProps = {
    setCityName: (btn: string) => void,
}

export const Menu: React.FC<MenuProps> = ({setCityName}) => {
    return (
        <footer className="footerMenu">
            {arr.map((btn, index) => <Button key={index} btn={btn} setCityName={setCityName}/>)}
        </footer>
    );
};
