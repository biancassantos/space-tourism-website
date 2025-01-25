import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import MainLayout from "./layouts/MainLayout";
import DestinationLayout from "./layouts/DestinationLayout";
import CrewLayout from "./layouts/CrewLayout";
import Home from "./pages/home/Home";
import Moon from "./pages/destinations/Moon";
import Mars from "./pages/destinations/Mars";
import Europa from "./pages/destinations/Europa";
import Titan from "./pages/destinations/Titan";
import DouglasHurley from "./pages/crew/DouglasHurley";
import MarkShuttleworth from "./pages/crew/MarkShuttleworth";
import VictorGlover from "./pages/crew/VictorGlover";
import AnoushehAnsari from "./pages/crew/AnoushehAnsari";

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
          <Route path="/crew" element={<CrewLayout />}>
            <Route index element={<Navigate to="/crew/douglas-hurley" />} /> {/* Navigates automatically to the Douglas Hurley route */}
            <Route path="/crew/douglas-hurley" element={<DouglasHurley />} />
            <Route path="/crew/mark-shuttleworth" element={<MarkShuttleworth />} />
            <Route path="/crew/victor-glover" element={<VictorGlover />} />
            <Route path="/crew/anousheh-ansari" element={<AnoushehAnsari />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;