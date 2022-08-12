
import './App.css';
import Header from './containers/Header';
import ProductList from './containers/ProductList';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path= '/' exact element= {<ProductList/>} />
          <Route path= '/product/:productId' exact element= {<ProductDetail/>}/>
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
