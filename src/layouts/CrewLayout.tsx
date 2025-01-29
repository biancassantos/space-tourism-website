import SpanHeading from "../components/SpanHeading";
import { Outlet } from "react-router";
import "./style.css";

function CrewLayout() {
  return (
    <main className="main-crew">
      <div className="crew-container max">
        <SpanHeading number="02" text="Meet your crew" />
        <Outlet />
      </div>
    </main>
  )
}

export default CrewLayout;