import { Route, Routes } from "react-router-dom"
import routes from "./routerConfig"

export const AppRouter = () => {

  return(
    <Routes>
      {
        routes.map(({path, Component}, i) =>(
          <Route key={i} path={path} element={<Component/>}/>
        ))
      }
    </Routes>
  )
}