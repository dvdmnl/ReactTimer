import React from 'react';
import Nav from './Nav'

var Main = (props) => {
    return(
        <div>
            <div>
                <div>
                    <Nav />
                    <p>Main.js Rendered</p>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Main