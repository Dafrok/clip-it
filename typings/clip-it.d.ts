interface IClipItOption {
    contentType?: string
}

declare module 'clip-it' {
    export function clipIt(text: string, options?: IClipItOption): boolean;
}
