import { useState } from 'react'

import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import AppMain from "./components/AppMain/AppMain"
import AppFooter from "./components/AppFooter/AppFooter"
import Posts from "./data/Posts"
import CardStyle from "../src/components/AppMain/AppCard.module.css"

function App() {


  return (
    <>
      <AppHeader />
      {Posts.map(Posts => Posts.published && <AppMain key={Posts.id} image={Posts.image} title={Posts.title} content={Posts.content} tags={Posts.tags.map((tag, index) => <span key={index} className={CardStyle[tag]}>{tag} </span>)} />)}
      <AppFooter />
    </>
  )
}

export default App
