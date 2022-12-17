import React from "react";
import type { NextPage } from "next";

import Card from "../../components/card/Card";
import Layout from "../../components/layout/Layout";
import Masonry from "../../components/masonry/Masonry";

const Wines: NextPage = () => {
  const handlePurchase = () => {
    // Add your purchase logic here
  };

  return (
    <Layout>
      <Masonry>
        <Card
          picture="/images/product-1.jpg"
          description="This full-bodied Cabernet Sauvignon is bursting with ripe black fruit flavors, supported by a firm structure and well-integrated tannins. Aged for 18 months in oak barrels, it has a rich, complex profile with notes of black cherry, currant, and cedar, balanced by a hint of spice and vanilla on the finish. A perfect wine for a special occasion or to pair with a hearty meal."
          title="Cabernet Sauvignon"
          price="$100"
          onPurchase={handlePurchase}
        />
        <Card
          picture="/images/product-2.jpg"
          description="This elegant Pinot Grigio has a bright, straw-yellow color and a delicate, floral aroma. On the palate, it is crisp and refreshing, with flavors of green apple and pear, balanced by a slight mineral character and a clean, refreshing finish. A perfect wine for a summer evening or to pair with light seafood dishes."
          title="Pinot Grigio"
          price="$100"
          onPurchase={handlePurchase}
        />
        <Card
          picture="/images/product-3.jpg"
          description="This rich and complex Chardonnay boasts flavors of ripe tropical fruit, citrus, and oak, with a full, round mouthfeel and a long, lingering finish. Aged for 12 months in French oak barrels, it has a beautiful golden color and a hint of butterscotch and vanilla on the nose. A perfect wine to enjoy with richly flavored dishes or on its own."
          title="Chardonnay"
          price="$100"
          onPurchase={handlePurchase}
        />
        <Card
          picture="/images/product-4.jpg"
          description="This bold and spicy Zinfandel has a deep, ruby red color and a nose filled with aromas of blackberry, raspberry, and pepper. On the palate, it is full-bodied and robust, with flavors of dark fruit and spice, supported by firm tannins and a long, persistent finish. A perfect wine to pair with grilled meats or hearty stews."
          title="Zinfandel"
          price="$100"
          onPurchase={handlePurchase}
        />
      </Masonry>
    </Layout>
  );
};

export default Wines;
