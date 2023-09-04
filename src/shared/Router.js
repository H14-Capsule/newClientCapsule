import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Certification from '../page/Certification'
import CheeringMessage from '../page/CheeringMessage'
import Completion from '../page/Completion'
import Home from '../page/Home'
import Letter from '../page/Letter'
import Layout from './Layout'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="letter" element={<Letter />} />
          <Route path="certification" element={<Certification />} />
          <Route path="cheeringMessage" element={<CheeringMessage />} />
          <Route path="completion" element={<Completion />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
