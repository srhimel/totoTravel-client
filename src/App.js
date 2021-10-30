import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './pages/components/Header/Header';
import Footer from './pages/components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Book from './pages/Book/Book';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Account/Login/Login';
import MyOrder from './pages/Account/MyOrder/MyOrder';
import ManageOrder from './pages/Account/ManageOrder/ManageOrder';
import AddHotel from './pages/Account/AddHotel/AddHotel';
import NotFound from './pages/NotFound/NotFound';
import Hotels from './pages/Hotels/Hotels';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/book/:id">
            <Book />
          </Route>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/places">
            <Hotels />
          </Route>
          <Route path="/contact-us">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/my-order">
            <MyOrder />
          </Route>
          <Route path="/all-orders">
            <ManageOrder />
          </Route>
          <Route path="/add-listing">
            <AddHotel />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
