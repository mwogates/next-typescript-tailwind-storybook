// Button.jsx
import React from 'react'
import classnames from 'classnames'

export type ButtonProps = {
  size?: string
  bgColor?: string
  textColor?: string
  children?: any
  variant?: string
  disabled?: boolean
  loading?: boolean
  finished?: boolean
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    size,
    bgColor,
    textColor,
    children,
    variant,
    disabled,
    loading,
    finished,
  } = props

  const handleClick = () => {
    if (props.disabled || !props.onClick) return
    props.onClick()
  }

  return (
    <button
      className={
        variant !== 'outlined'
          ? !disabled
            ? classnames(
                `bg-${bgColor}-500 text-${textColor}-700 flex items-center px-6 py-3 rounded-md hover:opacity-75 focus:outline-none focus:bg-${bgColor}-700`,
                { 'text-xs': size === 'sm', 'text-xl': size === 'lg' }
              )
            : `bg-${bgColor}-500 text-${textColor}-700 flex items-center px-6 py-3 rounded-md opacity-50 cursor-not-allowed`
          : !disabled
          ? classnames(
              `bg-transparent text-${textColor}-700 font-semibold flex items-center px-6 py-3 rounded-md hover:opacity-75 border border-${bgColor}-500 focus:outline-none focus:border-${bgColor}-700`,
              { 'text-xs': size === 'sm', 'text-xl': size === 'lg' }
            )
          : `bg-transparent text-${textColor}-700 font-semibold flex items-center px-6 py-3 rounded-md opacity-50 border border-${bgColor}-500 cursor-not-allowed`
      }
      onClick={handleClick}
    >
      <div className={!loading || finished ? `hidden` : `w-6 h-6 mr-4`}>
        <svg
          className="text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill={variant !== 'outlined' ? 'white' : 'black'}
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
      <div className={!finished || loading ? `hidden` : `w-6 h-6 mr-4`}>
        <svg
          className="text-white fill-white"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill={variant !== 'outlined' ? 'white' : 'black'}
          clipRule="evenodd"
        >
          <path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z" />
        </svg>
      </div>
      {children}
    </button>
  )
}
