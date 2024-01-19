import style from './Header.module.scss';
import NavBar from "../navBar/NavBar";

export default function Header() {
    return(
        <>
        <header className={style.header}>
            <h3>Header</h3>
            <NavBar/>
        
        </header>
        
        </>
    )
}