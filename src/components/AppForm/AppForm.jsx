import { useState } from "react"
import Posts from "../../data/Posts"




export default function AppForm() {


    return (
        <>
            <form >
                <label htmlFor="title">Title</label>
                <input type="text"></input>
                <label htmlFor="content">Content</label>
                <input type="text"></input>
                <label htmlFor="tags">tags</label>
                <input type="text"></input>
                <label htmlFor="tags">Published</label>
                <input type="checkbox"></input>
            </form>
        </>
    )


}