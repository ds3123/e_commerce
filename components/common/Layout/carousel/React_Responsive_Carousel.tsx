

/*

  輪播套件 : < React Responsive Carousel >

   https://www.npmjs.com/package/react-responsive-carousel


*/

import { FC } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const React_Responsive_Carousel : FC< { images:string[] } > = ( { images } ) => {

    return <div className="mt-10 mx-auto md:px-4 sm:max-x-lg lg:max-w-6xl border-2">

                <h2> NextJs Carousel - GeeksforGeeks </h2>

                <Carousel autoPlay={true} infiniteLoop={true} >

                    <div>
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png" alt="image1"/>
                        <p className="legend">Image 1</p>
                    </div>

                    <div>
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172225/2.png" alt="image2" />
                        <p className="legend">Image 2</p>
                    </div>

                    <div>
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172226/3.png" alt="image3"/>
                        <p className="legend">Image 3</p>
                    </div>

                </Carousel>

            </div>  




} ;


export default React_Responsive_Carousel
       