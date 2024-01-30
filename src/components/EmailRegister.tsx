interface IProps {

}

const EmailRegister = ({}: IProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-50 flex flex-col items-center justify-center">
        <input type="text" placeholder="Email" className="border border-primary rounded-xl p-2 text-primary text-sm md:text-xl" />
        
    </div>
  )
}

export default EmailRegister