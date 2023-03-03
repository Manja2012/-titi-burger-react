import { Route, Routes } from "react-router-dom";
import Template from './components/template';
import Home from './pages/pageHome';

function App() {
  return (
   <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />}></Route>

      </Route>
   </Routes>
  );
}

export default App;
