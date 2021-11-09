import React from 'react';
import './style.scss';
import Item from './Item';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const ROUTERS = {
        "MENU": "/menu",
        "ACCOUNTS_TO_PAY": "/contasapagar",
        "PAY_ACCOUNTS": "/constaspagas",
        "CREATE_ACCOUNTS": "/criarcontas",
        "STATISTICS": "/estatisticas"
    }
    
    return (
    
        <nav id="navbar">
            <ul id="navbar-list">
                <Link to={ROUTERS["MENU"]}><Item icon="home" active={window.location.pathname.includes(ROUTERS["MENU"]) ? true : false} name="Menu Principal"/></Link>
                <Link to={ROUTERS["ACCOUNTS_TO_PAY"]}><Item icon="schedule" active={window.location.pathname.includes(ROUTERS["ACCOUNTS_TO_PAY"]) ? true : false} name="Contas pendentes"/></Link>
                <Link to={ROUTERS["PAY_ACCOUNTS"]}><Item icon="done" active={window.location.pathname.includes(ROUTERS["PAY_ACCOUNTS"]) ? true : false} name="Contas finalizadas"/></Link>
                <Link to={ROUTERS["CREATE_ACCOUNTS"]}><Item icon="add" active={window.location.pathname.includes(ROUTERS["CREATE_ACCOUNTS"]) ? true : false} name="Criar contas"/></Link>
                <Link to={ROUTERS["STATISTICS"]}><Item icon="trending_up" active={window.location.pathname.includes(ROUTERS["SETTINGS"]) ? true : false} name="Estatísticas"/></Link>
            </ul>
        </nav>
       
    );

}

export default NavBar;