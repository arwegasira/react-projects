const Button = ({ type, text, bg, color, isLoading, action }) => {
  return (
    <button
      type={type}
      style={{ color: color, background: bg }}
      disabled={isLoading ? isLoading : false}
      onClick={action && action}
    >
      {text}
    </button>
  )
}
export default Button
