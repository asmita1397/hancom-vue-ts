import { CommandStyle } from "./CommandStyle";
export interface CommandAttribute {
    id: number,
                name: string,
                type: string,
                accelerator: string,
                autoSize: boolean,
                caption: string,
                title: string,
                enabled: boolean,
                helpContextId: number,
                mouseIcon:string,
                picture: string,
                picturePosition: string,
                tabIndex:number,
                tabStop: boolean,
                tag: string,
                visible: boolean,
                wordWrap: boolean,
                takeFocusOnClick:boolean,
                locked: boolean,
                default: boolean,
                style: CommandStyle
}