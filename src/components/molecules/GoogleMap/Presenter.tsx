import GoogleMapReact, { MapOptions } from "google-map-react";
import { CSSProperties, ReactNode, useEffect, useState, VFC } from "react";

import { MapPin } from "../../atoms/MapPin/Default";

export type Props = {
  apiKey: string;
  className?: string;
  customizedMapOptions?: MapOptions;
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

export const Presenter: VFC<Props> = ({
  apiKey,
  className,
  customizedMapOptions,
  height = 400,
  latitude,
  longitude,
  style,
}) => {
  const createMapOptions = (): MapOptions => {
    return {
      fullscreenControl: false,
      mapTypeControl: false,
      mapTypeControlOptions: {
        position: "TOP_RIGHT",
      },
      panControl: false,
      scaleControl: false,
      scrollwheel: false,
      streetViewControl: false,
      zoomControl: false,
    };
  };
  const [mapOptionsState, setMapOptions] = useState<MapOptions>(createMapOptions);
  useEffect(() => {
    customizedMapOptions && setMapOptions({ ...customizedMapOptions });
  }, [customizedMapOptions]);

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
        options={mapOptionsState}
      >
        <AnyReactComponent lat={latitude} lng={longitude}>
          <MapPin style={{ marginLeft: -27, marginTop: -76 }} />
        </AnyReactComponent>
      </GoogleMapReact>
    </div>
  );
};
