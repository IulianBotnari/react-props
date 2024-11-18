import { useState } from 'react'

import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import AppMain from "./components/AppMain/AppMain"
import AppFooter from "./components/AppFooter/AppFooter"
import Posts from "./data/Posts"
import CardStyle from "../src/components/AppMain/AppCard.module.css"
import AppForm from "../src/components/AppForm/AppForm"

function App() {
  const [post, setPost] = useState(Posts)
  const [id, setId] = useState()
  const [title, setTitle] = useState()
  const [content, setContent] = useState()
  const [tags, setTags] = useState()
  const [published, setPublished] = useState()
  const [image, setImage] = useState('https://picsum.photos/600/300')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPost = {
      id: id,
      title: title,
      content: content,
      tags: tags.split(','),
      published: published,
      image: image,
    }
    setPost([...post, newPost])



  }

  return (
    <>
      <AppHeader />
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="id">Id</label>
          <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
          <label htmlFor="title">Title</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
          <label htmlFor="content">Content</label>
          <input type="text" value={content} onChange={e => setContent(e.target.value)}></input>
          <label htmlFor="tags">tags</label>
          <input type="text" value={tags} onChange={e => setTags(e.target.value)}></input>
          <label htmlFor="Published" >Published</label>
          <input type="checkbox" value={published} onChange={e => setPublished(e.target.checked)}></input>
          <label htmlFor="image">Image</label>
          <input type="text" value={image}></input>
          <button type="submit">Aggiungi Post</button>
        </form>
      </div>

      {post.map(Posts => Posts.published && <AppMain key={Posts.id} image={Posts.image} title={Posts.title} content={Posts.content} tags={Posts.tags.map((tag, index) => <span key={index} className={CardStyle[tag]}>{tag} </span>)} />)}
      <AppFooter />
    </>
  )
}

export default App
