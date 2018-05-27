/*----------------------------------------------------------------------------*/
/* Source File:   PLANETINFO.TS                                               */
/* Description:   Model data against the JSON received by Planets Service.    */
/* Author:        Carlos Adolfo Ortiz Quirós (COQ)                            */
/* Date:          May.25/2018                                                 */
/* Last Modified: May.25/2018                                                 */
/* Version:       1.1                                                         */
/* Copyright (c), 2018 CSoftZ                                                 */
/*----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------
 History
 May.25/2018  COQ  File created.
 -----------------------------------------------------------------------------*/
interface PlanetInfo {
    msg: string;
    images: Images;
}
interface Images {
    mercurio: Mercurio;
    venus: Venus;
    tierra: Tierra;
    marte: Marte;
    jupiter: Jupiter;
    saturno: Saturno;
    urano: Urano;
    neptuno: Neptuno;
    pluton: Pluton;
}
interface Mercurio {
    img: string;
    degrees: string;
}
interface Venus {
    img: string;
    degrees: string;
}
interface Tierra {
    img: string;
    degrees: string;
}
interface Marte {
    img: string;
    degrees: string;
}
interface Jupiter {
    img: string;
    degrees: string;
}
interface Saturno {
    img: string;
    degrees: string;
}
interface Urano {
    img: string;
    degrees: string;
}
interface Neptuno {
    img: string;
    degrees: string;
}
interface Pluton {
    img: string;
    degrees: string;
}
