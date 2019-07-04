import React from 'react';
import Home from './pages/Home';
import { HashRouter, Route } from 'react-router-dom';
import ProductList from './pages/ProductList'
import Chat from './pages/Chat'



class App extends React.Component {
  render() {
    return (
    <HashRouter>
      <Route path="/" exact component={Home} />
      <Route path="/products" exact component={ProductList} />
      <Route path="/chat" exact component={Chat} />
    </HashRouter>
    );
  }
}

export default App;
