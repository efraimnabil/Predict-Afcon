import Cup from "../components/UI/Cup"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="relative flex flex-col p-4 mt-10 items-center gap-5 w-full lg:flex-row lg:py-10 lg:justify-around">
        
        <div className="flex flex-col gap-3 lg:gap-10">
            <h1 className="text-primary text-2xl font-bold md:text-4xl">
                Predict the results of the African Cup of Nations
            </h1>

            <h3 className="text-secondary font-semibold md:text-xl">
                Register your email to get notified when the AFCON ends to know the winner of the predictions
            </h3>

            <h3 className="text-secondary font-semibold md:text-xl">
                Download your predictions as an image and share on social media
            </h3>

            <h3 className="text-secondary font-semibold md:text-xl">
                Share your predictions with your friends
            </h3>

            <Link 
                to="/knockout"
                className="border border-primary text-primary rounded-3xl py-3 px-8 self-start md:text-xl hover:bg-primary hover:text-white transform active:scale-90 transition duration-150"
            >
                Get Started
            </Link>
            <Link
                to="/standing"
                className="text-primary font-semibold md:text-xl"
            >
                Check the standing
            </Link>
        </div>
        <Cup className="w-36 sm:w-48 lg:w-72" />

    </div>
  )
}

export default Home