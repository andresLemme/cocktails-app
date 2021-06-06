import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

export default function Error() {
  return (
    <section className="section error-page ">
      <h2>¡Ocurrio un error!</h2>
      <Link to="/">Volver a la Home</Link>
    </section>
  )
}
