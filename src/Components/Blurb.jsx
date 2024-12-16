export default function Blurb() {
  return (
    <div className="bg-slate-100/[.97] p-10 shadow-md lg:rounded-3xl w-full max-w-6xl mt-10 mb-10">
      <p className="text-6xl font-serif font-bold tracking-tight pb-2 bg-gradient-to-r from-blue-600 to-indigo-800 inline-block text-transparent bg-clip-text">
        UI, UX, Functionality, Design.
      </p>
      <p className="text-xl tracking-tight pb-5">
        I am a web developer with a passion for design and creating beautiful,
        user-friendly websites.
      </p>
      <p className="text-xl tracking-tight pb-5">
        Based in Durham, NC and seeking job opportunities.
      </p>
      <p className="text-xl tracking-tight">
        Find me on{" "}
        <a
          className="font-medium text-indigo-600 hover:underline"
          href="https://github.com/katiegd"
        >
          Github
        </a>{" "}
        or{" "}
        <a
          className="font-medium text-blue-600 hover:underline"
          href="https://www.linkedin.com/in/katiegduryea/"
        >
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
}
