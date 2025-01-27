import SpanHeading from "../components/SpanHeading";
import { Outlet } from "react-router";
import "./style.css";

function DestinationLayout() {
  return (
    <main className="main-destination">
      <SpanHeading number="01" text="Pick your destination" />
      <Outlet />
    </main>
  )
}

export default DestinationLayout;