function NotFound() {
  const style = {
    backgroundColor: "var(--blue-900)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  return (
    <main 
    className="main-not-found" 
    style={style}>
      <section>
        <h1>Sorry, this page does not exist!</h1>
      </section>
    </main>
  )
}

export default NotFound;