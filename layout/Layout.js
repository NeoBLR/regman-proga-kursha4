import NavBar from '../components/NavBar.js'
import { useRef, useEffect } from 'react'

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}
