import { useState, useRef, useMemo, useCallback } from 'react';
import { Map, LayerProps, Marker, Popup, MapRef, MapLayerMouseEvent } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ControlPanel from './control-panel';
import Pin from './Pin'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2h1YW4wMTA2IiwiYSI6ImNrc3UzaHM0NDFjbTMydm1kaG1vaW1tN3YifQ.vMtkKlcWXantTp1p1Z6N3g'; // Set your mapbox token here

import geoJson from './a.json'

export const clusterLayer: LayerProps = {
    id: 'clusters',
    type: 'circle',
    source: 'earthquakes',
    filter: ['has', 'point_count'],
    paint: {
        'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
        'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
    }
};

export const clusterCountLayer: LayerProps = {
    id: 'cluster-count',
    type: 'symbol',
    source: 'earthquakes',
    filter: ['has', 'point_count'],
    layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        'text-size': 12
    }
};

export const unclusteredPointLayer: LayerProps = {
    id: 'unclustered-point',
    type: 'circle',
    source: 'earthquakes',
    filter: ['!', ['has', 'point_count']],
    paint: {
        'circle-color': '#11b4da',
        'circle-radius': 4,
        'circle-stroke-width': 1,
        'circle-stroke-color': '#fff'
    }
};

type PopupInfo = {
    city: String,
    population: String,
    image?: String,  // 使用可选属性
    state: String,
    latitude: Number,
    longitude: Number
}

export default function App() {
    const mapRef = useRef<MapRef>(null);
    const [map, setMap] = useState(null)
    const [viewState, setViewState] = useState({
        zoom: 13,
        pitch: 62,
        longitude: 115.4109739,
        latitude: 33.8762738,
        minZoom: 12,
        maxZoom: 19,
    })

    const initMapCallback = (even: MapLayerMouseEvent) => {

        const map = even?.target
        if (map) {
            setMap(map)
            map.on('click', (e: MapLayerMouseEvent) => {
                // console.log(e);
                // map?.flyTo({ center: [123, 32], duration: 2000 });
            })
        }
    }

    const [mapStyle, setMapStyle] = useState(null);

    const [popupInfo, setPopupInfo] = useState<PopupInfo | null>(null);
    const markerHandler = (e: any, city: any) => {
        e.originalEvent.stopPropagation();
        setPopupInfo(city);
        // // mapRef.current?.flyTo({ center: [city.longitude, city.latitude], duration: 2000 });
        mapRef.current?.getMap().easeTo({
            center: [city.longitude, city.latitude], // 新的经纬度
            zoom: 12, // 新的缩放级别
            duration: 2000, // 过渡动画持续时间（以毫秒为单位）
        });
    }

    const pins = useMemo(
        () =>
            geoJson.map((city, index) => (
                <Marker
                    key={`marker-${index}`}
                    longitude={city.longitude}
                    latitude={city.latitude}
                    anchor="right"
                    onClick={e => { markerHandler(e, city) }}
                >
                    <div style={{ display: "flex", alignItems: 'center' }}>
                        <Pin />
                        <div>{city.city}</div>
                    </div>
                </Marker>
            )),
        []
    )
    const onClick = (event: MapLayerMouseEvent) => {
    };

    const onMove = useCallback(({ viewState }) => {
        setViewState(viewState);
    }, [])

    return (
        <>
            <Map
                {...viewState}
                ref={mapRef}
                // viewState={viewState}
                // initialViewState={viewState}
                // onMove={evt => setViewState(evt.viewState)}
                onMove={onMove}

                onLoad={initMapCallback}
                mapStyle={mapStyle && mapStyle.toJS()}
                // mapStyle={'./mapstyles.json'}
                styleDiffing
                mapboxAccessToken={MAPBOX_TOKEN}
                onClick={onClick}

            // interactiveLayerIds={[clusterLayer.id]}
            >
                {/* <Source
                    id="earthquakes"
                    type="geojson"
                    data={geoJson}
                    cluster={true}
                    clusterMaxZoom={14}
                    clusterRadius={50}
                >
                    <Layer  {...clusterCountLayer} />
                </Source> */}
                {/* <Marker
                    latitude={33.8593}
                    longitude={115.48553}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <a href='www.baidu.com' style={{ color: 'red' }}>鹿邑县城</a>
                    <Pin />
                </Marker> */}
                {pins}
                {popupInfo && (
                    <Popup
                        anchor="top"
                        longitude={Number(popupInfo.longitude)}
                        latitude={Number(popupInfo.latitude)}
                        onClose={() => setPopupInfo(null)}
                    >
                        <div>
                            {popupInfo.city}, {popupInfo.state} |{' '}
                            <a
                                target="_new"
                                href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
                            >
                                Wikipedia
                            </a>
                        </div>
                        <img width="100%" src={popupInfo.image} />
                    </Popup>
                )}
            </Map>
            <ControlPanel onChange={setMapStyle} />
        </>
    );
}
