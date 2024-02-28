import { createContext,useContext, useReducer } from "react";

const AuthContext = createContext()

const initialState = {
    accessToken: null
}

function reducer(state, action) {
    if (action.type === "setToken") {
        state = {...state, accessToken: action.payload}
    }

    return state
}

export const useAuth = ()=> useContext(AuthContext)

export default function AuthProvider({children, defaultState =initialState}) {
    const [state, dispatch] = useReducer(reducer, defaultState)

    return <AuthContext.Provider value={[state, dispatch]}>
        {children}
    </AuthContext.Provider>
}