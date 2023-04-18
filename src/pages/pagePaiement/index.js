import React, { useState, useEffect } from "react"
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Banniere from "../../assets/modele-banniere-medias-sociaux-delicieux-menu-burger-nourriture_106176-354.jpg"
//URL API
import { URL} from '../../utils/constantes/urls.js'

function Paiement(){
    const navigate = useNavigate();

    const [total, setTotal] = useState(0);
    const storage = {... localStorage};

    useEffect(() => {

            setTotal(parseFloat(JSON.parse(storage.burger).price?.$numberDecimal||0) + parseFloat(JSON.parse(storage.accompagnement).price?.$numberDecimal||0) + parseFloat(JSON.parse(storage.boisson).price?.$numberDecimal||0) + parseFloat(JSON.parse(storage.dessert).price?.$numberDecimal||0))
    },[])
     
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
                                amount= {total}
                                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                onSuccess={(details, data) => {
                                    fetch(URL.fetchPaiement, {
                                        method: 'POST',
                                        body: JSON.stringify(details),
                                        headers: {
                                            'Content-type': 'application/json; charset=UTF-8',
                                        }
                                    })
                                    .then(response => {
                                        console.log(response);
                                        // redirection
                                        navigate('/final')
                                    })
                                    .catch(error => {
                                        console.log(error)
                                    });
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