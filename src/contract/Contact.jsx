import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
// import { Helmet } from 'react-helmet';
const Contact = () => {
    const position = [23.88993557339351, 90.40630561298941];
    return (
        <div>
            <div>
            </div>
            <div className='w-full h-auto flex justify-center py-10' >
                <p className='font-semibold text-[30px]' >  Our Location</p>
            </div>

            <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="w-full h-80 md:w-3/4 md:mx-auto border-4 border-indigo-500/100 rounded-lg">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div >
  );
};

export default Contact;
