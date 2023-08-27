
import './App.css';
import {useState} from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import {
  Header,
  LandingPage,
  Footer,
  Register,
  Login,
  Dashboard,
  SingleFood,
  FoodSwap
} from './components'

function App() {
  const [user, setUser] = useState('')
  return (
    <BrowserRouter>
    <div className="App">
      <Header setUser={setUser}/>
        <Routes>
        <Route exact path='/' element={
          <LandingPage />
        }>
        </Route>
        <Route exact path='/users/register' element={
          <Register setUser={setUser} />
        }>
        </Route>
        <Route exact path='/users/login' element={
          <Login setUser={setUser}/>
        }>
        </Route>
        <Route exact path='/dashboard' element={
          <Dashboard />
        }>
        </Route>
        <Route exact path='/dashboard/food/:id' element={
          <SingleFood />
        }>
        </Route>
        <Route exact path='/swap' element={
          <FoodSwap />
        }>
        </Route>
        </Routes>
      <Footer />  
    </div>
    </BrowserRouter>
  );
}

export default App;
