import { useState,useRef } from "react";
import './ProductionDetail_2.css';
import Button from "./Button";
import ProductionDetailCarouselList_PC from "./data/ProductDetailCarouselList_PC";
import ProductionCarousel_2 from "./ProductionCarousel_2";

function ProductionDetail_2() {

    const [productionPrice, setProductionPrice] = useState(0);
    const BuyProductionDialogRef = useRef();
    const ConfirmProductionDialogRef = useRef();

    return(
        <div className="Production_detail_page">
            <ProductionCarousel_2 img_data={ProductionDetailCarouselList_PC}/>

            <div className="Production_detail_right">
                <h2 className="Production_detail_title_h2">PC Laptop (OPTIMIZED FOR ALL GAMERS)</h2>
                <p className="Production_detail_category">Our most advanced desktop – perfect for new gamers and live streamers – now with up to Intel® Core™ (14th Gen) processors and NVIDIA® GeForce RTX™ 4090 graphics.</p>
                <div className="Production_price_item">
                    <label htmlFor="Production_price__select" className="Production--price__label">Select a product</label>
                    <select id="Production_price__select" className="Production--price__select" name="price" value={productionPrice} onInput={
                        (e) => {
                            setProductionPrice(e.target.value);
                        }
                    }>
                        <option value="">Please select the Edition</option>
                        <option value="520.00">Normal GTX1060 PC</option>
                        <option value="800.00">Laptop GTX2080 PC</option>
                        <option value="1099.99">Gaming GTX3080 PC</option>
                        <option value="1899.99">Luxury GTX4090 PC</option>
                    </select>
                    <span className="Production_price_ShowSpan">{`$ ${productionPrice}`}</span>
                </div>
                <p className="Production_reward">Due to high demand, there is a limit of 1 console per order.</p>
                <Button className="Production_download__btn" type="button" visual="button" onClick={()=>{BuyProductionDialogRef.current.showModal()}}> Buy Now</Button>
                <dialog ref={BuyProductionDialogRef} className = "BuyProduction__modal" >
                    <form className="BuyProduction__form"  action="/submit" method="POST">
                        <h2 className="Production__modal_title">Do you want to buy this PC?</h2>
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

export default ProductionDetail_2;