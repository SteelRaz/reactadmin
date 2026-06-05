import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './features/Dashboard/components/MenuAdmin'
import MenuAdmin from './features/content/components/MenuAdmin'
import MenuContetnAdmin from './features/content/components/MenuContentAdmin'
import MenuContetnEdit from './features/content/components/MenuContentEdit'
import MenuBarAdmin from './shared/components/MenuBarAdmin'

function App() {

  return (
    <>
    <BrowserRouter>
      <MenuBarAdmin>
        <Routes>
          <Route path="/" element={<Test/>}/>
          <Route path="/Content" element={<MenuAdmin/>}/>
          <Route path="/Content-admin" element={<MenuContetnAdmin/>}/>
          <Route path="/Content-admin-Edit/:id" element={<MenuContetnEdit/>}/>
        </Routes>
      </MenuBarAdmin>
    </BrowserRouter>
    </>
  )
}

export default App
