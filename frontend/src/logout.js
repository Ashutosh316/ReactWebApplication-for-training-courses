import React from "react";

function Logout(){
    const handleLogout = ()=>{
        //delete the token from local to storage
        localStorage.removeItem('token');
        window.location.href="/admin";

    }
    return(
        <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
    )
}

export default Logout;