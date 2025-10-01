import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import Footer from "./components/Footer";
import Certificate from "./pages/Certificate";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import FullProject from "./pages/FullProject";
import CertificateFull from "./pages/CertificateFull";
import AchievementFull from "./pages/AchievementFull";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="service-body">
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
      { index: true, element: <Home /> },   //default route for "/"
      { path: "blogs", element: <Blogs /> },
      { path: "contact", element: <Contact /> },
      { path: "projects", element: <Project/>},
      { path: "certificate", element: <Certificate/>},
      { path: "projects/:id", element: <FullProject/>},
      { path: "blog/:id", element: <Blog/>},
      { path: "certificate/:id", element: <CertificateFull/>},
      { path: "achievement/:id", element: <AchievementFull/>},
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;