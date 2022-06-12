import './Hero.css'
import React from 'react'

const Hero = () => {


  return (
    <div class="hero min-h-screen">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Tienda DigiStore</h1>
            <p class="mb-5">Productos gaming de calidad al mejor precio.</p>
            <button class="btn btn-primary"><a>Ver Productos</a></button>
        </div>
        </div>
    </div>
  )
}
export default Hero