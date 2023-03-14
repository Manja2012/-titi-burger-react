import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
//URL API
import { URL} from '../../utils/constantes/urls.js'

function Burger(){
    const [burger, setBurger] = useState([]);
    const [choosedProduct, setChoosedProduct] = useState();
    const navigate = useNavigate();


    useEffect(() => {
//requete api
        const fetchBurger = async () => {
            try{
                const {data} = await axios.get(URL.fetchBurger)
           
                setBurger (data) 
            }catch(error){
                console.log(error)

            }
            
        }
        fetchBurger()
      
    },[])
    function handleChange(event) {
        setChoosedProduct(event.target.value);
    }

    function formSubmit(event) {
        event.preventDefault();

        if(choosedProduct === undefined){
            return;
        } else{
            fetch(URL.fetchProduct + choosedProduct).then(res => res.json()).then((data) => {
                localStorage.setItem('burger', JSON.stringify(data));
                navigate('/accompagnement')
            })
        }
        
    }

    return(
        <>
        
            <h1>Nos Burger 🍔</h1>
            <form onSubmit={formSubmit}>
                {burger.map((item, index) => {
                return(
                    <div className="burgers"
                        key={index}>
                        <input className="burger__input" type="radio" name="burger"  value={item._id} onChange={handleChange}></input>
                        <p className="burger__title">{item.name}</p>
                        <img className="burger__img burger__img--position" src={item.image} alt={item.name}/>
                        <p className="price">{item.price.$numberDecimal}€</p>
                        <p className="burger__text">{item.description}</p>
                    </div> 
                    )
                })}
                <section className="cta cta__burgers">
                    <button className="cta__button cta__burgers-button cta__accompagnements">Suivant</button> 
                </section>  
            </form>
        </>
    )
}
export default Burger