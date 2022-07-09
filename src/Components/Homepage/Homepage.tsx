import React from "react";
import NewsletterForm from "../NewsletterForm/NewsletterForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import '../../Styles/Homepage.scss';

function Homepage(){
    return(
        <>
            <main className='homepage'>
                <div className='two-columns'>
                    <section id="main-text">
                            <div className="background"></div>
                            <h1>Cześć, jestem Pluszowa Idealistka</h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore  
                            et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat
                            </p>     
                    </section>
                    <img id='profile-image' src='../../img/profile.jpg' alt='Zdjęcie profilowe'/>
                </div>
            </main>
            <div className='two-columns' id='get-to-know-me'>
                <img className="profile-image" id="profile-image2" src='../../img/profile2.jpg' alt='Zdjęcie profilowe'/>
                <section className="text">
                        <h1>Poznaj mnie bliżej</h1>
                        <div className="two-columns">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut 
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit 
                            anim id est laborum
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut 
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit 
                            anim id est laborum
                            </p>    
                        </div>     
                </section>
            </div>
            <section>
                <SectionTitle title="Popularne na blogu" />
                <div className="two-columns" id="blog-popular">
                    <img className="profile-image" src='../../img/blog1.jpg' alt='blog'/>
                    <section className="text">
                        <h1>Consectetur</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut 
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit 
                        anim id est laborum 
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut 
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse 
                        cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit 
                        anim id est laborum<br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut 
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, 
                        </p>   
                        <button>Czytaj dalej</button>
                    </section>
                </div>
                <section className="colored-section" id="podcast">
                    <div className="two-columns">
                        <img className="img-inverted" width={120} height={120} src='../../img/podcast.svg' alt='podcast'/>
                        <section className="text">
                            <h1>Zapraszam Cię do posłuchania</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </section>
                    </div>
                    <SectionTitle title="Najnowszy odcinek" />
                    <iframe title="93. Trzy tajemnice Krakowa" style={{borderRadius: '5px'}} src="https://open.spotify.com/embed/show/6JxVYXIYqPvucDdKJli1rN?utm_source=generator&theme=0" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    <SectionTitle title="Dołącz do mojego newslettera" />
                    <NewsletterForm />
                </section>
            </section>
            
        </>
    )
}

export default Homepage;