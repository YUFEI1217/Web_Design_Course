import StoreProductions from "./StoreProductions";
import StoreProductionsList from "./data/StoreProductionsList";

function Store() {
    return (
        <div className="store">
            <div className="store__production">
                <StoreProductions/>
            </div>
        </div>
    );
}

export default Store;