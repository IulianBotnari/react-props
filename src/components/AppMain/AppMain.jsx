
import MainStyle from "./AppMain.module.css"
import CardStyle from "./AppCard.module.css"
import AppButton from "../AppButton/AppButton"
import AppTags from "../AppTags/AppTags"
import Posts from "../../data/Posts"


export default function (props) {
    //logic here
    let newArray = []

    Posts.forEach(element => {
        const tagsEL = element.tags

        tagsEL.forEach(element => {

            if (!newArray.includes(element)) {
                newArray.push(element)

            }
        })
    })

    //markup here

    return (

        <>
            <main className={MainStyle.main_el}>
                <div className={CardStyle.card_el}>
                    <img src={props.image} alt="Immagine" />
                    <div className="description">
                        <h3>{props.title}</h3>
                        <p>
                            {props.content}
                        </p>
                        <p>
                            {props.tags}
                        </p>
                        <AppButton />
                        <AppTags />
                    </div>

                </div>
            </main>

        </>
    )
}