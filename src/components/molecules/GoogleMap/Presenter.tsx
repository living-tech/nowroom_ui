import GoogleMapReact, { MapOptions, Maps } from "google-map-react";
import { CSSProperties, FC } from "react";

import { MapPin } from "../../atoms/MapPin/Default";

export type Props = {
  apiKey: string;
  className?: string;
  height?: number;
  latitude: number;
  longitude: number;
  style?: CSSProperties;
};

const AnyReactComponent: FC<{ lat: number; lng: number }> = ({ children }) => <div>{children}</div>;

export const Presenter: FC<Props> = ({ apiKey, className, height = 400, latitude, longitude, style }) => {
  const createMapOptions = (maps: Maps): MapOptions => {
    return {
      fullscreenControl: false,
      mapTypeControl: false,
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT,
      },
      panControl: false,
      scaleControl: false,
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
