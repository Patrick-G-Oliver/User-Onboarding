import React, { useState } from 'react';



const Users = (props) => {

    return (
        <div>
            <h2>{props.user.name}</h2>
            <p>{props.user.email}</p>
        </div>
    )
}


export default Users;
