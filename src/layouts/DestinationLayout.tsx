import SpanHeading from "../components/SpanHeading";
import { Outlet } from "react-router";
import "./style.css";

function DestinationLayout() {
  return (
    <main className="main-destination">
      <div className="destination-container max">
        <SpanHeading number="01" text="Pick your destination" />
        <Outlet />
      </div> 
    </main>
  )
}

export default DestinationLayout;