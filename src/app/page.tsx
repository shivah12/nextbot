import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-black py-4 backdrop-filter backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>
            <span className="text-white text-lg font-bold cursor-pointer hover:text-fuchsia-300 transition duration-300">nextbot</span>
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-8 text-white">
              <li className="cursor-pointer hover:text-fuchsia-300 transition duration-300">Home</li>
              <li className="cursor-pointer hover:text-fuchsia-300 transition duration-300">About</li>
              <li className="cursor-pointer hover:text-fuchsia-300 transition duration-300">Services</li>
              <li className="cursor-pointer hover:text-fuchsia-300 transition duration-300">Contact</li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="bg-black">
        {/* Increased size of the section */}
        <section className="h-screen flex justify-center items-center bg-black text-white">
          <Spline
            scene="https://prod.spline.design/IXTSbGyJCKPpuQVy/scene.splinecode" 
          />
        </section>
      </main>
    </div>
  );
}
