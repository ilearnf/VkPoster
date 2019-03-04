export enum AttachmentType {
    Photo = "photo"
}

export interface IAttachment {
    type: AttachmentType;
    ownerId: string;
    id: string;
}