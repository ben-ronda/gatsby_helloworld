import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return <div style={{ color: 'darkolivegreen' }}>
    <Link to="/contact/">Contact</Link>
    <Header
      pageName="Hello Gatsby!"
    />
    <p>What a strange world. Enjoy a random photo via unsplash:</p>
    <img src="https://source.unsplash.com/random"></img>
  </div>
}
