import { Route, Routes } from "react-router-dom";
import Template from './components/template';
import Home from './pages/pageHome';
import ClicAndCollect from './pages/clicAndCollect';

function App() {
  return (
   <Routes>
      <Route path="/" element={<Template />}>
        <Route path='/pageHome' index element={<Home />}></Route>
        <Route path='/clicAndCollect' element={<ClicAndCollect />} />
      </Route>
   </Routes>
  );
}

export default App;
