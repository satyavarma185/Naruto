import React from "react";
import Navbar  from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";

export default function App() {
  const cards =  data.map(item => {
    return(
      <Card
        img={item.img}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        name={item.name}
        clan={item.clan}
      />
    )
  })
  return(
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      <Footer />
    </div>
  )
}
