import { Navbar, Footer } from "./components"
import { Outlet } from "react-router-dom"
import NewsContextProvider from "./contexts/NewsContextProvider"


function App() {

  return (
    <NewsContextProvider classname="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </NewsContextProvider>
  )
}

export default App
