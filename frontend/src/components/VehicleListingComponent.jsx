import React, { useState, useEffect } from "react";
import { getVehicleById } from "../services/VehicleService";
import { useParams } from "react-router-dom";


const VehicleListingComponent = () => {
  const [title, setTitle] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [yearOfManufacture, setYearOfManufacture] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [kw, setKw] = useState("");
  const [distanceTraveled, setDistanceTraveled] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const { id } = useParams();
  useEffect(() => {
    getVehicleById(id).then((response) => {
      console.log(response.data)
      setTitle(response.data.title);
      setManufacturer(response.data.manufacturer);
      setModel(response.data.model);
      setYearOfManufacture(response.data.yearOfManufacture);
      setEngineSize(response.data.engineSize);
      setFuelType(response.data.fuelType);
      setKw(response.data.kw);
      setDistanceTraveled(response.data.distanceTraveled);
      setCity(response.data.city);
      setPrice(response.data.price);
      setDescription(response.data.description);
      setFile(response.data.imagePath)
    });
  }, [id]);

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0 center-cropped"
              src={
                file
                  ? `http://localhost:8080/${file}`
                  : "https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
              }
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="small mb-1">
              {manufacturer + " " + model + " " + yearOfManufacture}
            </div>
            <h1 className="display-5 fw-bol der">{title}</h1>
            <div className="fs-5 mb-5">
              <span className="text-decoration-line-through">$45.00</span>
              <span>$40.00</span>
            </div>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium at dolorem quidem modi. Nam sequi consequatur
              obcaecati excepturi alias magni, accusamus eius blanditiis
              delectus ipsam minima ea iste laborum vero?
            </p>
            <div className="d-flex">
              <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="num"
                value="1"
                style={{ maxWidth: "3rem" }}
              />
              <button
                className="btn btn-outline-dark flex-shrink-0"
                type="button"
              >
                <i className="bi-cart-fill me-1"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleListingComponent;
