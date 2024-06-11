import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Main content */}
      <main className="bg-black">
        <Navbar />
        {/* Spline model section */}
        <section id="home" className="h-screen flex justify-center items-center bg-black text-white">
          <Spline
            scene="https://prod.spline.design/IXTSbGyJCKPpuQVy/scene.splinecode"
          />
        </section>
        {/* About section */}
        <section id="about" className="min-h-screen flex justify-center items-center bg-black text-white py-8 pb-4 mx-4 md:mx-8">
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              Welcome to nextbot! We are a cutting-edge technology company dedicated to providing innovative solutions for your business needs. Our team of experts is passionate about developing tools and applications that make your life easier and your work more efficient. Explore our services to learn more about how we can help you achieve your goals.
            </p>
          </div>
        </section>
        {/* Services section */}
        <Services />
        <Footer />
      </main>
    </div>
  );
}

function Navbar() {
  return (
    <div className='w-full text-white h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <h6 className='font-bold'>nextbot</h6>
        <ul className='flex gap-8'>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#home">Home</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#about">About</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#pricing">Pricing</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#pricing">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-white-900 text-white w-full py-4 text-center">
      <div className="bg-primary">
        <section className="max-w-[1400px] mx-auto text-white">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                Rumo
              </h1>
              <p className="text-gray-400 text-left">
                Subscribe to our{" "}
                <span className="text-white font-bold">newsletter</span> for the
                monthly news updates.
              </p>
              <br />
              <div className="flex items-center h-10">
                <input
                  className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2"
                  type="text"
                  placeholder="Email"
                />
                <button className="bg-white hover:bg-white-200/75 h-full inline-block py-2 px-6 text-black">
                  Ok
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div className="">
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Important Links
                  </h1>
                  <ul className={`flex flex-col gap-3 `}>
                    <li className="cursor-pointer hover:text-fuchsia-500">Home</li>
                    <li className="cursor-pointer hover:text-fuchsia-500">About</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-6">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Links
                  </h1>
                  <ul className="flex flex-col gap-3 ">
                    <li className="cursor-pointer text-left hover:text-fuchsia-500">Home</li>
                    <li className="cursor-pointer text-left hover:text-fuchsia-500">About</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    More Links
                  </h1>
                  <ul className="flex flex-col gap-3 ">
                    <li className="cursor-pointer text-left hover:text-fuchsia-500">Privacy</li>
                    <li className="cursor-pointer text-left hover:text-fuchsia-500">Terms & Conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <p>&copy; 2024 nextbot. All rights reserved.</p>
    </footer>
  );
}

function Services() {
  return (
    <section id="services" className="min-h-screen flex justify-center items-center bg-black text-white py-4 mx-4 md:mx-8">
      <div className="max-w-6xl text-center">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg bg-gray-800 p-6">
            <h3 className="text-2xl font-bold mb-4">Service 1</h3>
            <p className="text-lg">
              Description of Service 1. This service provides...
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6">
            <h3 className="text-2xl font-bold mb-4">Service 2</h3>
            <p className="text-lg">
              Description of Service 2. This service helps with...
            </p>
          </div>
          <div className="rounded-lg bg-gray-800 p-6">
            <h3 className="text-2xl font-bold mb-4">Service 3</h3>
            <p className="text-lg">
              Description of Service 3. This service offers...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
