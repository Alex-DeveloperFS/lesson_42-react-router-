import {BrowserRouter, Routes} from "react-router-dom"
import {Route} from "react-router"
import Home from "./components/Pages/Home.tsx"
import About from "./components/Pages/About.tsx"
import Contacts from "./components/Pages/Contacts.tsx"
import NotFound from "./components/Pages/NotFound.tsx"
import Login from "./components/Layouts/Login.tsx"
import Registration from "./components/Layouts/Registration.tsx"
import {ComponentType} from "react"

import Layouts from "./components/layouts.tsx";

interface RouteInterface {
  path: string,
  component: ComponentType,
  name: string
}

export const routes: RouteInterface[] = [
  {path: "/", component: Home, name: "Home"},
  {path: "/about", component: About, name: "About"},
  {path: "/contacts", component: Contacts, name: "Contacts"},
  {path: "/login", component: Login, name: "Login"},
  {path: "/registration", component: Registration, name: "Registration"},
  {path: "*", component: NotFound, name: "NotFound"}
]

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts/>}>
          {routes.map((route: RouteInterface, index: number) => (
            <Route key={index} path={route.path} element={<route.component/>}/>
          ))}
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App