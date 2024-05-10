import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles.css'
import {HeartIcon, SpinnerIcon} from './icons.jsx'

function App() {
  
  const [Liked, setLiked] = useState(false)

  const handleLikeUnlike =()=> {
    setLiked(!Liked)
  }

  return (
    <div>
    <button className={`LikeBtn ${Liked?"liked":""}`} onClick={handleLikeUnlike}>
      <HeartIcon /> {Liked?"Liked":"Like"}
    </button>

    </div>
  )
}

export default App
