import Img from "../../assets/Img/img-600x400.jpg"
import StyleImg from "./AppImg.module.css"

export default function AppImg() {
    //logic here


    //markup here

    return (
        <>
            <img className={StyleImg.img_el} src={Img} alt="Immagine" />
        </>

    )
}
