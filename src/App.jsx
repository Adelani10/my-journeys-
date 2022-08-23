
import './index.css'
import Navbar from './Navbar'
import Card from './Card'
import data from './data'

function App() {
  const Data = data.map((item)=>{
    return <Card key= "item.id" 
                 item = {item} 
    />
  })
  return (
    <div className="App md:w-1/2 container mx-auto border border-orange-300 rounded-lg my-8 w-[97%] shadow-md shadow-black">
      <Navbar />
      {Data}
    </div>
  )
}

export default App
