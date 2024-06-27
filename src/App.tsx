function App() {
  return (
    <>
      <main className="flex items-center justify-center w-screen h-screen bg-custom-yelow">
        <section className="w-full p-4 bg-white max-w-96 rounded-2xl">
          <img
            src="/images/illustration-article.svg"
            alt=""
            className="w-full rounded-2xl"
          />
          <h1 className="text-xl italic font-bold text-center sm:text-2xl md:text-4xl text-custom-black ">
            React JS + Typecript +{" "}
            <span className="">Tailwind CSS Project Starter</span>
          </h1>
        </section>
      </main>
      <footer className="fixed bottom-0 left-0 w-full p-4 bg-custom-yelow">
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          .
          <br />
          Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer>
    </>
  );
}

export default App;
