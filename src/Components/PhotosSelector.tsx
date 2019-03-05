import React, { Component } from 'react';
import {connect} from "react-redux";
import Gallery from 'react-grid-gallery';
import {IPhoto, Photo} from "../data/Photo";
import {selectPhoto} from "../redux/photos";

interface IGalleryImage {
    src: string;
    thumbnail: string;
    thumbnailWidth: number;
    thumbnailHeight: number;
    isSelected?: boolean;
}

interface IPhotosSelectorProps {
    photos: IPhoto[]
    selectedPhotos: IPhoto[]
    selectPhoto: (photo: IPhoto) => void;
}

interface IPhotosSelectorState {
    images: IGalleryImage[];
}

const mapPhotoToGalleryImage = (photo: IPhoto, isSelected: boolean = false): IGalleryImage => {
    const fullSized = Photo.getFullSize(photo);
    const thumbnail = Photo.getThumbnail(photo);
    return {
        src: fullSized.url, 
        thumbnail: thumbnail.url, 
        thumbnailHeight: thumbnail.height, 
        thumbnailWidth: thumbnail.width, 
        isSelected
    };
};

class PhotosSelector extends Component<IPhotosSelectorProps, IPhotosSelectorState> {
    componentWillReceiveProps(nextProps: IPhotosSelectorProps) {
        if (!this.props.photos.length && nextProps.photos.length)
            this.setState({
                images: nextProps.photos.map(p => mapPhotoToGalleryImage(p))
            });
        
        if (nextProps.photos.length && !this.props.selectedPhotos.length && nextProps.selectedPhotos.length)
            this.setState({
                images: nextProps.photos.map(p => mapPhotoToGalleryImage(p, nextProps.selectedPhotos.includes(p)))
            });
    }
    
    constructor(props: IPhotosSelectorProps) {
        super(props);
        
        this.state = {
            images: []
        };
    }
    
    onChange = (index: number) => {
        const images = this.state.images.slice();
        const img = images[index];
        if(img.hasOwnProperty("isSelected"))
            img.isSelected = !img.isSelected;
        else
            img.isSelected = true;

        this.setState({
            images: images
        });
        
        this.props.selectPhoto(this.props.photos[index]);
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
    photos: state.photos.photos, 
    selectedPhotos: state.photos.selectedPhotos
}), {
    selectPhoto
})(PhotosSelector);
