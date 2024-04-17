import "./listItem.scss";

export default function ListItem(props){
    const item = props.item;
    return (
        <div  key = {item.title} className="itemContainer">

            <img src={item.img} alt={item.title} />
            <div className="infoContainer">
                <h4>{item.title}</h4>
                <span className="subtitle">
                    <img className="icon" src="pin.png" alt="Location"/>
                    {item.address}
                </span>
                <div className="priceContainer">
                    {item.price} AED
                </div>
                <div className="bottomContainer">
                    <div className="amenitiesContainer">
                        <div className="amenitiesItem">
                        <img className="icon" src="bed.png" alt="Bedroom"/>
                            {item.bedroom} Bedroom
                        </div>
                        <div className="amenitiesItem">
                        <img className="icon" src="bath.png" alt="Bathroom"/>
                        {item.bathroom} Bathroom
                        </div>
                    </div>

                    <div className="actionsContainer">
                        <img className="bookmark" src="save.png" alt="Bookmark"/>
                        <button className="btn"> Book Visit</button>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
}