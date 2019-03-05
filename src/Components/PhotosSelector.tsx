import React, { Component } from 'react';
import {connect} from "react-redux";
import Gallery from 'react-grid-gallery';
import {IPhoto, Photo} from "../data/Photo";

interface IGalleryImage {
    src: string;
    thumbnail: string;
    thumbnailWidth: number;
    thumbnailHeight: number;
    isSelected?: boolean;
}

interface IPhotosSelectorProps {
    photos: IPhoto[]
    selectPhoto: () => void;
}

interface IPhotosSelectorState {
    images: IGalleryImage[];
}

const mapPhotoToGalleryImage = (photo: IPhoto): IGalleryImage => {
    const fullSized = Photo.getFullSize(photo);
    const thumbnail = Photo.getThumbnail(photo);
    return {
        src: fullSized.url, 
        thumbnail: thumbnail.url, 
        thumbnailHeight: thumbnail.height, 
        thumbnailWidth: thumbnail.width
    };
};

class PhotosSelector extends Component<IPhotosSelectorProps, IPhotosSelectorState> {
    componentWillReceiveProps(nextProps: IPhotosSelectorProps) {
        if (!this.props.photos.length && nextProps.photos.length)
            this.setState({
                images: nextProps.photos.map(mapPhotoToGalleryImage)
            });
    }
    
    constructor(props: IPhotosSelectorProps) {
        super(props);
        
        this.state = {
            images: []
        };
    }
    
    onChange = (index: number) => {
        var images = this.state.images.slice();
        var img = images[index];
        if(img.hasOwnProperty("isSelected"))
            img.isSelected = !img.isSelected;
        else
            img.isSelected = true;

        this.setState({
            images: images
        });
    };

    render() {
        return (
            <div>
                <Gallery
                    images={this.state.images}
                    onSelectImage={this.onChange}
                    showLightboxThumbnails={true}/>
            </div>
        );
    }
}

export default connect(state => ({
    photos: state.photos.photos
}), {
    
})(PhotosSelector);
