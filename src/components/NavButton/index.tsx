import './NavButton.scss';

type NavButtonProps ={
    children: string,
}


export const NavButton: React.FC<NavButtonProps> = ({children}) => {
    return <button  className='navBtn'>{children}</button>
}
