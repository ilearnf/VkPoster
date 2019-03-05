export enum AttachmentType {
    Photo = "photo"
}

export interface IAttachment {
    type: AttachmentType;
    ownerId: number;
    id: number;
}