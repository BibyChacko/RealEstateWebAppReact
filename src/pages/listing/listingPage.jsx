import Filter from "../../components/filter/filter";
import ListItem from "../../components/listItem/listItem";
import MapView from "../../components/map/map";
import {listData} from "../../data/listing_dummy_data";

import "./listingPage.scss";
export default function ListingPage() {

    const data = listData;
    return (
        <div className="listingPageContainer">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter />
                    <div className="itemsListContainer">
                        {
                            data.map(e => ListItem({item:e}))
                        }
                    </div>
                </div>
            </div>

            <div className="mapContainer">
                <MapView items={data}/>
            </div>
        </div>
    );
}   