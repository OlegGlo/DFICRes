import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Podcasts from "./pages/Podcasts";
import Books from "./pages/Books";
import Articles from "./pages/Articles";
import Newsletters from "./pages/Newsletters";

import { useState } from "react";


export default function App() {
   return (
      <div>
         

         {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="Podcasts" element={<Podcasts />} />
               <Route path="Books" element={<Books />} />
               <Route path="Articles" element={<Articles />} />
               <Route path="Newsletters" element={<Newsletters />} />

               <Route path="*" element={<NoMatch />} />
            </Route>
         </Routes>
      </div>
   );
}

function Layout() {

   const [x, setX] = useState("A");

   function handleClick() {
      setX("B")
      console.log("change title")
   }

   return (
      <div>
         <h1>{x}</h1>
         {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
         <nav>
            <ul>
               <li>
                  <Link onClick={handleClick} to="/">Home</Link>
               </li>
               <li>
                  <Link to="/Podcasts">Podcasts</Link>
               </li>
               <li>
                  <Link to="/Books">Books</Link>
               </li>
               <li>
                  <Link to="/Articles">Articles</Link>
               </li>
               <li>
                  <Link to="/Newsletters">Newsletters</Link>
               </li>
               <li>
                  <Link to="/nothing-here">Nothing Here</Link>
               </li>
            </ul>
         </nav>

         <hr />

         {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
         <Outlet />
      </div>
   );
}

function Home() {
   return (
      <div>
         <h2>Home</h2>
      </div>
   );
}

function NoMatch() {
   return (
      <div>
         <h2>Nothing to see here!</h2>
         <p>
            <Link to="/">Go to the home page</Link>
         </p>
      </div>
   );
}
