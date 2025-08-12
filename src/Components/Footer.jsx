export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-2">
          <p className="text-gray-300">© Vinh H. 2025</p>
          <p className="text-gray-400">
            Powered by{" "}
            <a
              href="https://react.dev/"
              className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>{" "}
            &{" "}
            <a
              href="https://tailwindcss.com/"
              className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
