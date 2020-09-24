import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
  return (
    <div style={{ color: "darkolivegreen" }}>
      <Link to="/">Home</Link>
      <Header
        pageName="Contact"
      />
      <p>Send me a message!</p>
    </div>
  )
}
