import React from "react";
import '../../styles/Network_Statistics.css';

const NetworkStatistics = () => {
  return (
    <div className="network">
      <div className="container px-5">
        <div className="row text-white py-4">
          <div className="col-3">
            <p>Transactions/Second</p>
            <h3>2,905</h3>
          </div>

          <div className="col-5">
            <p> Total Transactions</p>
            <h3>$64,540,470,129</h3>
          </div>

          <div className="col-2">
            <p>Avg. Cost/Transaction </p>
            <h3>$0.00025</h3>
          </div>

          <div className="col-2">
            <p>Validator Nodes</p>
            <h3>1,645</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkStatistics;
