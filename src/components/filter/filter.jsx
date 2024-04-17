import "./filter.scss";
export default function Filter() {
    return (
        <div className="filterContainer">
            <h3>Search results for <b>Dubai</b></h3>
            <div className="topSection">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" name="city" id="city" placeholder="City" />
                </div>
            </div>
            <div className="bottomSection">
            <div className="item">
                    <label htmlFor="type">Type</label>
                   <select name="type" id="type">
                   <option value="any">Any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                   </select>
                </div>
                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="any">Any</option>
                        <option value="apartment">Apartment</option>
                        <option value="studio">Studio</option>
                        <option value="bedspace">BedSpace</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min. Price</label>
                    <input type="number" name="minPrice" id="minPrice" placeholder="700 AED" />
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max. Price</label>
                    <input type="text" name="maxPrice" id="maxPrice" placeholder="80000 AED" />
                </div>
                <div className="item">
                    <label htmlFor="builder">Pref. Builder</label>
                    <input type="text" name="builder" id="builder" placeholder="Damac" />
                </div>
                <button>
                    <img src="/search.png" alt="Search" />
                </button>
            </div>
        </div>
    );
}