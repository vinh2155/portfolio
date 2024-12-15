export default function Blurb() {
  return (
    <div className="bg-slate-100/[.97] p-10 shadow-md lg:rounded-3xl w-full max-w-6xl mt-10 mb-10">
      <p className="text-4xl font-serif font-bold tracking-tight pb-2 bg-gradient-to-r from-blue-600 to-indigo-800 inline-block text-transparent bg-clip-text">
        Full Stack Developer
      </p>
      <p className="text-xl tracking-tight pb-5">
        I’m a web developer with a passion for design and creating beautiful,
        user-friendly websites.
      </p>
      <p className="text-xl tracking-tight pb-5">
        Based in Durham, NC and seeking job opportunities.
      </p>
      <p className="text-xl tracking-tight">
        Find me on{" "}
        <a className="font-medium text-indigo-600 hover:underline" href="">
          Github
        </a>{" "}
        or{" "}
        <a className="font-medium text-blue-600 hover:underline" href="">
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
}
