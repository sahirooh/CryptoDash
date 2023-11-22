import React from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

const Transactions = () => {
  return (
    <div className="flex">
      <Navigation />
      <div className="flex-grow">
        <Header title={'Transactions'} />
      </div>
    </div>
  );
};

export default Transactions;
