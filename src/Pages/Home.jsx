import React from "react";
import Cards from "../Components/Cards";
import Card2 from "../Components/Card2";
import Card3 from "../Components/Card3";
import Card4 from "../Components/Card4";
import Card5 from "../Components/Card5";

import data from "../Data/Datajson";
import data2 from "../Data/Western";
import data3 from "../Data/Sport";
import data4 from "../Data/Night";
import data5 from "../Data/pregnent";

const Home = () => {
  return (
    <div className="container-fluid px-5">
      <p className="text-center h2 mt-5 text-uppercase text-success">
        Shop page
      </p>
      <div className="container py-4">
        <div className="row" id="traditional">
          <h2 className="text-center  fw-semibold">Indian & Fusion wear</h2>
          {data.products.map((e, i) => {
            return (
              <>
                <Cards
                  img={e.img}
                  title={e.title}
                  desc={e.desc}
                  price={e.price}
                  key={i}
                  item={e}
                  main={e.maintitle}
                />
              </>
            );
          })}
        </div>
        {/* row2 */}
        <h2 id="western" className="text-center pt-5 ">
          Western wear
        </h2>

        <div className="row">
          {data2.products.map((e, i) => {
            return (
              <>
                <Card2
                  img={e.img}
                  title={e.title}
                  desc={e.desc}
                  price={e.price}
                  key={i}
                  item={e}
                  main={e.maintitle}
                />
              </>
            );
          })}
        </div>
        {/* row3 */}
        <h2 className="text-center mt-5 " id="sport">
          Sport & Active Wear
        </h2>
        <div className="row">
          {data3.products.map((e, i) => {
            return (
              <>
                <Card3
                  img={e.img}
                  title={e.title}
                  desc={e.desc}
                  price={e.price}
                  key={i}
                  item={e}
                  main={e.maintitle}
                />
              </>
            );
          })}
        </div>

        {/* row4 */}
        <div id="night">
          <h2 className="text-center mt-5 ">Night Wear</h2>
          <div className="row">
            {data4.products.map((e, i) => {
              return (
                <>
                  <Card4
                    img={e.img}
                    title={e.title}
                    desc={e.desc}
                    price={e.price}
                    key={i}
                    item={e}
                    main={e.maintitle}
                  />
                </>
              );
            })}
          </div>
        </div>
        {/* row5 */}
        <h2 className="text-center  mt-5" id="maternity">
          Maternity
        </h2>
        <div className="row">
          {data5.products.map((e, i) => {
            return (
              <>
                <Card5
                  img={e.img}
                  title={e.title}
                  desc={e.desc}
                  price={e.price}
                  key={i}
                  item={e}
                  main={e.maintitle}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
