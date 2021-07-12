import './App.css';
import { React } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Featured from './components/Featured';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Footer from './components/Footer';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/featured" component={Featured} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />
      <Route path="/about-us" component={AboutUs} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App;
