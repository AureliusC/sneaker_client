import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

type Props =  {
  transaction: Transaction,
  getMine: () => void
};



export const ModalExample = ({transaction, getMine}:Props) => {
  const [title, setTitle] = useState(transaction.title);
  const [amount, setAmount] = useState(transaction.amount);
  const handleSubmit = () => {
    const url = `https://ae-sneaker-app-server.herokuapp.com/budget/update/${transaction.id}`;
    const bodyObj = {
      budget: {
        title: title,
        amount: amount
      }
    }
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(bodyObj),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")!.toString()
      }),
    })
    .then( () => getMine() )

    toggle();
    
  }
  
  
  const [modal, setModal] = useState(false);
  
  const toggle = () => setModal(!modal);
  
  return (
    <div>
        <i className="far fa-edit" onClick={toggle}/>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle} className="modal-title"> Edit Paycheck </ModalHeader>
          <ModalBody>

              <label htmlFor="meal" className="modal-label-meal">Bills:</label>
              <input type="text" className="modal-input-meal" name="meal" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Your Bills" />
       <br/>
              <label htmlFor="amount" className="modal-label-calories">Budget:</label>
              <input type="number" className="modal-input-calories" name="amount" value={amount} onChange={(e) => setAmount(parseInt((e.target.value)))} placeholder="Enter Your Budget" />
            
          </ModalBody>
        
          <ModalFooter>
            <Button color="primary" onClick={handleSubmit}>
              Confirm
          </Button>
            <Button color="danger" onClick={toggle}>
              Cancel
          </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
  
  