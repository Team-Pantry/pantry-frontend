
import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import {
  Header,
  LandingPage,
  Footer
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
        </Routes>
      <Footer />  
    </div>
    </BrowserRouter>
  );
}

export default App;
