import React from "react"
import Header from "./Component/Header"
import CreateNote from "./Component/CreateNote"
import Note from "./Component/Note"
import FooterBottom from "./Component/FooterBottom"

const App = () => {
    return (
        <>
            <Header/>
            <CreateNote/>
            <Note />
            <FooterBottom/>
        </>
    )
}

export default App