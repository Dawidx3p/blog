import React from "react";
import '../../Styles/Footer.scss';

export default function Footer(){
    return(
        <footer>
            <a href="#"><img className='social-media' width={40} height={40} src='../../logo.svg' alt='Facebook'/></a>
            <div className='social-media'>
                <a href="#"><img className='social-media' width={25} height={25} src='../../social-media/facebook.svg' alt='Facebook'/></a>
                <a href="#"><img className='social-media' width={25} height={25} src='../../social-media/instagram.svg' alt='Instagram'/></a>
                <a href="#"><img className='social-media' width={25} height={25} src='../../social-media/youtube.svg' alt='Youtube'/></a>
            </div>
        </footer>
    )
}