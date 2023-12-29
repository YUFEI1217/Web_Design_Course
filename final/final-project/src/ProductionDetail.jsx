import { useState,useRef } from "react";
import './ProductionDetail.css';
import Button from "./Button";
import ProductionDetailCarouselList from "./data/ProductDetailCarouselList";
import ProductionCarousel from "./ProductionCarousel";

function ProductionDetail() {

    const [productionPrice, setProductionPrice] = useState(0);
    const BuyProductionDialogRef = useRef();
    const ConfirmProductionDialogRef = useRef();

    return(
        <div className="Production_detail_page">
            <ProductionCarousel img_data={ProductionDetailCarouselList}/>

            <div className="Production_detail_right">
                <h2 className="Production_detail_title_h2">PlayStation5 Console (model group - slim)</h2>
                <p className="Production_detail_category">Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio**, and an all-new generation of incredible PlayStation® games.</p>
                <div className="Production_price_item">
                    <label htmlFor="Production_price__select" className="Production--price__label">Select a product</label>
                    <select id="Production_price__select" className="Production--price__select" name="price" value={productionPrice} onInput={
                        (e) => {
                            setProductionPrice(e.target.value);
                        }
                    }>
                        <option value="">Please select the Edition</option>
                        <option value="449.99">PlayStation®5 Console</option>
                        <option value="499.99">Call of Duty® Modern Warfare® III Bundle</option>
                        <option value="509.99">Marvel's Spider-Man 2 Bundle</option>
                    </select>
                    <span className="Production_price_ShowSpan">{`$ ${productionPrice}`}</span>
                </div>
                <p className="Production_reward">Due to high demand, there is a limit of 1 console per order.</p>
                <Button className="Production_download__btn" type="button" visual="button" onClick={()=>{BuyProductionDialogRef.current.showModal()}}> Buy Now</Button>
                <dialog ref={BuyProductionDialogRef} className = "BuyProduction__modal" >
                    <form className="BuyProduction__form"  action="/submit" method="POST">
                        <h2 className="Production__modal_title">Do you want to buy this PS5?</h2>
                        <div className="Production__input_button">
                            <Button className="Production-form__button confirm_button" type="button" visual="button" onClick={()=>{BuyProductionDialogRef.current.close();ConfirmProductionDialogRef.current.showModal();}}>Yes</Button>
                            <Button className="Production-form__button close_button" type="button" onClick={() => BuyProductionDialogRef.current.close()}>Close</Button>
                        </div>
                    </form>
                </dialog>
                <dialog ref={ConfirmProductionDialogRef} className = "Confirm__modal" >
                    <form className="Confirm__form"  action="/submit" method="POST">
                        <h2 className="Confirm__modal_title">Thank you for your purchase!</h2>
                        <Button className="confirm__close_button" type="button" onClick={() => ConfirmProductionDialogRef.current.close()}>Close</Button>
                    </form>
                </dialog>
            </div>
        </div>
    );
}

export default ProductionDetail;