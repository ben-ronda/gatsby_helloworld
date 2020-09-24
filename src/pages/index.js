import React from "react"
import Header from "../components/header"

export default function Home() {
  return <div style={{ color: 'darkolivegreen' }}>
    <Header
      pageName="Hello Gatsby"
    />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/ngqyo2AYYnE"></img>
  </div>
}
