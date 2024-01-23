import './App.css';
import MainLayout from './layouts/MainLayout';
import BookManager from './pages/BookManager';

function App() {

  return (
    <div className="App">
      <MainLayout>
        <BookManager />
      </MainLayout>
    </div>
  );
}

export default App;
