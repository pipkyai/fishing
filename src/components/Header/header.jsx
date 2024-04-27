import React from 'react';
// import Button from '../Buttons/button';
import {useTelegram} from "../../hooks/useTelegram";
import './header.css';

const Header = () => {
    const {tg} = useTelegram();
    return (
        <div className={'header'}>
            {/*<Button onClick={onClose()}>Закрыть</Button>*/}

            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;