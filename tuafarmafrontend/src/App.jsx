import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../theme.js";

import "./App.css";
import Home from "./pages/Home/Home.jsx";
import { ScrollProvider } from "./services/context/ScrollContext.jsx";
import Header from "./layouts/Header/Header.jsx";
// import Footer from "./layouts/Footer/Footer.jsx";
// import About from "./pages/About/About.jsx";
// import Contact from "./pages/Contact/Contact.jsx";
import { useImmobileData } from "./hooks/useImmobileData.js";

function App() {
  // const { data, error, isLoading } = useImmobileData();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>An error occurred: {error.message}</div>;
  

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/favorite' element={<Home />} />
            <Route path='/property' element={<Home />} /> */}
          </Routes>
          {/* <Footer /> */}
        </ScrollProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
