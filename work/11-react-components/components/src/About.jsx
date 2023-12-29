import Header from './Header';
import Footer from './Footer';
import './About.css';
import Accordion from './Accordion';

function About() {

  return (
    <div className="about">
        <Header/>
        <main className='About_main'>
            <h2 className='About_title'>About Our Cat World</h2>
            <p>Welcome to our delightful cat-centric corner of the internet! Our cat website is a virtual haven for feline enthusiasts, where the charm and mystique of these graceful creatures come to life. Immerse yourself in a world of whiskers, purrs, and playful antics as we celebrate the diverse and enchanting universe of cats.</p>
            <p> Immerse yourself in the diverse world of cat breeds, each with its own unique personality and charm. Whether you're a seasoned cat owner seeking expert advice or a curious newcomer looking to be captivated by the whimsical antics of these graceful creatures, our website offers a plethora of resources and entertainment. Join our community forums to connect with like-minded individuals, share your own feline adventures, and participate in discussions ranging from quirky cat behaviors to DIY cat toys. Our cat website is more than just a digital space; it's a celebration of the extraordinary bond between humans and their beloved feline companions. </p>
            <Accordion/>
        </main>
        <Footer/>
    </div>
  );
}

export default About;
