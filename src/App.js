import React from "react";
import GitHubApp from "./components/GitHubApp";
import ResetStyle from "./styled/ResetStyle";
import GlobalStyle from "./styled/GlobalStyle";

function App() {
    return (
        <>
            <ResetStyle />
            <GlobalStyle />
            <GitHubApp />
        </>
    );
}

export default App;
