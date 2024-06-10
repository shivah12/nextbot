import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      {/* Main content */}
      <main className="bg-black">
      <Navbar />
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

function Navbar() {
  return (
    <div className='w-full text-white h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <h6 className='font-bold hover:text-fuchsia-300 transition-colors text-lg'>nextbot</h6>
        <ul className='flex gap-8'>
          <li><Link className='hover:text-fuchsia-300 transition-colors text-xxs sm:text-base' href="#home">Home</Link></li>
          <li><Link className='hover:text-fuchsia-300 transition-colors text-xxs sm:text-base' href="#about">About</Link></li>
          <li><Link className='hover:text-fuchsia-300 transition-colors text-xxs sm:text-base' href="#pricing">Pricing</Link></li>
          <li><Link className='hover:text-fuchsia-300 transition-colors text-xxs sm:text-base' href="#pricing">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  )
}
