import React from 'react'
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import Donerlist from './Donerlist';

function DonateForm() {
  const [DonationList, setDonationList] = useState([]);
  const [userInput, setUserInput] = useState({
    name: "", "amount": "", "mob": "", "email": ""
  });

  const handleInputs = (e) => {

    let name = e.target.name;
    let value = e.target.value;
    setUserInput({ ...userInput, [name]: value });
  }

  const submitVal = (e) => {
    e.preventDefault();
    //console.warn(userInput);
    setDonationList([...DonationList, userInput]);
    console.log("Donation succesfull");
    setUserInput({
      name: "", "amount": "", "mob": "", "email": ""
    });

  }
  //console.log(DonationList);
  return (
    <>
      <div>
        <h2>Please donate !</h2>
        <form onSubmit={submitVal}>
          <div className='row'>
            <div className="form-group col-lg-4 w-50">
              <label htmlFor="exampleInputName">Name</label>
              <input
                onChange={handleInputs}
                name="name"
                value={userInput.name}
                type="text"
                className="form-control"
                placeholder="Enter Name" />
            </div>
            <div className="form-group col-lg-4 w-50">
              <label htmlFor="exampleInputEmail1">Contact No. </label>
              <input
                onChange={handleInputs}
                name="mob"
                value={userInput.mob}
                type="number"
                className="form-control"
                placeholder="Enter Contact No." />
            </div>
            <div className="form-group col-lg-4 w-50">
              <label htmlFor="exampleInputEmail">Email</label>
              <input
                onChange={handleInputs}
                name="email"
                value={userInput.email}
                type="email"
                className="form-control"
                placeholder="Email" />
            </div>
            <div className="form-group col-lg-4 w-50">
              <label htmlFor="exampleAmount">Amount</label>
              <input
                onChange={handleInputs}
                name="amount"
                value={userInput.amount}
                type="number"
                className="form-control"
                placeholder="Amount" />
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary">Donate Now</button>
          </div>
        </form>
      </div>
  
      <Donerlist List={DonationList}/>
    </>
  )
}

export default DonateForm