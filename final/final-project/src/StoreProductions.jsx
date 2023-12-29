import StoreProductionsList from "./data/StoreProductionsList";
import './StoreProductions.css';
import Button from "./Button";
import { useRef } from "react";
import { useState } from "react";

function StoreProductions() {

    const BuyGameDialogRef = useRef();
    const ConfirmDialogRef = useRef();
    const [defaultList, setDefaultList] = useState(false);
    const [priceLowToHigh, setPriceLowToHigh] = useState(false);
    const [priceHighToLow, setPriceHighToLow] = useState(false); 
    const [filteredProducts, setFilteredProducts] = useState(StoreProductionsList);
    const [showFilter, setShowFilter] = useState(false);

    const handleFilterLowToHigh = () => {
        const sortedProducts = [...filteredProducts].sort((a, b) => a.Price - b.Price);
        setFilteredProducts(sortedProducts);
    };

    const handleFilterHighToLow = () => {
        const sortedProducts = [...filteredProducts].sort((a, b) => b.Price - a.Price);
        setFilteredProducts(sortedProducts);
    };

    const filter_list = filteredProducts.map((item,idx) => {
        return (
            <li className="production__item" key={item.Pname}>
              <div className='production__detail'>
                  <h3 className='production_title'>
                      {item.Pname}
                  </h3>
                  <img className='production__img' src={item.Pimage} alt={item.Palt}/>
                  <p className="production__category">Category: {item.Pcategories}</p>
                  <Button className="production__price" type="button" visual="link" onClick={()=>{BuyGameDialogRef.current.showModal()}}>$ {item.Price}</Button>
                  <dialog ref={BuyGameDialogRef} className = "Buygame__modal" >
                      <form className="Buygame__form"  action="/submit" method="POST">
                          <h2 className="game__modal_title">Do you want to buy this game?</h2>
                          <div className="game__input_button">
                              <Button className="game-form__button confirm_button" type="button" visual="link" onClick={()=>{ConfirmDialogRef.current.showModal();BuyGameDialogRef.current.close();}}>Yes</Button>
                              <Button className="game-form__button close_button" type="button" onClick={() => BuyGameDialogRef.current.close()}>No</Button>
                          </div>
                      </form>
                  </dialog>
                  <dialog ref={ConfirmDialogRef} className = "Confirm__modal" >
                      <form className="Confirm__form"  action="/submit" method="POST">
                          <h2 className="Confirm__modal_title">Thank you for your purchase!</h2>
                          <Button className="confirm__close_button" type="button" onClick={() => ConfirmDialogRef.current.close()}>Close</Button>
                      </form>
                  </dialog>
              </div>
            </li>
          );
      });

    const list = StoreProductionsList.map( item => {
        return (
          <li className="production__item" key={item.Pname}>
            <div className='production__detail'>
                <h3 className='production_title'>
                    {item.Pname}
                </h3>
                <img className='production__img' src={item.Pimage} alt={item.Palt}/>
                <p className="production__category">Category: {item.Pcategories}</p>
                <Button className="production__price" type="button" visual="link" onClick={()=>{BuyGameDialogRef.current.showModal()}}>$ {item.Price}</Button>
                <dialog ref={BuyGameDialogRef} className = "Buygame__modal" >
                    <form className="Buygame__form"  action="/submit" method="POST">
                        <h2 className="game__modal_title">Do you want to buy this game?</h2>
                        <div className="game__input_button">
                            <Button className="game-form__button confirm_button" type="button" visual="link" onClick={()=>{ConfirmDialogRef.current.showModal();BuyGameDialogRef.current.close();}}>Yes</Button>
                            <Button className="game-form__button close_button" type="button" onClick={() => BuyGameDialogRef.current.close()}>No</Button>
                        </div>
                    </form>
                </dialog>
                <dialog ref={ConfirmDialogRef} className = "Confirm__modal" >
                    <form className="Confirm__form"  action="/submit" method="POST">
                        <h2 className="Confirm__modal_title">Thank you for your purchase!</h2>
                        <Button className="confirm__close_button" type="button" onClick={() => ConfirmDialogRef.current.close()}>Close</Button>
                    </form>
                </dialog>
            </div>
          </li>
        );
    });

    if(defaultList){
        return (
            <>
                <div className="filter__part">
                    <span className="filter__placeholder"></span>
                    <div className="filter__area">
                        <button className="filter__btn">Sort ↓</button>
                        <ul className="filter_list">
                            <li className="filter__item"><button className="filter__item--btn" onClick={() => setDefaultList(!defaultList)} >Default</button></li>
                            <li className="filter__item"><button className="filter__item--btn" onClick={handleFilterLowToHigh}>Price(Low to High)</button></li>
                            <li className="filter__item"><button className="filter__item--btn" onClick={handleFilterHighToLow}>Price(High to Low)</button></li>
                        </ul>
                    </div>
                </div>
                <ul className="store__production__list">
                    {list}
                </ul>
            </>
        );
    }
    else{
        return (
            <>
                <div className="filter__part">
                    <span className="filter__placeholder"></span>
                    <div className="filter__area">
                        <button className="filter__btn">Sort ↓</button>
                        <ul className="filter_list">
                            <li className="filter__item"><button className="filter__item--btn" onClick={() => setDefaultList(!defaultList)} >Default</button></li>
                            <li className="filter__item"><button className="filter__item--btn" onClick={handleFilterLowToHigh}>Price(Low to High)</button></li>
                            <li className="filter__item"><button className="filter__item--btn" onClick={handleFilterHighToLow}>Price(High to Low)</button></li>
                        </ul>
                    </div>
                </div>
                <ul className="store__production__list">
                    {filter_list}
                </ul>
            </>
        );
    }
    
}

export default StoreProductions;