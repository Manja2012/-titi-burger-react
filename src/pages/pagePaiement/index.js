import React, { useState, useEffect } from "react"
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Banniere from "../../assets/modele-banniere-medias-sociaux-delicieux-menu-burger-nourriture_106176-354.jpg"
//URL API

function Paiement(){
   const navigate = useNavigate();
    return(
        <>
            <div className="container">
            <div className="commande">
                <div className="percent33">
                    <p className="commande__text">commande TITI03FTP092201</p>
                </div>
                <div className="percent66">
                    <h2>Click & Collect</h2>
                    <h3>commander et déguster</h3>
                </div>
            </div>
            <div className="paiement">
                <div className="commande" id="paiement">
                    <form action="/action_page.php">
                        <div className="choise-paiement">
                            <p className="text-left">Paiement</p>
                            <PayPalButton
                                amount="0.01"
                                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                onSuccess={(details, data) => {
                                alert("Transaction completed by " + details.payer.name.given_name);
                                    navigate('/final')
                                }}
                            />
                        </div>
                    </form>
                    <div className="right-image">
                        <p className="right-image__text">Promo pour votre prochaine commande</p>
                        <img src={Banniere} alt="super delicious burger"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Paiement;