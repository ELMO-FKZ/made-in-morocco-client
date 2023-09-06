import { useEffect, useRef, memo } from "react"
import { BsBagCheckFill, BsBagDashFill, BsBagPlusFill, BsXLg } from "react-icons/bs"
import { useToast } from "../../hooks/useToast"
import PropTypes from "prop-types"
import "./toast.css"

const toastTypes = {
    add: {
      icon: <BsBagPlusFill />,
      iconClass: "add-icon",
      progressBarClass: "add-progress"
    },
    remove: {
      icon: <BsBagDashFill />,
      iconClass: "remove-icon",
      progressBarClass: "remove-progress"
    },
    update: {
      icon: <BsBagCheckFill />,
      iconClass: "update-icon",
      progressBarClass: "update-progress"
    },
  }

const Toast = memo(function Toast({ message, type, id }) {

    const { icon, iconClass, progressBarClass } = toastTypes[type]
    const toast = useToast()

    const handleDismiss = () => {
      toast.removeToast(id)
    }

    const timerID = useRef(null)

    useEffect(() => {
      timerID.current = setTimeout(() => {
        handleDismiss()
      }, 2000)

      return () => {
        clearTimeout(timerID.current)
      }
    }, [])

    return (
    <div className="toast">
      <span className={iconClass}>{icon}</span>
      <p className="toast-message">{message}</p>
      <button className="dismiss-btn" onClick={handleDismiss}>
        <BsXLg />
      </button>
      <div className="toast-progress">
        <div className={`toast-progress-bar ${progressBarClass}`}></div>
      </div>
    </div>
  )
})

export default Toast

Toast.propTypes = {
  message: PropTypes.any,
  type: PropTypes.any,
  id: PropTypes.any
}