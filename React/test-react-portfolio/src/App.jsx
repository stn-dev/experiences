import { useEffect, useState } from "react"
import NavBar from "./components/toogleMode/navBar/NavBar"
import Hero from "./components/toogleMode/my hero/Hero"
import About from "./components/toogleMode/about me/ About"
import Skill from "./components/toogleMode/navBar/my skill/Skill"
import Contact from "./components/toogleMode/contact/Contact"
import Footer from "./components/toogleMode/footer/footer"

function App() {

  const [isDark, setIsDark] = useState(false)
  const [hero, setHero] = useState(false)
  const [about, setAbout] = useState(false)
  const [skill, setSkill] = useState(false)
  const [contact, setContact] = useState(false)


  const changeMode = () => {
    setIsDark(!isDark)
  }


  useEffect(() => {

    const toObserve = function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting == true) {
          if (entry.target.id == "hero") {
            setHero(true)
          } else {
            setHero(false)
          }

          if (entry.target.id == "about") {
            setAbout(true)
          } else {
            setAbout(false)
          }

          if (entry.target.id == "skill") {
            setSkill(true)
          } else {
            setSkill(false)
          }

          if (entry.target.id == "contact") {
            setContact(true)
          } else {
            setContact(false)
          }
        }
      })

    }

    const sections = document.querySelectorAll(".section")
    const y = Math.round(window.innerHeight * .8)
    console.log(y)
    const observer = new IntersectionObserver(toObserve, {

      rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`,

    })

    sections.forEach(function (section) {
      observer.observe(section)
    })

  }, [])



  return (
    <div
      className="app"
      style={{ backgroundColor: `${isDark ? "black" : "#006B82"}` }}
    >

      <NavBar
        toDark={isDark}
        onClick={changeMode}
        hero={hero}
        about={about}
        skill={skill}
        contact={contact}
      />
      <Hero toDark={isDark} />

      <About toDark={isDark} />

      <Skill toDark={isDark} />

      <Contact toDark={isDark} />

      <Footer toDark={isDark} />
    </div>
  )
}

export default App
