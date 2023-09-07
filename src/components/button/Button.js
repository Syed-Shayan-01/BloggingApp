
const Button = ({ text }) => {
    return (
      <button className="text-white duration-300 hover:scale-105 hover:bg-white
       hover:text-black m-2 bg-blue-600 py-2 px-4 rounded">
        {text}
      </button>
    )
  }
  
  export default Button