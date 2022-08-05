import React from 'react';
import classes from "./loader.module.css"

function Loader(props) {
    return (
        <div className="d-flex justify-content-center" >
            <div className={classes.loader}>

            </div>
        </div>
    );
}

export default Loader;