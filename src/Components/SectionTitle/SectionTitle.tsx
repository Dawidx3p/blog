import '../../Styles/SectionTitle.scss';
import React from "react";

function SectionTitle({title}:{title:string}){
    return(
        <section className="section-title">
            <h1>{title}</h1>
            <div className="underline"></div>
        </section>
    )
}

export default SectionTitle;