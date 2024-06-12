import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';
import pricingCards from './libs/PricingCards';
import { CheckCheck } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Main content */}
      <main className="bg-black">
        <Navbar />
        {/* Spline model section */}
        <section id="home" className="h-screen flex justify-center items-center bg-black text-white relative">
          <Spline
            scene="https://prod.spline.design/IXTSbGyJCKPpuQVy/scene.splinecode"
            className="fixed top-0 left-0 w-full h-full z-5"
          />
          <Jumbotron />
        </section>
        {/* About section */}
        <section id="about" className="relative min-h-screen flex justify-center items-center bg-black text-white py-8 pb-4 mx-4 md:mx-8 z-10">
          <div className="absolute inset-2 bg-cover bg-center blur-lg" style={{ backgroundImage: 'url(/bg.jpeg)' }}></div>
          <div className="relative max-w-4xl text-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-md p-8 rounded">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              Welcome to nextbot! We are a cutting-edge technology company dedicated to providing innovative solutions for your business needs. Our team of experts is passionate about developing tools and applications that make your life easier and your work more efficient. Explore our services to learn more about how we can help you achieve your goals.
            </p>
          </div>
        </section>
        {/* Services section */}
        <Services />
        <section id="pricing" className="h-fit text-white min-h-screen w-full flex flex-col items-center justify-center gap-8 p-8">
          <h4 className="text-4xl text-white md:text-5xl font-bold">Pricing</h4>
          <div className='grid  text-white grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center h-fit w-full max-w-3xl gap-8'>
            {pricingCards.map((pricingCard) => {
              return (
                <PricingCard oneliner={pricingCard.oneliner} title={pricingCard.title} price={pricingCard.price} benefits={pricingCard.benefits} key={pricingCard.id} />
              )
            })}
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

function Navbar() {
  return (
    <div className='w-full text-white h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 flex items-center justify-center z-30 relative'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <h6 className='font-bold'>nextbot</h6>
        <ul className='flex gap-8'>
          <li><Link className='hover:text-fuchsia-300 transition-colors text-xs sm:text-base' href="#home">Home</Link></li>
          <li><Link className='hover:text-fuchsia-300 transition-colors text-xs sm:text-base' href="#about">About</Link></li>
          <li><Link className='hover:text-fuchsia-300 transition-colors text-xs sm:text-base' href="#pricing">Pricing</Link></li>
          <li><Link className='hover:text-fuchsia-300 transition-colors text-xs sm:text-base' href="#pricing">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  )
}

interface IPricingCardProps {
  title: string;
  price: number;
  benefits: string[]
  oneliner: string;
}
function PricingCard({ title, price, benefits, oneliner }: IPricingCardProps) {
  return (
    <div className='h-fit w-full rounded flex flex-col p-8 gap-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 relative'>
      <div className='flex flex-col gap-2'>
        <div>
          <h6 className='text-2xl'>{title}</h6>
          <p className='text-sm text-zinc-500'>{oneliner}</p>
        </div>
        <p className='text-4xl font-bold'>
          ${price} <span className='text-sm font-normal text-white'>/ Month</span>
        </p>
      </div>
      <button className='bg-black rounded p-2 text-whitetext-sm transition-colors hover:bg-fuchsia-800'>Try 7 days free!</button>
      <div className='flex flex-col w-full gap-4'>
        {benefits.map((benefit, i) => (
          <p key={i} className='text-sm text-zinc-500 flex items-center gap-2'>
            <span>
              {/* Assuming CheckCheck is an icon component */}
              <CheckCheck />
            </span>
            {benefit}
          </p>
        ))}
      </div>
      <div className="absolute inset-0 rounded overflow-hidden">
        <div className="border-2 border-fuchsia-700 hover:border-white rounded-full absolute" style={{
          animation: 'rotate 2s linear infinite'
        }}></div>
      </div>
    </div>
  );
}


function Jumbotron() {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white py-8 px-4 z-20 backdrop-filter backdrop-blur-lg">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Nextbot</h1>
        <p className="text-xl">
          Your one-stop solution for all technological advancements.
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-white-900 text-white w-full py-4 text-center z-10 relative">
      <div className="bg-primary">
        <section className="max-w-[1400px] mx-auto text-white">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                nextbot
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
                    <li className="cursor-pointer text-left hover:text-fuchsia-300">Home</li>
                    <li className="cursor-pointer text-left hover:text-fuchsia-300">About</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    More Links
                  </h1>
                  <ul className="flex flex-col gap-3 ">
                    <li className="cursor-pointer text-left hover:text-fuchsia-300">Privacy</li>
                    <li className="cursor-pointer text-left hover:text-fuchsia-300">Terms & Conditions</li>
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
    <section id="services" className="min-h-screen flex justify-center items-center text-white py-4 mx-4 md:mx-8 z-10 relative">
      <div className="max-w-6xl text-center">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="rounded-lg bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg border border-white p-8">
            <h3 className="text-2xl font-bold mb-4">Custom Chatbot Development</h3>
            <p className="text-base">
              We specialize in crafting bespoke chatbot solutions tailored to your business needs. From customer support to lead generation, our chatbots are designed to engage and convert.
            </p>
          </div>
          <div className="rounded-lg bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg border border-white p-8">
            <h3 className="text-2xl font-bold mb-4">AI-Powered Chatbot Integration</h3>
            <p className="text-base">
              Harness the power of artificial intelligence with our AI-driven chatbot integration services. Our chatbots learn from interactions, providing personalized experiences for your users.
            </p>
          </div>
          <div className="rounded-lg bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg border border-white p-8">
            <h3 className="text-2xl font-bold mb-4">Chatbot Consulting and Strategy</h3>
            <p className="text-base">
              Unsure how to leverage chatbots for your business? Our experts offer comprehensive consulting and strategy services, guiding you through the implementation and optimization process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
