import Posts from "../../data/Posts"

export default function AppTags() {
    let newArray = []

    Posts.forEach(element => {
        const tagsEL = element.tags

        tagsEL.forEach(element => {

            if (!newArray.includes(element)) {
                newArray.push(element)

            }

        })

    })

    return (
        <>
            <div>

                {newArray}

            </div>
        </>
    )
}