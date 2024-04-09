import React from 'react'
import YouTube from './YouTube'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import DisplayVideo from './DisplayVideo'

export default function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<YouTube/>}></Route>
    <Route path="/video" element={<DisplayVideo/>}></Route>
  </Routes>
  </BrowserRouter>
  )
}

