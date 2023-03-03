import React from "react"
import { Link, Outlet} from "react-router-dom"

function Template(){

    return(
        <>
            <header class="flex header">
        <div class="logo">
            <Link href="index.html">
               uhuhuhuhuh
            </Link>
        </div>
        <div class="button-mobil">
                <Link class="callToAction" href="ClicAndCollect.html">Click & Collect</Link>
                <Link class="callToAction" href="">Livraison</Link>
        </div>
        <div class="mobil-menu" id="mobil-menu" data-menu>
            <ul class="mobil-menu__nav">
                 <li class="mobil-menu__item" >
                   <Link class="mobil-menu__link mobil-menu__link--current "  href="index.html">La Carte</Link>
                  </li>
                 <li class="mobil-menu__item">
                   <Link class="mobil-menu__link " href="portfolio.html">Titi Stori</Link>
                 </li>
                 <li class="mobil-menu__item">
                   <Link class="mobil-menu__link" href="#">Le resto</Link>
                 </li>
                 <li class="mobil-menu__item">
                    <Link class="mobil-menu__link" href="#">Actus</Link>
                  </li>
                  <li class="mobil-menu__item">
                    <Link class="mobil-menu__link" href="#">Réserver</Link>
                  </li>
            </ul>
            <ul class="mobil-social">
                 <li class="mobil-social__item">
                   <Link class="mobil-social__link">Instagram</Link>
                 </li>
                 <li class="mobil-social__item">
                   <Link class="mobil-social__link">Facebook</Link>
                 </li>
                 <li class="mobil-social__item">
                   <Link class="mobil-social__link">TikTok</Link>
                 </li>
            </ul>
        </div>
        <div class="mobil-header">
             <button class="menu-button" 
             type="button" 
             aria-expanded="false" 
             aria-controls="mobil-menu"
             data-menu-button>
               <svg width="40" height="40" aria-label="Переключатель мобильного меню">
                   <use class="menu-button__icon-close" href="images/icos.svg#icon-close_40px"></use>
                   <use class="menu-button__icon-menu" href="images/icos.svg#icon-menu"></use>
               </svg>
               </button>
        </div>
        <div class="navigation">
            <nav>
                <div class="button">
                    <Link class="callToAction" href="ClicAndCollect.html">Click & Collect</Link>
                    <Link class="callToAction" href="">Livraison</Link>
                </div>
                <ul>
                    <li class="navigation_list">
                        <Link href="">La Carte</Link>
                    </li>
                    <li class="navigation_list">
                        <Link href="">Titi Stori</Link>
                    </li>
                    <li class="navigation_list">
                        <Link href="">Le resto</Link>
                    </li>
                    <li class="navigation_list">
                        <Link href="">Actus</Link>
                    </li>
                    <li class="navigation_list">
                        <Link href="">Réserver</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
            <section><Outlet /></section>
            <footer>
        <section class="footer">
            <h2 class="hidden">ff</h2>
            <div class="footer_list">
                <ul>
                    <li class="footer_list__title">Mention Légales</li>
                    <li>CGU</li>
                    <li>CGV</li>
                </ul>
            </div>
            <div class="footer_list">
                <ul>
                    <li class="footer_list__title">Plan du Site</li>
                    <li>La Carte</li>
                    <li>Titi Story</li>
                    <li>Le resto</li>
                    <li>Actus</li>
                </ul>
            </div>
            <div class="footer_list footer_flex">
               <span class="footer_list__text footer_list__title">Où nous trouver ?</span> 
               <div id="map"></div>
            </div>
            <div class="footer_list">
                <ul>
                    <li>Contact</li>
                    <li>Où nous trouver ?</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div class="footer_list">
                <ul class="social">
                    <li class="social__item">
                        <Link href="#" class="social__link">
                            <svg width="40" height="40" class="social__icon">
                                <use href="images/icons.svg#icon-facebook">
                                </use>
                            </svg>
                        </Link>
                    </li>
                    <li class="social__item">
                        <Link href="#" class="social__link">
                            <svg width="40" height="40" class="social__icon">
                                <use href="images/icons.svg#icon-instagram">
                                </use>
                            </svg>
                        </Link>
                    </li>
                    <li class="social__item">
                        <Link href="#" class="social__link">
                            <svg width="40" height="40" class="social__icon">
                                <use href="images/icons.svg#icon-tiktok">
                                </use>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    </footer>
        </>

    )
}
export default Template