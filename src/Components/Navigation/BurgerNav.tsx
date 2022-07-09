import React from 'react';

export default function BurnerNav({close} : {close: () => void}) {
    return(
        <nav className='burger-navigation'>
            <div className='close' onClick={() => close()}>X</div>
            <a href="#abc">Strona główna</a>
            <a href="#abc">Blog</a>
            <a href="#abc">Podcast</a>
            <a href="#abc">Sklep</a>
            <a href="#abc">O mnie</a>
        </nav>
    )
}