import React, { useEffect, useState } from "react";
import Arrivals from "./Arrivals";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Deals from "./Deals";
import Selling from "./Selling";
import Ads from "./Ads";

const Home = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    console.log("k" + window.innerWidth);
    fetch("http://localhost:5000/api/v1/phone/")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  useEffect(() => {
    const filt =
      datas.items && datas.items.filter((item) => item.name === "samsung");
    setFilteredItems(filt);
    console.log(filteredItems);
  }, [datas.items]);
  /* useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
   */

  return (
    <div>
      <Hero />
      <Arrivals />
      <Banner />
      <Ads />
      <Deals />

      <Selling />
      {/*   <Promo/> */}
    </div>
  );
};

export default Home;
