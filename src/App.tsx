import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Extras from "./pages/Extras";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";
import Certificate from "./pages/Certificate";
import Project from "./pages/Project";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Outlet /> 
      </div>
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",   // parent route
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },   // 👈 default route for "/"
      { path: "extras", element: <Extras /> },
      { path: "blog", element: <Blogs /> },
      { path: "contact", element: <Contact /> },
      { path: "projects", element: <Project/>},
      { path: "certificate", element: <Certificate/>}
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
