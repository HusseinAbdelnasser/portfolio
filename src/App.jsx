import { useEffect, useState } from "react";
import Header from "./Components/1-Header/Header";
import Hero from './Components/2-Hero/Hero';
import Main from "./Components/3-Main/Main";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 300){
        setShowScrollBtn(true)
      } else {
        setShowScrollBtn(false)
      }
    })
  })

  const [showScrollBtn, setShowScrollBtn] = useState(false);
  return (
    <div id="up" className="container">
      <Header />
      <div className="divider" />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a style={{opacity: showScrollBtn ? 1 : 0 }} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
     </a>
    </div>
  )
}

export default App
