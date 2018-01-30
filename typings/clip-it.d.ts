interface IClipItOption {
    contentType?: string
}

declare module 'clip-it' {
    export function clipIt(string, IClipItOption?): boolean;
}
