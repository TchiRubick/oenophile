import React from "react";
import type { NextPage } from "next";

import Card from "../../components/card/Card";
import Layout from "../../components/layout/Layout";
import Masonry from "../../components/masonry/Masonry";

import products, { type tProductItem } from "../../data/products";

const Wines: NextPage = () => {
  const handlePurchase = () => {
    // Add your purchase logic here
  };

  const renderProduct = (p: tProductItem) => (
    <Card
      picture={p.image}
      resume={p.resume}
      title={p.title}
      price={p.price}
      onPurchase={handlePurchase}
    />
  );

  return (
    <Layout>
      <Masonry>
        {products.map(renderProduct)}
      </Masonry>
    </Layout>
  );
};

export default Wines;
