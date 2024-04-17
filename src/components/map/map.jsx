import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon.png";

export default function MapView({ items }) {
    console.log(items);
  const center = [items[0].latitude, items[0].longitude];
  return (
    <MapContainer
      className="mapsContainer"
      center={center}
      zoom={6}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {items.map((e) => (
        <Marker position={[e.latitude, e.longitude]}>
          <Popup>
            <div className="popUpInfoContainer">
              <img src={e.img} alt={e.title} style={{height:"80px",width:"80px"}}/>
              <div>
                <h4> {e.title}</h4>
                <span> {e.address}</span>
              </div>
            </div>
           
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
