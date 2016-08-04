import React from "react";
import styles from "./style.css";
import AppBar from 'material-ui/AppBar';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default class HomePage extends React.Component {
    render() {
        return (
            <div className={styles.content}>
                <AppBar
                  title="Title"
                />
                <GoogleMapLoader
                    containerElement={
                        <div
                            style={{
                                height: `100%`,
                            }}
                        />
                    }
                    googleMapElement={
                        <GoogleMap
                            ref={(map) => console.log(map)}
                            defaultZoom={3}
                            defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
                        >
                        </GoogleMap>
                    }
                />
            </div>
        );
    }
}
