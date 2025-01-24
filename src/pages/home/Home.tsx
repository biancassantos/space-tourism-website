import { Link } from "react-router";
import SpanHeading from "../../components/ui/SpanHeading";
import "./style.css";

function Home() {
  return (
    <main className="main-home">
      <div className="main-container">
        <section className="main-text">
          <SpanHeading text="So, you want to travel to" />
          <h1>Space</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
        </section>

        <section>
          <Link to="/destination">
            <button>Explore</button>
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Home;