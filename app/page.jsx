import { Feed } from "@/components"
import { Toaster } from 'react-hot-toast';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>Discover & Share</h1>
      <br className='max-md:hidden' />
      <span className='head_text orange_gradient text-center'>AI-Powered Prompts</span>
      <h1>
        <p className='desc text-center'>
          Promptopia is an open-source AI prompting tool for modern 
          world to discover, create and share creative prompts
        </p>
      </h1>
      <Feed />
      <Toaster />
    </section>
  )
}

export default Home