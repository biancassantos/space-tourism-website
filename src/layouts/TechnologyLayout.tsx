import SpanHeading from "../components/SpanHeading";
import { Outlet } from "react-router";
import "./style.css";

function TechnologyLayout() {
  return (
    <main className="main-technology">
      <div className="technology-container max">
        <SpanHeading number="02" text="Space launch 101" />
        <Outlet />
      </div>
    </main>
  )
}

export default TechnologyLayout;