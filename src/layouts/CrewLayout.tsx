import SpanHeading from "../components/SpanHeading";
import { Outlet } from "react-router";
import "./style.css";

function CrewLayout() {
  return (
    <main className="main-crew">
      <SpanHeading number="02" text="Meet your crew" />
      <Outlet />
    </main>
  )
}

export default CrewLayout;