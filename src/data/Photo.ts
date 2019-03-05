export interface IPhoto {
    id: number;
    owner_id: number;
    sizes: IPhotoSrc[];
}

interface IPhotoSrc {
    url: string;
    type: SizeType;
    width: number;
    height: number;
}

export enum SizeType {
    M = "m", 
    O = "o", 
    P = "p", 
    Q = "q", 
    R = "r", 
    S = "s", 
    W = "w", 
    X = "x", 
    Y = "y", 
    Z = "z"
}

export class Photo {
    static getSize(photo: IPhoto, sizeType: SizeType): IPhotoSrc {
        return photo.sizes.find(s => s.type == sizeType);
    }
    
    static getFullSize(photo: IPhoto): IPhotoSrc {
        return Photo.getSize(photo, SizeType.Z) || Photo.getSize(photo, SizeType.Y)
            || Photo.getSize(photo, SizeType.X) || Photo.getSize(photo, SizeType.R) 
            || Photo.getSize(photo, SizeType.W) || Photo.getSize(photo, SizeType.Q) 
            || Photo.getSize(photo, SizeType.P) || Photo.getSize(photo, SizeType.O) 
            || Photo.getSize(photo, SizeType.M) || Photo.getSize(photo, SizeType.S);
    }
    
    static getThumbnail(photo: IPhoto): IPhotoSrc {
        return Photo.getSize(photo, SizeType.O) || Photo.getSize(photo, SizeType.P)
            || Photo.getSize(photo, SizeType.Q) || Photo.getSize(photo, SizeType.R)
            || Photo.getSize(photo, SizeType.S) || Photo.getSize(photo, SizeType.M)
            || Photo.getSize(photo, SizeType.X) || Photo.getSize(photo, SizeType.Y)
            || Photo.getSize(photo, SizeType.Z) || Photo.getSize(photo, SizeType.W);
    }
}