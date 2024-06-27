
import './css/index.css'
import Header from './components/Header'
import Home from './layouts/Home'
import Destination from './layouts/Destination';
import Crew from './layouts/Crew';

function App() {

  return (
    <>
      <Header />
      <main id='main'>
        
        {/* <Home/> */}
        
        {/* <Destination/> */}
        <Crew/>
      </main>
    </>
  )
}

export default App
