import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Item List</h1>
      <ItemForm />
      <ItemList />
    </div>
  </Provider>
);

export default App;

