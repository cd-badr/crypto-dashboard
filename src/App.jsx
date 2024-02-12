
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { Header } from './layouts/header';

function App() {
  return (
    <>
    <Header />

      <Routes>

      <Route path="/" element={<HomePage />} />

      </Routes>
    </>
  );
}
export default App;