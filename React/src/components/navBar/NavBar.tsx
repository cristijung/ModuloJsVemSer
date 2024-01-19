import style from './NavBar.module.scss';
//import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <>
       <div className={style.nav}>
        <a href='/home'>Home</a>
        <a href='/galeria'>Galeria</a>
        <a href='/contato'>Contato</a>
       </div>
        </>
    )
}