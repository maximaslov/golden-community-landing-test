import './App.css';
import Header from './components/Header/Header';
import Background  from './images/main-planet.jpg'

function App() {
  return (
    <div className='appWrapper'>
      <div className='mainBackground'>
        <img src={Background} alt='Background'/>
      </div>
      <Header />
    </div>
  )
}

export default App;
