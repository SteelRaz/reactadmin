import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './features/Dashboard/components/MenuAdmin'
import MenuAdmin from './features/content/components/MenuAdmin'
import MenuContetnAdmin from './features/content/components/MenuContentAdmin'
import MenuContetnEdit from './features/content/components/MenuContentEdit'
import MenuBarAdmin from './shared/components/MenuBarAdmin'
import ProtectedRoute from './shared/components/ProtectedRoute'
import LoginKasirPage from './features/login/page/LoginAdminPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginKasirPage/>}/>
        <Route
          path='/*'
          element={
            <ProtectedRoute>
              <MenuBarAdmin>
                <Routes>
                  <Route path="/Content" element={<MenuAdmin/>}/>
                  <Route path="/Content-admin" element={<MenuContetnAdmin/>}/>
                  <Route path="/Content-admin-Edit/:id" element={<MenuContetnEdit/>}/>
                </Routes>
              </MenuBarAdmin>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
