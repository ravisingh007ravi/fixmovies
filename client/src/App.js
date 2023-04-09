import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignUp, LogIn } from './components/AllCompenents'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '/SignUp' element={<SignUp />} ></Route>
        <Route path= '/LogIn' element={<LogIn />} ></Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
