import {OuterWindowStyle} from './OuterWindowStyle'
import { InnerWindowStyle } from "./InnerWindowStyle";
export interface UserForms {
    id: number,
    controlZIndex: number,
    name: string,
    type: string,
    visible: boolean,
    autoSize: boolean,
    caption: string,
    cycle: string,
    drawBuffer: number,
    enabled: boolean,
    helpContextId: number,
    keepScrollsBarsVisible: string,
    mouseIcon: string,
    picture: string,
    pictureAlignment: string,
    pictureSizeMode: string,
    pictureTiling: boolean,
    rightToLeft: boolean,
    scrollBars: string,
    scrollHeight: number,
    scrollLeft: number,
    scrollTop: number,
    scrollWidth: number,
    showModal: boolean,
    startUpPosition: string,
    tag: string,
    whatsThisButton: boolean,
    controls: any,
    outerWindowStyle: OuterWindowStyle,
    innerWindowStyle:InnerWindowStyle
}