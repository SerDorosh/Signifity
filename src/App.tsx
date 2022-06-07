import styled, { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import { theme } from "./theme";
import "./assets/fonts/Roboto.css";
import Footer from "./pages/Footer/Footer";
import MissionPage from "./pages/MissionPage/MissionPage";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 100px;
  font-family: "Roboto";
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content>
        <Routes>
          <Route path="/missions" element={<MissionPage />} />
        </Routes>
      </Content>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
