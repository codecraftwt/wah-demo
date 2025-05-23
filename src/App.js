import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./styles/theme";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import MyStuff from "./pages/MyStuff";
import Wallet from "./pages/Wallet";
import Communities from "./pages/Communities";
import Chat from "./pages/Chat";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wah" element={<Home />} />
            <Route path="/my-stuff" element={<MyStuff />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
