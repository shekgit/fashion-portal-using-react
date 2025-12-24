import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";


function App() {

  return (
    <>
      <div className="text-3xl bg-black text-white h-full overflow-hidden">
          <Nav />
          <Hero />
          <Footer />
      </div>
    </>
  )
}

export default App
