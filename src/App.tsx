function App() {
  return (
    <>
      <main className="flex items-center justify-center w-screen h-screen px-6 bg-custom-yelow">
        <section className="w-full p-6 bg-white max-w-96 rounded-[20px] shadow-[8px_8px_0_0_rgba(18,18,18)] border border-black flex flex-col gap-6">
          <div className="w-full rounded-[10px] h-[200px] overflow-hidden  ">
            <img
              src="/images/illustration-article.svg"
              alt="thumbnail image"
              className="object-cover w-full h-full"
            />
          </div>
          <article className="flex flex-col justify-between gap-3">
            <p className="px-3 py-1 text-xs font-extrabold rounded md:text-sm bg-custom-yelow w-fit text-custom-black">
              Learning
            </p>
            <p className="text-xs font-medium md:text-sm text-custom-black">
              Published 21 Dec 2023
            </p>
            <h2 className="text-xl font-extrabold md:text-2xl text-custom-black hover:cursor-pointer hover:text-custom-yelow">
              HTML & CSS foundations
            </h2>
            <p className="text-sm font-medium md:text-base text-custom-grey">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </article>
          <div className="flex items-center gap-3">
            <img
              src="/images/image-avatar.webp"
              alt="phto profile"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-sm font-extrabold">Greg Hooper</p>
          </div>
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
