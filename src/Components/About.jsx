export default function About() {
  return (
    <div
      id="about"
      className="bg-gradient-to-b from-slate-800 to-slate-900 p-4 pt-10 pb-10 sm:p-10 w-full flex flex-col sm:items-center justify-center"
    >
      <p className="text-4xl md:text-6xl font-serif font-bold tracking-tight pb-2 sm:pb-6 text-amber-200/[.98] opacity-0 intersect:opacity-100 delay-300 duration-700 transition intersect-once">
        A Little About Me...
      </p>
      <div className="text-xl text-slate-200 tracking-tight pb-1 sm:max-w-3xl opacity-0 intersect:opacity-100 delay-500 duration-700 transition intersect-once">
        <p className="pb-4">
          I am a creative self-starter with a passion for learning,
          problem-solving, and exploring new technologies. My background in
          photography, video production, and design has taught me to appreciate
          the art of making things look their best, whether it’s a captivating
          image, a compelling video, or a beautifully crafted website or
          application.
        </p>

        <p className="pb-4">
          Over the past year, I’ve dedicated more than 600 hours to mastering
          the Odin Project curriculum, where I’ve honed my skills in web
          development, coding, and building responsive, user-friendly
          applications.
        </p>

        <p className="pb-4">
          When I’m not at my desk, you’ll often find me enjoying the outdoors,
          rock climbing at my local gym, baking sourdough bread (ever searching
          for the perfect crumb), or spending time with my husband and our two
          cats.
        </p>

        <p className="pb-4">
          I’m excited to bring my creativity, technical skills, and dedication
          to making exceptional digital experiences.{" "}
        </p>
      </div>
    </div>
  );
}
