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
        <section id="about" className="min-h-screen flex justify-center items-center bg-black text-white py-8 pb-4">
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              Welcome to nextbot! We are a cutting-edge technology company dedicated to providing innovative solutions for your business needs. Our team of experts is passionate about developing tools and applications that make your life easier and your work more efficient. Explore our services to learn more about how we can help you achieve your goals.
            </p>
          </div>
        </section>
        {/* Services section */}
        <Services />
      </main>
    </div>
  );
}

function Navbar() {
  return (
    <div className='w-full text-white h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <h6 className='font-bold hover:text-fuchsia-300 transition-colors text-xs'>nextbot</h6>
        <ul className='flex gap-8'>
          <li><Link className='hover:text-fuchsia-300 transition-colors text-xs sm:text-base' href="#home">Home</Link></li>
          <li><Link className='hover:text-fuchsia-300 transition-colors text-xs sm:text-base' href="#about">About</Link></li>
          <li><Link className='hover:text-fuchsia-300 transition-colors text-xs sm:text-base' href="#services">Services</Link></li>
          <li><Link className='hover:text-fuchsia-300 transition-colors text-xs sm:text-base' href="#pricing">Pricing</Link></li>
          <li><Link className='hover:text-fuchsia-300 transition-colors text-xs sm:text-base' href="#contact">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="min-h-screen flex justify-center items-center bg-black text-white py-4">
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
