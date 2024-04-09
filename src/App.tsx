import { Demo } from "./components/Demo"
import GitHubOAuth from "./components/GitHubOAuth"
import {Header} from "./components/Header-Comp"
import {BrowserRouter, Routes, Route} from "react-router-dom"
export interface IProps{
  name:string,
  initialCount:number
  }
const propsData:IProps = {
  initialCount: 10,
  name:"BalaJi"
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Demo propsData={propsData} />}>
        <Route path="/header" element={<Header/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
