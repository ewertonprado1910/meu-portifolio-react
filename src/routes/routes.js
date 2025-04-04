import { Route, Routes } from "react-router-dom"

import Home from "../containers/Home"
import Languages from "../containers/Languages"
import AboutMe from "../containers/AboutMe"

const Router = () => {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Home />} />
                <Route path="/languages" element={<Languages />} />
                <Route path="sobre" element={<AboutMe />} />
            </Route>
        </Routes>
    )
}

export default Router