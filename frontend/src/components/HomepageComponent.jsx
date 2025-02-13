import React, { useState, useEffect } from "react";
import { listVehicles } from "../services/VehicleService";

const HomepageComponent = () => {

  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    getAllVehicles();
  }, [])

  function getAllVehicles() {
    listVehicles()
      .then((response) => {
        setVehicles(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {vehicles.map((vehicle) => (
            <div className="col mb-5" key={vehicle.id}>
              <div className="card h-100">
                {/*<!-- Product image-->*/}
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="..."
                />
                {/*<!-- Product details-->*/}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/*<!-- Product name-->*/}
                    <h5 className="fw-bolder">{vehicle.title}</h5>
                    {/*<!-- Product general details -->*/}
                    <p className="text-muted">
                      {vehicle.manufacturer +
                        " " +
                        vehicle.model +
                        " " +
                        vehicle.yearOfManufacture}
                    </p>
                    {/*<!-- Product price-->*/}
                    $40.00 - $80.00
                  </div>
                </div>
                {/*<!-- Product actions-->*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      View options
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageComponent;

{
  /*<div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">Fancy Product</h5>
                                    <!-- Product price-->
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>*/
}
