import NavBar from '../Components/NavBar.js'
import { useRef, useEffect } from 'react'

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}
