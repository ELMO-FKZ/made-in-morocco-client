import { memo } from "react"
import Toast from "./Toast"
import PropTypes from "prop-types"
import "./toast.css"

const ToastsContainer = memo(function ToastsContainer({ toasts }) {
  return (
    <div className="toasts-container">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  )
})

export default ToastsContainer

ToastsContainer.propTypes = {
  toasts: PropTypes.any
}