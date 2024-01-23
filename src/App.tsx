
import { ToastContainer } from 'react-toastify';
import MainLayout from './layouts/MainLayout';
import BookManager from './pages/BookManager';
import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {

  return (
    <div className="App">
      <MainLayout>
        <ToastContainer autoClose={5000} position="top-center" />
        <BookManager />
      </MainLayout>
    </div>
  );
}

export default App;
