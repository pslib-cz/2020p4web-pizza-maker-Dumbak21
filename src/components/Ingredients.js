import React, { useContext, useEffect, useState } from 'react';
import {
    InputGroup,
    InputGroupButtonDropdown,
    Input,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Dropdown,
    Card,
    CardBody
   } from 'reactstrap';

import { pizzaProvider, IngredientsContext } from '../providers/pizzaProvider';


const Ingredients = () => {

      const context = useContext(IngredientsContext);

      console.log(context);

      const [dropdownOpen, setDropdownOpen] = useState(false);
      const toggleDropDown = () => setDropdownOpen(!dropdownOpen);


      const [cat, setCat] = useState("Select Category");
      const [name, setName] = useState("");

      const [ingred, setIngred] = useState(context.ingredients.map((item, index) => 
      (
        <div key={index} >{item.name} ......... {item.category} </div>
        )));
      
      

    return (
        <>
        <h1>
            Ingredients:
        </h1>


        <Card><CardBody>{ingred}</CardBody></Card>
        
        <h3>
            Add:
        </h3>

        <InputGroup>
        <Input id={123} onChange={e => { setName(e.target.value); console.log(name);}} />
        <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
          <DropdownToggle caret>
            {cat}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={()=> setCat("Salami")}>Salami</DropdownItem>
            <DropdownItem onClick={()=> setCat("Meat")}>Meat</DropdownItem>
            <DropdownItem onClick={()=> setCat("Vegetable")}>Vegetable</DropdownItem>
            <DropdownItem onClick={()=> setCat("Cheese")}>Cheese</DropdownItem>
            <DropdownItem onClick={()=> setCat("Others")}>Others</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>

      <Button onClick={ () =>
      {
          if(cat != "Select Category"){
            context.ingredients = [...context.ingredients, {name: name, category: cat}];
            setIngred(context.ingredients.map((item, index) => 
              (
              <div key={index} >{item.name} ......... {item.category} </div>
              )))
            document.getElementById(123).value = "";
          }
          console.log(context);
      }}
         >Add</Button>
        </>
     );
}
 
export default Ingredients;
  