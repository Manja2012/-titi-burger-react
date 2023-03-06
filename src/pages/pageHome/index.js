import React from "react"
import Banniere from "../../assets/img/modele-banniere-medias-sociaux-delicieux-menu-burger-nourriture_106176-354.jpg"
import HamburgerDouble from "../../assets/img/hamburger-double.jpg"
import HamburgerGourmet from "../../assets/img/hamburger-gourmet.jpg"
import HamburgerNoir from "../../assets/img/hamburger-noir.jpg"
import HamburgerPoulet from "../../assets/img/hamburger-poulet.jpg"
import Litchi from "../../assets/img/litchi.jpg"
import Open from "../../assets/img/open.jpg"


function Home(){

    return(
        <>
           <main>
                <div className="container"> 
                    <section className="titiStory">
                        <h1 className="hidden">Titi Burger</h1>
                        <div className="titiStory_resto">
                            <h2 className="titiStory_resto_title">Le Resto</h2>
                            <img className="titiStory_image" src={Banniere} alt="super delicious burger"/>
                        </div>
                        <div className="titiStory_story">
                            <h2 className="titiStory_story_title">Titi  Story</h2>
                            <h3 className="titiStory_story_description">Une équipe Authentique</h3>
                            <p className="titiStory_story_text">for textfor textfor textfor textfor textfor textfor textfor textfor textfor textfor textfor textfor textfor textfor textvfor textfor textvfor textfor textfor textfor text </p>
                        </div>
                    </section>
                    <section className="myBurgers">
                        <div className="myBurgers_burgers">
                            <h2 className="myBurgers_burgers_title">Nos Burgers</h2>
                            <p className="myBurgers_burgers_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi harum nisi temporibus autem illo enim sapiente optio sequi exercitationem perferendis fugiat voluptate, repudiandae, nobis et, est placeat tempora unde excepturi?</p>
                        </div>
                        <div className="myBurgers_diapo">
                            <div className="slideshow">
                                <img className="myBurgers_photos_img" src={HamburgerDouble} alt="double burger" />
                                <img className="myBurgers_photos_img" src={HamburgerGourmet} alt="menu burger avec coca" />
                                <img className="myBurgers_photos_img" src={HamburgerNoir} alt="burger au boeuf et laitue" />
                                <img className="myBurgers_photos_img" src={HamburgerPoulet} alt="burger au boeuf et laitue" />
                            </div>
                        </div> 
                    </section>
                    <section className="actus actus__no-padding-top">
                        <h2>Actus</h2>
                        <div className="actus_articles">
                            <article>
                                <h3 className="actus_articles__title">Article 1</h3>
                                <img className="actus_articles_img" src={HamburgerNoir} alt="burger noir" />
                                <p className="actus_articles_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsum recusandae itaque corporis amet. Necessitatibus fugit facere cupiditate accusamus vero nobis. Cupiditate incidunt repellat, labore nulla minima libero ea ex.</p>
                                <a className="actus_articles_link" href="">En savoir +</a>
                            </article>
                            <article>
                                <h3 className="actus_articles__title">Article 2</h3>
                                <img className="actus_articles_img" src={Litchi} alt="boisson aux de litchi" />
                                <p className="actus_articles_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum earum debitis incidunt esse iusto repellat assumenda ea ipsum odio. Cupiditate inventore numquam nam eos in id hic sint magnam aspernatur.</p>
                                <a className="actus_articles_link" href="">En savoir +</a>
                            </article>
                            <article>
                                <h3 className="actus_articles__title">Article 3</h3>
                                <img className="actus_articles_img" src={Open} alt="open" />
                                <p className="actus_articles_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed vero nulla fugit quidem facilis sapiente pariatur animi maiores architecto est rem ea assumenda tempora dignissimos, iure vitae nostrum corporis?</p>
                                <a className="actus_articles_link" href="">En savoir +</a>
                            </article>
                        </div>
                    </section>
                </div>
                <section className="section cta">
                    <div className="cta_background">
                        <div className="cta_title">
                            <p className="cta_title_text">Des Offres et des actus <br/>
                            Chaque semaine sur titi Burger</p>
                        </div>
                        <div className="cta_form">
                            <p className="cta_title_text">Inscription à Newsletter</p>
                            <label className="cta_form_label" for="inscription">c’est par ici </label>
                            <input className="cta_form_input" type="text" id="inscription" />
                        </div> 
                    </div>
                </section>
        </main>
        </>

    )
}
export default Home