

const Categories = ({category,coverImage,coverBook,author}) => {
  return (
    <div className="w-80 justify-center items-center  flex flex-col m-1 p-1 h-85 border-2 border-white bg-black opacity-90">
        
        <div>
             <h2 className=" text-2xl font-bold text-center">{category}</h2>
            <img src={coverImage} alt="image" className="w-full h-50 object-cover rounded-lg shadow-md" />

        </div>
        
        <h2 className='text-xl font-bold'>{coverBook}</h2>
        <h3 className='text-xl'>by {author}</h3>

    
    </div>
  )
}

export default Categories