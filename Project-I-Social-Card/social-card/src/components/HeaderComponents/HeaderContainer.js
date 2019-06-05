import React from 'react';
import './Header.css';
import Img from './ImageThumbnail';
import Title from './HeaderTitle';
import Content from './HeaderContent';
function Header() {
    return(
        <div>
            <header>
                <Img />
                <Title />
                <Content />
            </header>
        </div>
    )
}

export default Header;