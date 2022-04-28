import React from "react";
import { Redirect} from "react-router";
import { utils } from "../../utils";

const PerfilUser = () =>{
    const logout = () => {
      
        utils.clearLocalStore()
        
        return <Redirect to="/login" />
    }

    return(
        <div>
        <div>
          <h3>Welcome</h3>
        </div>
        <div>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      

    )
}

export default PerfilUser