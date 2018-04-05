import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const SwotList = (props) => (
  <div>
    <Header/>
    <div>
      <ul>
        {[1,2,3].map((i) => (
          <li>swot {i}</li>
        ))}
      </ul>
    </div>
    <Footer/>
  </div>
);

export default SwotList;