import Cup from "./UI/Cup"
import { Link } from "react-router-dom"
interface IProps {

}

const Home = ({}: IProps) => {
  return (
    <div className="relative flex flex-col p-4 mt-10 items-center gap-5 w-full lg:flex-row lg:py-10 lg:justify-around">
        
        <div className="flex flex-col gap-3 lg:gap-10">
            <h1 className="text-primary text-2xl font-bold md:text-4xl">
                Predict the results of the African Cup of Nations
            </h1>

            <h3 className="text-secondary font-semibold md:text-xl">
                Download your predictions as an image and share on social media
            </h3>
            <h3 className="text-secondary font-semibold md:text-xl">
                Share your predictions with your friends
            </h3>


            <Link 
                to="/knockout"
                className="border border-primary text-primary rounded-3xl py-3 px-8 self-start md:text-xl"
            >
                Get Started
            </Link>
        </div>
        <Cup className="w-36 sm:w-48 lg:w-72" />

    </div>
  )
}

export default Home