import { Provider } from 'react-redux';
import Navbar from './Components/Navbar';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar></Navbar>
      </div>
    </Provider>
  );
}

export default App;
