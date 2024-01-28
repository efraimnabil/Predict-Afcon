interface IProps {
    handleImageDownload: () => void
    handleImageShare: () => void
}

const sideBar = ({handleImageDownload, handleImageShare}: IProps) => {
  return (
    <div className="flex items-center w-full my-2 justify-around">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded" 
          onClick={handleImageShare}>
            Share
        </button>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded" 
          onClick={handleImageDownload}>
            Download
        </button>
    </div>
  )
}

export default sideBar