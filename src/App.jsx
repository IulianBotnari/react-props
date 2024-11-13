import { useState } from 'react'

import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import AppMain from "./components/AppMain/AppMain"
import AppFooter from "./components/AppFooter/AppFooter"
import Posts from "./data/Posts"

function App() {


  return (
    <>
      <AppHeader />
      {Posts.map(Posts => <AppMain key={Posts.id} image={Posts.image} title={Posts.title} content={Posts.content} tags={Posts.tags.join(", ")} />)}
      <AppFooter />
    </>
  )
}

export default App
