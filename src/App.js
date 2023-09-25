
import './App.css';
import Homepage from './Page/Homepage';
// import Otppage from './Page/Otppage';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Otppage from './Page/Otppage';
import Success from './Page/Success';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/otp-verify/:phone" element={<Otppage/>}></Route>
    <Route path="/success" element={<Success/>}></Route>
   </Routes>
   </BrowserRouter>
      
      
    </div>
  );
}

export default App;
