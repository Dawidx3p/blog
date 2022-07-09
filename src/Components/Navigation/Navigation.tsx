import '../../Styles/Navigation.scss';
import React, { useEffect, useState } from "react";
import Burger from './Burger';
import BurnerNav from './BurgerNav';


function Navigation(){
    const [scrollPoz, setScrollPoz] = useState(0);
    const [social, setSocial] = useState(false);
    const [opener, setOpener] = useState(false);
    window.onscroll = () => {
        setScrollPoz(document.documentElement.scrollTop)
    }
    useEffect(() => {
        if(scrollPoz>200 && social){
            setSocial(false);
        }else if(scrollPoz<200 && !social){
            setSocial(true);
        }
    },[scrollPoz, social])
    return(
        <div className="navigation">
            <nav className='social' style={{display: social ? 'flex' : 'none'}}>
                <ul>
                    <li>
                        <a href="#abc"><img className='social-media' width={25} height={25} src='../../social-media/facebook.svg' alt='Facebook'/></a>
                    </li>
                    <li>
                        <a href="#abc"><img className='social-media' width={25} height={25} src='../../social-media/instagram.svg' alt='Instagram'/></a>
                    </li>
                    <li>
                        <a href="#abc"><img className='social-media' width={25} height={25} src='../../social-media/youtube.svg' alt='Youtube'/></a>
                    </li>
                </ul>
            </nav>
            <nav className='main-navigation'>
                <ul>
                    <li>
                        <a href="#abc"><img className='social-media' width={40} height={40} src='../../logo.svg' alt='Facebook'/></a>
                    </li>
                    <li>
                        <a href="#abc">Strona główna</a>
                    </li>
                    <li>
                        <a href="#abc">Blog</a>
                    </li>
                    <li>
                        <a href="#abc">Podcast</a>
                    </li>
                    <li>
                        <a href="#abc">Sklep</a>
                    </li>
                    <li>
                        <a href="#abc">O mnie</a>
                    </li>
                </ul>
            </nav>
            {opener ? <BurnerNav close={() => setOpener(false)}/> : <Burger open={() => setOpener(true)}/>}
            
        </div>
    )
}

export default Navigation;