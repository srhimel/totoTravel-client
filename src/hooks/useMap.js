import { GoogleMap, LoadScript, Marker, Circle } from '@react-google-maps/api';

const useMap = (lat, lang) => {
    const containerStyle = {
        width: '100%',
        height: '380px'
    };

    const center = {
        lat: lat,
        lng: lang
    };
    const options = {
        strokeColor: '#0DCAF0',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#0DCAF0',
        fillOpacity: 0.2,
        clickable: true,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30,
        zIndex: 1
    }


    const onLoad = marker => marker;
    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_MAP_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
                <Marker
                    onLoad={onLoad}
                    position={center}
                    icon='https://i.ibb.co/bbXDhxL/send-1.png'
                    animation={1}
                />
                <Circle center={center} options={options} />
            </GoogleMap>

        </LoadScript>
    )
}

export default useMap;