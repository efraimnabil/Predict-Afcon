interface IProps {
    buttonText: string,
    onClick?: () => void
}

const Button = ({buttonText, onClick}: IProps) => {
  return (
    <button
        className="border border-primary text-primary text-sm rounded-3xl py-1 px-3 self-start md:text-xl xl:px-8 xl:py-2 hover:bg-primary hover:text-white transform active:scale-90 transition duration-150"
        onClick={onClick}
        >
        {buttonText}
    </button>
  )
}

export default Button