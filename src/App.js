import GlobalStyle from './global/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home';
import background from './img/bg.jpg'
import shape from './img/bg-shape.svg'
function App() {
  return (
    <Router>
      <GlobalStyle background={background} shape={shape}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
