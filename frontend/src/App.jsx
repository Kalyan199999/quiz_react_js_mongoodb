
import { BrowserRouter , Routes , Route } from "react-router-dom"

import Home from "./pages/Home"
import AddQuation from "./pages/AddQuation"
import Quiz from "./pages/Quiz"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <>
       <BrowserRouter>

         <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/add" element={<AddQuation />}></Route>

            <Route path="/quiz" element={<Quiz />}></Route>

            <Route path="/*" element={<PageNotFound />}></Route>

         </Routes>

       </BrowserRouter>
       
    </>
  )
}

export default App
