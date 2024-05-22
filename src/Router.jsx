import { Route, Routes } from "react-router-dom";
import routes from "./routerConfig";
import Navbar from "./components/Navbar/Navbar";
// import DefaultSidebar from "./components/Navbar/Navbar";

export const AppRouter = () => {

  return(
    <>
      <Navbar />
      <Routes>
        {
          routes.map(({path, Component}, i) =>(
            <Route key={i} path={path} element={<Component/>}/>
          ))
        }
      </Routes>
    </>
    
  )
}