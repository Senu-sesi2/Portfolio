// import React from 'react'
// import Header from '../components/Header'
// import Recipes from '../components/Recipes'

// const Home = () => {
//   return (
//     <main className='w-full flex flex-col'>
//         <Header
//         title={
//           <p>
//             Taste African flavors with
//             <br /> Joy!
//           </p>
//         }
//         type='home'
//         />
//       <section id="recipes" className='md:max-w-[1440px] mx-auto px-4 md:px-20'>
//         <Recipes />
//       </section>

//     </main>
//   )
// }

// export default Home

import React from 'react';
import Header from '../components/Header';
import Recipes from '../components/Recipes';

const Home = () => {
  return (
    <main className='w-full flex flex-col'>
      <Header
        title={
          <div className='text-center'>
            <h1 className='font-outfit font-extrabold text-5xl md:text-6xl text-white leading-tight tracking-tight drop-shadow-[0_8px_15px_rgba(255,165,0,0.5)]'>
              Taste African Flavors
            </h1>
            <h2 className='font-outfit italic text-3xl md:text-4xl text-white mt-4 drop-shadow-[0_4px_8px_rgba(0,128,0,0.4)]'>
              with Joy!
            </h2>
          </div>
        }
        type='home'
      />

      {/* Recipe Section */}
      <section 
        id="recipes" 
        className='md:max-w-[1440px] mx-auto px-4 md:px-20 mt-16'>
        <h2 className='text-4xl md:text-5xl text-green-700 font-semibold text-center mb-12'>
            Explore Our Rich Culinary Heritage
        </h2>

        <Recipes />

        {/* Call to Action */}
        {/* <div className='flex justify-center mt-12'>
          <button className='bg-green-700 text-white font-semibold py-3 px-10 rounded-full shadow-[0_4px_8px_rgba(0,128,0,0.6)] hover:bg-orange-500 transition-colors duration-300'>
            View All Recipes
          </button>
        </div> */}
      </section>
    </main>
  );
}

export default Home;





