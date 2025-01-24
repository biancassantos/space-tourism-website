import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import DestinationLayout from "./layouts/DestinationLayout";
import Moon from "./pages/destinations/Moon";
import Mars from "./pages/destinations/Mars";
import Europa from "./pages/destinations/Europa";
import Titan from "./pages/destinations/Titan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/destination" element={<DestinationLayout />}>
            <Route index element={<Navigate to="/destination/moon" />} /> {/* Navigates automatically to the moon route */}
            <Route path="/destination/moon" element={<Moon />} />
            <Route path="/destination/mars" element={<Mars />} />
            <Route path="/destination/europa" element={<Europa />} />
            <Route path="/destination/titan" element={<Titan />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;