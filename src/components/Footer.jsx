// Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-4 mt-10">
      <div className="text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Online-Library — All Rights Reserved
        </p>

        <a
          href="https://github.com/yaccir"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 underline mt-2 inline-block"
        >
          Visit My GitHub Profile
        </a>
      </div>
    </footer>
  );
}
