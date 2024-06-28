import { BrowserRouter,Routes,Route} from 'react-router-dom'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Quiz from './pages/Quiz';
import Signup from './pages/Signup';

function App() {
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');

  // const handlenav = (e) => {
  //   e.preventDefault();
  //   console.log(name);
  //   console.log(password);
  // };

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/homepage' element={<Homepage></Homepage>}></Route>
        <Route path='/quizpage' element={<Quiz></Quiz>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
