interface IClipItOption {
    contentType?: string
}

declare module 'clip-it' {
    export default function (text: string, options?: IClipItOption): boolean;
}
