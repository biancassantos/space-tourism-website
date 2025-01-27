import SpanHeading from "../components/SpanHeading";
import { Outlet } from "react-router";
import "./style.css";

function TechnologyLayout() {
  return (
    <main className="main-technology">
      <SpanHeading number="02" text="Space launch 101" />
      <Outlet />
    </main>
  )
}

export default TechnologyLayout;