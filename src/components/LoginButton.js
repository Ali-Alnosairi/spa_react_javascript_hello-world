import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
    const { LoginWithRedirect } =useAuth0();

    return <button onClick={() =>LoginWithRedirect()}>
    </button> 
}