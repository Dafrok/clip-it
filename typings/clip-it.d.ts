interface IClipItOption {
    contentType?: string
}

declare module 'clipIt' {
    export function clipIt(string, IClipItOption?): boolean;
}