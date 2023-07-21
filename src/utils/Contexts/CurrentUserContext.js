import {createContext} from "react";

const CurrentUserContext = createContext({
    name:'',
    about:'' 
});

export default CurrentUserContext;