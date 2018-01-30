interface IClipItOption {
    contentType?: string
}

declare module 'clip-it' {
    export function clipIt(text: string, opts?: IClipItOption): boolean;
}
