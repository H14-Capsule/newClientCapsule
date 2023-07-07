import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Certification from '../page/Certification';
import CheeringMessage from '../page/CheeringMessage';
import Home from '../page/Home';
import Letter from '../page/Letter';
import Layout from './Layout';


const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="letter" element={<Letter />} />
          <Route path="certification" element={<Certification />} />
          <Route path="cheeringMessage" element={<CheeringMessage />} />
        </Routes>
      </Layout>

    </BrowserRouter >
  );
};

export default Router;
