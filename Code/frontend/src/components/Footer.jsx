export default function Footer() {
  return (
    <footer className="bg-background rounded-lg shadow-sm">
      <div className="py-20 px-6 text-center bg-gray-800 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-light mb-6">
            Pronto para conhecer nossa solução?
          </h2>
          <p className="text-gray-300 mb-8">
            Entre em contato conosco e descubra como podemos transformar a
            gestão do seu estoque.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contato"
              className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-lg transition-colors"
            >
              Falar conosco
            </a>
            <a
              href="/cadastro"
              className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-lg transition-colors"
            >
              Começar agora
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
