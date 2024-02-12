import { useEffect, useState } from "react";
import { getAllPrediction } from "../services/getAllPrediction";
interface IProps {

}

const Standing = ({}: IProps) => {
    const [isloading, setIsLoading] = useState(true);
    const [standing, setStanding] = useState([]);
    useEffect(() => {
        async function fetchPrediction() {
            try {
                const res = await getAllPrediction();
                res.data.predictions.sort((a: any, b: any) => b.accuracy - a.accuracy);
                setStanding(res.data.predictions);
                setIsLoading(false);
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchPrediction();
    }, []);

  return (
    <div className="flex flex-col items-center min-h-screen gap-5">
      <h1 className="text-3xl font-bold mt-10 text-primary">Standing</h1>
      <div className="flex flex-col items-center min-h-screen gap-5">
        {isloading ? <h1 className="text-white">Loading...</h1> : standing.map((item: any, index: number) => (
          <div key={index} className="flex flex-col items-center border border-primary rounded-xl w-96 px-10 py-4">
            <h1 className="text-white"> Name: {item.username}</h1>
            <h1 className="text-white"> Accuracy: {item.accuracy}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Standing