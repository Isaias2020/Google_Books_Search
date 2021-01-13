import React from "react";
import Header from "../components/Header";

function NoMatch() {
    return (
        <div>
            <Header>
                <h1>404 Page not found</h1>
                <h1>
                    <span role="img" aria-label="Face with thinking face">
                        🤔
                    </span>
                </h1>
            </Header>
        </div>
    );
}

export default NoMatch;