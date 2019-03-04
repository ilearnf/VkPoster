const jsonp = require("jsonp");
import {IAttachment} from "../data/Attachment";

const baseUrl = "https://api.vk.com/method";

export class WallApi {
    private token: string;
    
    constructor(token: string) {
        this.token = token;
    }
    
    post = (ownerId: string, message: string, attachments?: IAttachment[]) => {
        const attachmentsString = attachments && attachments.map(a => `${a.type}${a.ownerId}_${a.id}`) || "";
        jsonp(`${baseUrl}/wall.post?owner_id=${ownerId}&message=${message}&attachments=${attachmentsString}&access_token=${this.token}&v=5.92`,
            (response: {}) => console.log(response));
    }
}