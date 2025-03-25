export interface todoReq {
    content: string,
    done: boolean,
}
export interface todoRes extends Document {
    content: string,
    done: boolean,
}