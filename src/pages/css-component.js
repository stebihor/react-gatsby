import React from "react"
import { Link } from "gatsby"

import Container from "../components/container"

export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  )
}