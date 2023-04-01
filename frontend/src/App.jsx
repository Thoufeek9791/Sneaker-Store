import { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/layout/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import webFont from "webfontloader";
import { Footer } from "./components/layout/footer/Footer";
import Home from "./components/Home/Home.jsx";
import { createTheme, ThemeProvider, colors } from "@mui/material";

const theme = createTheme({
  status: {
    danger: "#f00",
  },
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#000",
    },
    neutral: {
      main: colors.grey[500],
    },
  },
});

function App() {
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route extact path="/" Component={Home} />
          {/* <Route extact path="/men" Component={Men} */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
