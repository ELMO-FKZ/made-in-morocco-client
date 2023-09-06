import { createContext, useReducer} from "react"
import { toastReducer } from "../reducers/toastReducer"
import ToastsContainer from "../components/toast/ToastsContainer"
import PropTypes from "prop-types"

export const ToastContext = createContext()

const initialState = {
    toasts: [],
}

export const ToastContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(toastReducer, initialState)

    const addToast = (type, message) => {
        const id = Math.floor(Math.random() * 10000000)
        dispatch({ type: "ADD_TOAST", payload: { id, message, type } })
    }

    const add = (message) => {
        addToast("add", message)
    }
    
    const remove = (message) => {
        addToast("remove", message)
    }
    
    const update = (message) => {
        addToast("update", message)
    }

    const removeToast = (id) => {
        dispatch({ type: "DELETE_TOAST", payload: id })
    }

    const contextValues = { add, remove, update, removeToast }

    return (
        <ToastContext.Provider value={contextValues}>
            <ToastsContainer toasts={state.toasts} />
            {children}
        </ToastContext.Provider>
    )
}

ToastContextProvider.propTypes = {
    children: PropTypes.any.isRequired
}