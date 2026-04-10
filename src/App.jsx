import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenuBarAdmin from './shared/components/MenuBarAdmin'
import Test from './features/Dashboard/components/MenuAdmin'
import MenuAdmin from './features/content/components/MenuAdmin'
import ContentAdmin from './features/content/components/ContentAdmin'

function App() {

  return (
    <>
    <BrowserRouter>
      <MenuBarAdmin/>
      <Routes>
        <Route path="/" element={<Test/>}/>
        <Route path="/Content" element={<MenuAdmin/>}/>
        <Route path="/Content-admin" element={<ContentAdmin/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
