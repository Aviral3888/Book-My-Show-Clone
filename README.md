# Book My Show Clone
 
Link : https://book-my-show-clone-709t5ne0t-aviral3888.vercel.app/

BookMyShow Website is the leading entertainment ticketing website.               
In this project I have made all the front-end design of this website using React.js and Tailwind CSS. Responsive Designing

#### Layout of Project
Website has 3 main pages : 
  1. Home Page
  2. Movies Page
  3. TV Shows Page                                     

Components like Navbar and Footer which were common in all the pages were used using HOC (Higher Order Components).

#### Components of Project

- **Carousel** is one of the main components in this project.                       
   4 separate carousels are designed depending on the page and sizes.                           
          1. Hero Carousel      2. Entertainment Carousel       3. Poster Carousel      4. Cast and Crew Carousel

- **Navbar** :: Contains BookMyShow Logo, a search bar, and some other components

- **Footer Section** :: Common to all pages, contains the links and information about shows in which city.

- **Poster Slider** :: Posters made to show all the data of movies on clicked redirect to that movie page.

#### TMDB API
To get all the movies related data like - Poster image, Name, Description, Cast and Crew, Language, Running Time etc.         
Also data of TV Shows, popular shows, Upcoming shows, Latest shows were taken from TMDB API.                          
*View [TMDB Documentation](https://www.themoviedb.org/documentation/api)*

#### Payment Gateway
RazorPay Gateway Integrated for makig Payments                          
*View [RazorPay Documentation](https://razorpay.com/docs/)*

#### Online Components Used 
- ***React Slick*** used for making carousels and customising styling.
- ***React Icons*** used for all the icons used in the website
- ***Headless UI*** used for making Disclosure for Payment Gatway
- ***Tailwind CSS*** used for individual designing of components. Give great flexibility which was lacked while using Bootstrap.
