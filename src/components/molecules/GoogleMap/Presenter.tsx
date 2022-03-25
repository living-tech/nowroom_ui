import GoogleMapReact, { MapOptions, Maps } from "google-map-react";
import { CSSProperties, ReactNode, VFC } from "react";

import { MapPin } from "../../atoms/MapPin/Default";

export type Props = {
  apiKey: string;
  className?: string;
  height?: number;
  latitude: number;
  longitude: number;
  style?: CSSProperties;
};

const AnyReactComponent: VFC<{
  children: ReactNode;
  lat: number;
  lng: number;
}> = ({ children }) => <div>{children}</div>;

export const Presenter: VFC<Props> = ({ apiKey, className, height = 400, latitude, longitude, style }) => {
  const createMapOptions = (maps: Maps): MapOptions => {
    return {
      fullscreenControl: false,
      mapTypeControl: false,
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT,
      },
      panControl: false,
      scaleControl: true,
      scrollwheel: false,
      streetViewControl: false,
      zoomControl: false,
    };
  };

  return (
    <div className={`${className}`} style={{ height, ...style }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: apiKey,
        }}
        defaultCenter={{
          lat: latitude,
          lng: longitude,
        }}
        defaultZoom={16}
        options={createMapOptions}
      >
        <AnyReactComponent lat={latitude} lng={longitude}>
          <MapPin style={{ marginLeft: -27, marginTop: -76 }} />
        </AnyReactComponent>
      </GoogleMapReact>
    </div>
  );
};
