import React, { Component } from 'react';
import {connect} from "react-redux";
import {getPhotos} from "../redux/photos";
import PhotosSelector from "./PhotosSelector";

interface IPhotosComponentProps {
    getPhotos: () => void;
}


class PhotosComponent extends Component<IPhotosComponentProps> {
    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        return (
            <div>
                Photos
                <PhotosSelector />
            </div>
        );
    }
}

export default connect(null, {getPhotos})(PhotosComponent);

