import ImgSlider from "../../components/img-slider/imgSlider";
import ListTile from "../../components/listtile/listtile";
import MapView from "../../components/map/map";
import { singlePostData, userData } from "../../data/listing_dummy_data";
import "./detailPage.scss";

export default function DetailPage() {
  const propertyModel = singlePostData;

  return (
    <div className="detailPageContainer">
      <div className="details">
        <div className="wrapper">
          <ImgSlider images={propertyModel.images} />

          <div className="info">
            <div className="leftContainer">
              <h3 className="title">{propertyModel.title}</h3>
              <div className="address">
                <img src="pin.png" alt="Address" className="icon" />
                {propertyModel.address}
              </div>

              <div className="priceContainer">{propertyModel.price} AED</div>
            </div>

            <div className="rightContainer">
              <img className="avatar" src={userData.img} alt="Profile" />
              <h5>{userData.name}</h5>
            </div>
          </div>

          <div className="descContainer">{propertyModel.description}</div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="card column">
            <ListTile
              leadingIcon="utility.png"
              title="Utilities"
              subTitle="Render is possible"
            />
            <ListTile
              leadingIcon="pet.png"
              title="Pet Policy"
              subTitle="Pets are allowed"
            />
            <ListTile
              leadingIcon="fee.png"
              title="Property Fees"
              subTitle="Must have 3x the rent in total household income"
            />
          </div>
          <p className="title">Nearby places</p>
          <div className="card">
            <ListTile
              leadingIcon="school.png"
              title="School"
              subTitle="250m away"
            />
            <ListTile
              leadingIcon="bus.png"
              title="Bus Stop"
              subTitle="100m away"
            />
            <ListTile
              leadingIcon="restaurant.png"
              title="Restaurant"
              subTitle="200m away"
            />
          </div>
          <p className="title">Location</p>
    
          <div className="mapView">
            <MapView items={[propertyModel]} />
          </div>
        </div>
      </div>
    </div>
  );
}
