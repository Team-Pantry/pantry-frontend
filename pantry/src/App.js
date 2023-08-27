
import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import {
  Header,
  LandingPage,
  Footer,
  Register,
  Login
} from './components'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
        <Routes>
        <Route exact path='/' element={
          <LandingPage />
        }>
        </Route>
        <Route exact path='/users/register' element={
          <Register />
        }>
        </Route>
        <Route exact path='/users/login' element={
          <Login />
        }>
        </Route>
        </Routes>
      <Footer />  
    </div>
    </BrowserRouter>
  );
}

export default App;
