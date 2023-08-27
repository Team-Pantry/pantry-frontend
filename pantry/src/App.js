
import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import {
  Header,
  LandingPage,
  Footer,
  Register,
  Login,
  Dashboard,
  SingleFood
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
        <Route exact path='/dashboard' element={
          <Dashboard />
        }>
        </Route>
        <Route exact path='/dashboard/food/:id' element={
          <SingleFood />
        }>
        </Route>
        </Routes>
      <Footer />  
    </div>
    </BrowserRouter>
  );
}

export default App;
