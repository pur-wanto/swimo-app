import { Logo, Back } from "../assets"

interface HeaderProps {
  onClick?: () => void
  title?: string
  borderBottom?: boolean
}

const Header = (props: HeaderProps) => {
  const { onClick, title, borderBottom } = props
  return (
    <>
      <div className="flex items-center justify-between py-2 px-4 relative my-6 lg:my-10">
        <button onClick={onClick} className="md:hidden">
          <img src={Back} className="w-6 h-6" alt="Back" />
        </button>

        {title
          ? <p className="absolute top-3 left-1/2 transform -translate-x-1/2">{title}</p>
          : <img src={Logo} className="w-32 h-32 mx-auto absolute left-1/2 transform -translate-x-1/2" alt="Logo" />}
      </div>
      {borderBottom && <div className="h-1 bg-gray-50 w-full" />}
    </>
  )
}

export default Header