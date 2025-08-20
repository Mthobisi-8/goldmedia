import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Service from './Components/Service';
import Portfolio from './Components/Portfolio';
import ContactUs from './Components/ContactUs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/ContactUs" element={<ContactUs />} />
    </>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
