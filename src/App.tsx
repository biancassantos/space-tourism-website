import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import MainLayout from "./layouts/MainLayout";
import DestinationLayout from "./layouts/DestinationLayout";
import CrewLayout from "./layouts/CrewLayout";
import TechnologyLayout from "./layouts/TechnologyLayout";
import Home from "./pages/home/Home";
import Moon from "./pages/destinations/Moon";
import Mars from "./pages/destinations/Mars";
import Europa from "./pages/destinations/Europa";
import Titan from "./pages/destinations/Titan";
import DouglasHurley from "./pages/crew/DouglasHurley";
import MarkShuttleworth from "./pages/crew/MarkShuttleworth";
import VictorGlover from "./pages/crew/VictorGlover";
import AnoushehAnsari from "./pages/crew/AnoushehAnsari";
import LaunchVehicle from "./pages/technology/LaunchVehicle";
import Spaceport from "./pages/technology/Spaceport";
import SpaceCapsule from "./pages/technology/SpaceCapsule";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/space-tourism-website/" element={<Home />} />
          <Route path="/space-tourism-website/destination" element={<DestinationLayout />}>
            <Route index element={<Navigate to="/space-tourism-website/destination/moon" />} /> {/* Navigates automatically to the moon route */}
            <Route path="/space-tourism-website/destination/moon" element={<Moon />} />
            <Route path="/space-tourism-website/destination/mars" element={<Mars />} />
            <Route path="/space-tourism-website/destination/europa" element={<Europa />} />
            <Route path="/space-tourism-website/destination/titan" element={<Titan />} />
          </Route>
          <Route path="/space-tourism-website/crew" element={<CrewLayout />}>
            <Route index element={<Navigate to="/space-tourism-website/crew/douglas-hurley" />} /> {/* Navigates automatically to the Douglas Hurley route */}
            <Route path="/space-tourism-website/crew/douglas-hurley" element={<DouglasHurley />} />
            <Route path="/space-tourism-website/crew/mark-shuttleworth" element={<MarkShuttleworth />} />
            <Route path="/space-tourism-website/crew/victor-glover" element={<VictorGlover />} />
            <Route path="/space-tourism-website/crew/anousheh-ansari" element={<AnoushehAnsari />} />
          </Route>
          <Route path="/space-tourism-website/technology" element={<TechnologyLayout />}>
            <Route index element={<Navigate to="/space-tourism-website/technology/launch-vehicle" />} /> {/* Navigates automatically to the launch vehicle route */}
            <Route path="/space-tourism-website/technology/launch-vehicle" element={<LaunchVehicle />} />
            <Route path="/space-tourism-website/technology/spaceport" element={<Spaceport />} />
            <Route path="/space-tourism-website/technology/space-capsule" element={<SpaceCapsule />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;