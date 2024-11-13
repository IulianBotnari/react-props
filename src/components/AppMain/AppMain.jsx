import AppImg from "../Img/AppImg"
import MainStyle from "./AppMain.module.css"
import CardStyle from "./AppCard.module.css"
import AppButton from "../AppButton/AppButton"


export default function () {
    //logic here


    //markup here

    return (

        <>
            <main className={MainStyle.main_el}>
                <div className={CardStyle.card_el}>
                    <AppImg />
                    <div className="description">
                        <h3>Titolo del post</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>

                        <AppButton />
                    </div>

                </div>
            </main>

        </>
    )
}