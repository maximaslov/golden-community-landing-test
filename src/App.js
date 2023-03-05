import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';

function App() {

  return (
    <div className='appWrapper'>
      <BackgroundImage />
      <Header />
      <Main />
    </div>
  )
}

export default App;
