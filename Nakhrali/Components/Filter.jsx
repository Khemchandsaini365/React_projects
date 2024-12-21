import React, { useState } from "react";
import Matrange from "./Matrange";
import { Checkbox , FormControlLabel, FormGroup } from "@mui/material";
import "./filter.css"
const Filter = () => {
  return (
    <>
      <div className="filter .d-none .d-md-block .d-lg-none ">
        <div>
          <p>Price</p>
          <div className="col-2">

          <Matrange />
          </div>
        </div>
        <hr />
        <div>
          <FormGroup sx={{fontSize:"10px"}}>
            <FormControlLabel
              control={<Checkbox className="custom-checkbox" />}
              label="Display In-stock Product"
            />
        
          </FormGroup>
        </div>
        <hr />
        <div>
          <p>Delivery</p>
          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="Ready to Ship" />
          </FormGroup>
        </div>
        <hr />
        <div>
          <p>Size</p>
          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="XS" />
          </FormGroup>

          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="S" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="M" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="L" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="XL" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="2XL" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="3XL" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="4XL" />
          </FormGroup>
        </div>
        <hr />
        <div>
          Style
          <p>





          </p>

          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="Dress" />
          </FormGroup>

          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="Short Kurta" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="Straight Kurta" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="Anarkali" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="High Slit" />
          </FormGroup>
        </div>
        <hr />
        <div>
          <p>Color</p>
          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="Red" />
          </FormGroup>

          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="Black" />
          </FormGroup>
        </div>
        <hr />
        <div>
          <p>Fabric</p>
          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="Cotton" />
          </FormGroup>
        </div>
        <hr />

        <div>
          <p> Work</p>
          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="Kalamkari Print" />
          </FormGroup>

          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="Ajrakh Print" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox className="custom-checkbox" />}
              label="Bagh Print Chikankari"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="Handblock Print" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox className="custom-checkbox" />} label="Floral Print" />
          </FormGroup>
        </div>
      </div>
    </>
  );
};

export default Filter;
