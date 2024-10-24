import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <nav className="bg-gray-900 text-white p-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold">Front-End Developer</h1>
          <div>
            <ul className="flex space-x-4">
              <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">
        {/* Profile Section */}
        <section className="text-center my-12">
          <div className="relative w-40 h-40 mx-auto mb-6">
            <Image
              src="/profile.jpg" 
              alt="Profile Picture"
              className="rounded-full"
              layout="fill"
            />
          </div>
          <h2 className="text-4xl font-semibold">Hi, I'm Muhammad Danish</h2>
          <p className="text-xl mt-4 text-gray-700">
            I’m a frontend developer specializing in building modern, responsive websites and applications using TypeScript, Next.js, React, Tailwind CSS, and more.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="my-12">
          <h3 className="text-3xl font-semibold text-center">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Project 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col hover:flex-grow">
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800">E-commerce Website</h4>
                <p className="mt-2 text-gray-600">A fully responsive e-commerce site built using Next.js, React, and Tailwind CSS.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col hover:flex-grow">
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800">Personal Resume</h4>
                <p className="mt-2 text-gray-600">A clean, minimalistic online resume developed with HTML, CSS, and Next.js.</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col hover:flex-grow">
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800">Portfolio Website</h4>
                <p className="mt-2 text-gray-600">This portfolio website! Built using TypeScript, Tailwind CSS, and Next.js.</p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col hover:flex-grow">
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800">Other Projects</h4>
                <p className="mt-2 text-gray-600">Various other projects using modern web technologies like React, TypeScript, and Tailwind CSS.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-12 text-center">
          <h3 className="text-3xl font-semibold">Contact Me</h3>
          <p className="text-lg mt-4 text-gray-700">Feel free to reach out if you’d like to collaborate or chat about web development.</p>
          <p className="mt-4 text-gray-700">
            <strong>Email:</strong> <a href="mailto:muhammaddanish500@yahoo.com" className="text-yellow-500 hover:underline">muhammaddanish500@yahoo.com</a><br />
            <strong>Phone:</strong> <a href="tel:+923112479485" className="text-yellow-500 hover:underline">0311-2479485</a>
          </p>
          <a
            href="mailto:muhammaddanish500@yahoo.com"
            className="mt-4 inline-block bg-yellow-400 text-gray-900 py-2 px-4 rounded hover:bg-yellow-500 transition-colors duration-300"
          >
            Email Me
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 text-center">
        <p>© 2024 Muhammad Danish. All rights reserved.</p>
      </footer>
    </div>
  );
}
