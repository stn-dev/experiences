
import { useGSAP } from '@gsap/react'
import './App.css'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const sliderRef = useRef()
  const citieContainerRef = useRef()
  const citiesRef = useRef()

  useGSAP(() => {
    const getAmountToScroll = () => {
      let sliderScrollWidth = sliderRef.current.scrollWidth
      return (sliderScrollWidth - window.innerWidth)
    }

    const animation = gsap.to(sliderRef.current, {
      x: () => -(getAmountToScroll())
    })

    ScrollTrigger.create({
      trigger: sliderRef.current,
      end: `+=${getAmountToScroll()}`,
      scrub: true,
      pin: true,
      animation: animation,
      invalidateOnRefresh: true
    })
  }, [])

  useGSAP(() => {
    const getAmountToScroll = () => {
      let sliderWidth = citiesRef.current.scrollWidth
      return (sliderWidth - window.innerWidth)
    }

    const tween = gsap.to(citiesRef.current, {
      x: () => -(getAmountToScroll()),
      ease: 'none',
      duration: 3,
    })

    ScrollTrigger.create({
      trigger: citieContainerRef.current,
      end: () => `+=${getAmountToScroll()}`,
      pin: true,
      scrub: true,
      markers: true,
      invalidateOnRefresh: true,
      animation: tween
    })
  }, [])

  return (
    <main className='main'>
      <section className="container">
        <h1> scroll down </h1>
        <section ref={sliderRef} className='slider'>
          <div className='box red' >
            red
          </div>
          <div className='box blue' >
            bleu
          </div>
          <div className='box green' >
            green
          </div>
          <div className='box yellow' >
            yellow
          </div>
          <div className='box aqua' >
            aqua
          </div>
          <div className='box gray' >
            gray
          </div>
        </section>
        {/* <section className='end' > box end </section> */}
      </section>
      <section ref={citieContainerRef} className='cities-container'>
        <h1> Cities </h1>
        <section ref={citiesRef} className='cities-slider' >
          <div> France </div>
          <div> England </div>
          <div> Germany </div>
          <div> Korea </div>
          <div>Israel</div>
          <div> Tokyo </div>
          <div> America </div>
        </section>
        <div className='space' > end </div>
      </section>
    </main>
  )
}

export default App
