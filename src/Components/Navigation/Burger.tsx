import React from 'react';
export default function Burger({open} : {open: () => void}) {
    return(
        <div id="burger-menu" onClick={() => open()}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}