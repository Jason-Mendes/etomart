import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Img, Text } from '../components';

function LandingPage() {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="w-full ">
        <div className="flex flex-col justify-end pt-0 w-full">
          <div className="flex-col relative w-full ">
            <div className="flex justify-between items-center bg-[#ee9613] border border-solid border-white-A700_19 rounded-bl-[200px] rounded-br-[200px] rounded-tr-[200px] shadow-2xl h-full m-auto" style={{ height: '500px' }}>
              <div className="absolute top-5 my-4 ml-4 mr-4 mt-0 px-6">
              <div className="mt-0 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-0 sm:px-0 md:px-0 ">
              <div className="flex flex-row justify-between items-center">
                <Text className="text-5xl text-black-900 font-montserrat font-bold mb-0 ml-16 mr-20">
                  Your Daily Food <br/> Delivered <br/> Hot & Fresh
                </Text>
                <div className="flex flex-col"> {/* Container for the image and second text */}
  <Img className="object-cover rounded-bl-[200px] rounded-br-[126px] rounded-tr-[200px]" src="images/Main_groceries_reverse.jpg" loading="lazy" style={{ width: '800px', height: '370px' }} />
  <div className="flex justify-center"> {/* Container for the second text */}
    <Text className="text-3xl text-white font-montserrat font-bold mt-4 mb-4 ml-0 mr-0">
      Groceries, Meals, Pharmacies, anything!
    </Text>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




                 {/* Location stuff*/}{/* Location stuff */}
                              
                 <div className="container bg-white flex items-center p-5 m-8">
  <div className="button-group flex flex-col items-start">
    <div className="button-row flex items-center mb-6">
      <Button className="flex items-center bg-white text-black px-4 py-2 ml-4 rounded-[36px] shadow-lg pr-8 font-montserrat">
        <img className="h-7 mr-2" src="images/img_linkedin.svg" alt="linkedin" loading="lazy" />
        <p className="text-left md:text-3xl sm:text-[28px] text-[32px] text-gray-700 font-bold">Whats your Address?</p>
      </Button>
    </div>

    <div className="button-row flex mt-2">
      <Button className="flex items-center bg-white text-black px-4 py-2 ml-4 rounded-[36px] shadow-lg pr-8 font-montserrat">
        <img className="h-[20px] ml-0.5 md:ml-[0] mt-0.5 w-[42px]" src="images/img_save.svg" alt="save" loading="lazy" />
        <p className="text-left md:text-lg sm:text-[28px] text-[32px] text-gray-600 font-bold">Use Current Location</p>
      </Button>
    </div>


              
                </div>
                </div>  
                {/* Additional Components*/}
                <div className="flex justify-between items-center bg-[#ee9613] border border-solid border-white-A700_19 rounded-bl-[200px] rounded-br-[200px] shadow-bs h-full m-auto"
            style={{ height: '570px' }}>
    <div className="container flex justify-center items-center p-5 m-8">
        <div className="button-group flex flex-col items-center">
            <div className="button-row flex">
                <Button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Button 1</Button>
                <Button className="bg-amber-600 text-white px-4 py-2 rounded-md mr-2">Button 2</Button>
                <Button className="bg-amber-600 text-white px-4 py-2 rounded-md">Button 3</Button>
            </div>
            <div className="button-row flex mt-2">
                <Button className="bg-amber-600 text-white px-4 py-2 rounded-md mr-2">Button 4</Button>
                <Button className="bg-amber-600 text-white px-4 py-2 rounded-md mr-2">Button 5</Button>
                <Button className="bg-amber-600 text-white px-4 py-2 rounded-md">Button 6</Button>
            </div>
        </div>
    </div>
</div> 
 {/* Hero Slider Section */}
      <section className="hero-section">
        {/* Hero Slider or Static Image */}
      </section>
      
      {/* Search Functionality Section */}
      <section className="search-bar">
        {/* Search Input */}
      </section>
      
      {/* Featured Products or Categories Section */}
      <section className="featured-products">
        {/* Dynamically list featured products or categories */}
      </section>
      
      {/* Testimonials or Reviews Section */}
      <section className="testimonials">
        {/* Display user testimonials */}
      </section>
      
      {/* Call to Action Section */}
      <section className="cta">
        {/* <Link to="/products" className="btn btn-primary">Shop Now</Link> */}
      </section>
      
      {/* Footer Section */}
      <footer className="site-footer">
        {/* Footer Content */}
      </footer>
      {/* Hero Slider Section */}
      <section className="hero-section">
        {/* Hero Slider or Static Image */}
      </section>
      
      {/* Search Functionality Section */}
      <section className="search-bar">
        {/* Search Input */}
      </section>
      
      {/* Featured Products or Categories Section */}
      <section className="featured-products">
        {/* Dynamically list featured products or categories */}
      </section>
      
      {/* Testimonials or Reviews Section */}
      <section className="testimonials">
        {/* Display user testimonials */}
      </section>
      
      {/* Call to Action Section */}
      <section className="cta">
        {/* <Link to="/products" className="btn btn-primary">Shop Now</Link> */}
      </section>
      
      {/* Footer Section */}
      <footer className="site-footer">
        {/* Footer Content */}
      </footer>
      </div>
  );
}

export default LandingPage;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Img, Text } from '../components';

// function LandingPage() {
//   return (
//     <div className="font-montserrat">
//       {/* Hero Section */}
//       <div className="w-full">
//         <div className="flex flex-col justify-end pt-0 w-full">
//           <div className="flex-col relative w-full h-[696px] md:h-[600px] sm:h-[947px]">
//             <div className="flex justify-between items-center bg-yellow-400 border border-solid border-white-A700_19 rounded-bl-3xl rounded-br-3xl rounded-tr-3xl shadow-2xl h-full m-auto"
//               style={{ height: '570px' }}>
//               <div className="absolute top-5 my-4 ml-4 mr-4 mt-0 px-6">
//                 <div className="mt-0 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-0 sm:px-0 md:px-0">
//                   <Text className="text-5xl text-black-900 w-96">
//                     Your Daily Food <br /> Delivered <br /> Hot & Fresh
//                   </Text>
//                   <div className="flex justify-end md:ml-5">
//                     <Img className="object-cover rounded-bl-3xl rounded-br-3xl" src="images/img_istockphoto141.png" loading="lazy" style={{ width: '500px', height: '400px' }} />
                 
//                   <Text className="text-3xl text-white absolute top-[450px] left-[30px] md:left-[40px]">
//                     Groceries, Meals, Pharmacies, anything!
//                   </Text>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Location stuff */}
//       <div className="container flex items-center p-5 m-8">
//         <div className="button-group flex flex-col items-center">
//           <div className="button-row flex shadow">
//             <Button className="bg-slate-900 text-white px-4 py-2 ml-4 rounded-md ">Button 1</Button>
//           </div>
//           <div className="button-row flex mt-2">
//             <Button className="bg-amber-600 text-white px-4 py-2 rounded-md">Button 6</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;
















// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Img, Text } from '../components';

// function LandingPage() {
//   return (
//     <div className="font-montserrat">
//       {/* Hero Section */}
//       <div className="bg-white-A700 w-full">
//         <div className="flex flex-col justify-end pt-0 w-full">
//           <div className="flex-col relative w-full h-[696px] md:h-[703px] sm:h-[947px]">
//             <div className="flex justify-between items-center bg-[#ee9613] border border-solid border-white-A700_19 rounded-bl-[200px] rounded-br-[200px] rounded-tr-[200px] shadow-bs h-full m-auto"
//             style={{ height: '570px' }}>
//               <div className="absolute top-[5%] w-[100%] my-4 ml-4 mr-4 mt-0 px-6">
//                 <div className="mt-0 mb-16 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-0 sm:px-0 md:px-6">
//                   <Text className="text-5xl text-black-900" style={{ width: '900px', height: '170px' }}>
//                     Your Daily Food <br/> Delivered <br/> Hot & Fresh
//                   </Text>
//                   <div className="flex justify-end md:ml-5">
//                     <Img className="object-cover rounded-bl-[200px] rounded-br-[126px] rounded-tr-[200px]" src="images/img_istockphoto141.png" loading="lazy" style={{ width: '1500px', height: '400px' }} />
//                   </div>
//                 </div>
//                 <Text className="text-3xl text-white absolute top-[450px] left-[30px] md:left-[40px]"
//                 style={{ width: '600px', height: '40px', marginLeft: '35rem' }}>
//                   Groceries, Meals, Pharmacies, anything!
//                 </Text>
//               </div>
//             </div>
//             <div className="flex flex-col justify-start w-[32%] md:w-full ml-14 md:ml-0">
//               <div className="flex flex-col justify-start w-full gap-[60px] md:gap-10">
//                 {/* Additional Components */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Hero Slider Section */}
//       <section className="hero-section">
//         {/* Hero Slider or Static Image */}
//       </section>
      
//       {/* Search Functionality Section */}
//       <section className="search-bar">
//         {/* Search Input */}
//       </section>
      
//       {/* Featured Products or Categories Section */}
//       <section className="featured-products">
//         {/* Dynamically list featured products or categories */}
//       </section>
      
//       {/* Testimonials or Reviews Section */}
//       <section className="testimonials">
//         {/* Display user testimonials */}
//       </section>
      
//       {/* Call to Action Section */}
//       <section className="cta">
//         <Link to="/products" className="btn btn-primary">Shop Now</Link>
//       </section>
      
//       {/* Footer Section */}
//       <footer className="site-footer">
//         {/* Footer Content */}
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;


















// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button, Img, List, Text } from '../components';
// // Additional imports for components like HeroSlider, FeaturedProducts, Testimonials

// function LandingPage() {
//   return (
//     <div className=''>
//      <div className="bg-white-A700 font-montserrat w-full">
//   <div className="flex flex-col justify-end pt-0 w-full">

//       <div className="flex-col relative w-full h-[696px] md:h-[703px] sm:h-[947px]">
//         <div className="flex justify-between items-center bg-[#ee9613] border border-solid border-white-A700_19 rounded-bl-[200px] rounded-br-[200px] rounded-tr-[200px] shadow-bs h-full m-auto "
//          style={{ width: 'auto', height: '550px' }}>
//         <div className="absolute top-[5%] w-[100%] my-4 ml-4 mr-4  mt-0  px-6  ">
          
//           <div className="mt-0 mb-16 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-0 sm:px-0 md:px-6">
//                 <Text className="w-full text-left text-5xl text-black-900 my-4 mr-0 "
//                 style={{ width: '00px', height: '170px' }}>
//                   Your Daily Food <br/> Delivered <br/> Hot & Fresh
//                 </Text>
//                 <div class="flex justify-content:flex-end md:ml-5">

//                 <Img
//                   className=" object-cover rounded-bl-[200px] rounded-br-[126px] rounded-tr-[200px] "
//                   src="images/img_istockphoto141.png"
//                   loading="lazy"
//                   style={{ width: '1500px', height: '400px' }}
//                 />
//               </div>
//               </div>
//               <Text className="text-3xl md:text-[30px] sm:text-[30px] text-white absolute top-70 left-30 md:ml-40" 
//               style={{ width: '600px', height: '40px', marginLeft: '35rem' }}>           
//     Groceries, Meals, Pharmacies, anything!
// </Text>          
//         </div>
//       </div>
//       <div className="flex flex-col justify-start w-[32%] md:w-full ml-14 md:ml-0">
//         <div className="flex flex-col justify-start w-full gap-[60px] md:gap-10">
//           <div className="bg-white-A700 rounded-[36px] shadow-bs1 p-[9px] flex flex-col items-center justify-end w-full ">
//             <div className="flex items-center justify-start gap-[53px] mt-[7px] w-[88%] md:w-full">
//               <Img className="h-[67px]" src="images/img_linkedin.svg" alt="LinkedIn"/>
//               <Text className="text-[32px] md:text-3xl text-gray-600">
//                 What's your Address?
//               </Text>
//             </div>
//           </div>
//           <div className="relative w-[78%] sm:w-full h-[60px] md:h-[57px] ml-[37px] md:ml-0">
//             <div className="bg-white-A700 rounded-[30px] shadow-bs1 p-[7px] flex items-start justify-end w-full h-full">
//               <Img className="h-[41px] mt-0.5 w-[42px]" src="images/img_save.svg" alt="Save"/>
//             </div>
//             <Text className="absolute top-[12%] right-[2%] text-[32px] md:text-3xl text-amber-700">
//               Use Current Location
//             </Text>
//           </div>
//         </div>
//       </div>
//     </div>

// </div>
// </div>

        
//       {/* Hero Section */}
//       <section className="hero-section">
//         {/* Hero Slider or Static Image */}
//       </section>
      
//       {/* Search Functionality */}
//       <section className="search-bar">
//         {/* Search Input */}
//       </section>
      
//       {/* Featured Products or Categories */}
//       <section className="featured-products">
//         {/* Dynamically list featured products or categories */}
//       </section>
      
//       {/* Testimonials or Reviews */}
//       <section className="testimonials">
//         {/* Display user testimonials */}
//       </section>
      
//       {/* Call to Action */}
//       <section className="cta">
//         <Link to="/products" className="btn btn-primary">Shop Now</Link>
//       </section>
      
//       {/* Footer */}
//       <footer className="site-footer">
//         {/* Footer Content */}
//       </footer>
//       </div>
//   );
// }

// export default LandingPage;
