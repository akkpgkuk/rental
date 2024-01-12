import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Alınacağı Adres" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Bırakılacağı Adres" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="non-ac">Motorin/Benzin</option>
            <option value="ac">Elektrikli</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Ara</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
