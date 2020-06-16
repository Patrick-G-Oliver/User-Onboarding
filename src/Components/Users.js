import React, { useState } from 'react';

// For every array produced by .map in App.js, render
// the following HTML elements displaying the data from 
// the following properties to the screen. 
const Users = (props) => {
    return (
        <div>
            <h2>{props.user.name}</h2>
            <p>{props.user.email}</p>
        </div>
    )
}

export default Users;
