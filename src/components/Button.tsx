interface ButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  type: 'primary' | 'secondary';
  htmlType?: 'submit' | 'button';
}

const Button = ({ title, onClick, disabled, type, htmlType = 'button' }: ButtonProps) => {
  const baseClass = 'flex items-center justify-center w-full p-2 rounded-md cursor-pointer'
  const typeClass = type === 'primary'
    ? 'bg-blue-500 hover:bg-blue-400 border border-blue-500 !text-white'
    : 'bg-white border border-blue-500 !text-blue-500';
  const disabledClass = disabled
    ? 'opacity-30 cursor-not-allowed pointer-events-none hover:bg-none'
    : '';

  return (
    <button
      type={htmlType}
      onClick={htmlType === 'submit' ? undefined : onClick}
      className={`${baseClass} ${typeClass} ${disabledClass}`}
    >
      {title}
    </button>
  )
}

export default Button