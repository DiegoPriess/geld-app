import React from 'react';
import './style.scss';
import Item from './Item';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const ROUTERS = {
        "MENU": "/menu",
        "PAY_ACCOUNTS": "/constaspagas",
        "ACCOUNTS_TO_PAY": "/contasapagar",
        "SETTINGS": "/configuracao"
    }
    
    return (
    
        <nav id="navbar">
            <ul id="navbar-list">
                <Link to={ROUTERS["MENU"]}><Item icon="home" active={window.location.pathname.includes(ROUTERS["MENU"]) ? true : false} name="Menu Principal"/></Link>
                <Link to={ROUTERS["ACCOUNTS_TO_PAY"]}><Item icon="schedule" active={window.location.pathname.includes(ROUTERS["ACCOUNTS_TO_PAY"]) ? true : false} name="Contas pendentes"/></Link>
                <Link to={ROUTERS["PAY_ACCOUNTS"]}><Item icon="done" active={window.location.pathname.includes(ROUTERS["PAY_ACCOUNTS"]) ? true : false} name="Contas finalizadas"/></Link>
                <Link to={ROUTERS["SETTINGS"]}><Item icon="settings" active={window.location.pathname.includes(ROUTERS["SETTINGS"]) ? true : false} name="Configuração"/></Link>
            </ul>
        </nav>
       
    );

}

export default NavBar;