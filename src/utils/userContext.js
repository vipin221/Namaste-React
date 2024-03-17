import { createContext } from "react";

const userContext = createContext({
    loggedInUser: "Guest User",
});


 export default userContext;