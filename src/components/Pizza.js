import React, { useContext, useEffect, useState } from 'react';
import { Button, CardBody, CardTitle, Card } from 'reactstrap';
import { IngredientsContext } from '../providers/pizzaProvider';

const Pizza = (props) => {

    const context = useContext(IngredientsContext);

    const numerouno = context.maxIng;

    const meat = context.ingredients.filter(function (ingredient) {
    return ingredient.category === "Meat";
    });

    const cheese = context.ingredients.filter(function (ingredient) {
    return ingredient.category === "Cheese";
    });

    const vegetable = context.ingredients.filter(function (ingredient) {
    return ingredient.category === "Vegetable";
    });

    const salami = context.ingredients.filter(function (ingredient) {
    return ingredient.category === "Salami";
    });

    const others = context.ingredients.filter(function (ingredient) {
    return ingredient.category === "Others";
    });



    const [SelectedIng , setSelectedIng] = useState([]);

    const [disabled , setDisabled] = useState(false);

    const [meatDisabled , setMeatDisabled] = useState(false);
    const [vegeDisabled , setVegeDisabled] = useState(false);
    const [cheeseDisabled , setCheeseDisabled] = useState(false);
    const [salamiDisabled , setSalamiDisabled] = useState(false);
    const [othersDisabled , setOthersDisabled] = useState(false);


    const AddList = (item) => {
        setSelectedIng([...SelectedIng, {item}]);
        console.log(SelectedIng);
        }

    const RemoveList = (index) => {
        var temp = [...SelectedIng];
        temp.splice(index,1);
        setSelectedIng([...temp]);
        console.log(SelectedIng);
        }

    useEffect(() => {
        if(SelectedIng.length >= numerouno){
            setDisabled(true);
        }
        else{
            setDisabled(false);
        }

        // programuju už 9 hodin v kuse nevim jak jinak to udělat, takhle to funguje, takhle to je dobrý
        setSalamiDisabled(false);
        setMeatDisabled(false);
        setVegeDisabled(false);
        setCheeseDisabled(false);
        setOthersDisabled(false);
        SelectedIng.forEach(element => {
            if(element.item.category === "Meat") setMeatDisabled(true);
            else if(element.item.category === "Vegetable") setVegeDisabled(true);
            else if(element.item.category === "Salami") setSalamiDisabled(true);
            else if(element.item.category === "Cheese") setCheeseDisabled(true);
            else if(element.item.category === "Others") setOthersDisabled(true);

        });

    }, [SelectedIng]);

    return ( 
        <>
            <h1>
                {props.Title}
            </h1>

        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            <Card style={{width:"20vw", minWidth:"10rem"}}>
                <CardTitle>
                    <p>Meat: </p>
                </CardTitle>
                <CardBody>
                {
                meat.map((ingredient) => (
                    <div style={{display: "flex", flexDirection: "row"}}>
                    <div key={ingredient.name}>{ingredient.name}</div>
                    <Button disabled={disabled || meatDisabled} onClick={() => {
                        AddList({name: ingredient.name, category: ingredient.category});
                    }} className="btn-info">Add</Button>
                    </div>
                ))
                }
                </CardBody>
            </Card>

            <Card style={{width:"20vw", minWidth:"10rem"}}> 
                <CardTitle>
                    <p>Salami: </p>
                </CardTitle>
                <CardBody>
                {
                salami.map((ingredient) => (
                    <div style={{display: "flex", flexDirection: "row"}}>
                    <div key={ingredient.name}>{ingredient.name}</div>
                    <Button disabled={disabled || salamiDisabled} onClick={() => {
                        AddList({name: ingredient.name, category: ingredient.category});
                    }} className="btn-info">Add</Button>
                    </div>
                ))
                }
                </CardBody>
            </Card>

            <Card style={{width:"20vw", minWidth:"10rem"}}>
                <CardTitle>
                    <p>Cheese: </p>
                </CardTitle>
                <CardBody>
                {
                cheese.map((ingredient) => (
                    <div style={{display: "flex", flexDirection: "row"}}>
                    <div key={ingredient.name}>{ingredient.name}</div>
                    <Button disabled={disabled || cheeseDisabled} onClick={() => {
                        AddList({name: ingredient.name, category: ingredient.category});
                    }} className="btn-info">Add</Button>
                    </div>
                ))
                }
                </CardBody>
            </Card>

            <Card style={{width:"20vw", minWidth:"10rem"}}>
                <CardTitle>
                    <p>Vegetable: </p>
                </CardTitle>
                <CardBody>
                {
                vegetable.map((ingredient) => (
                    <div style={{display: "flex", flexDirection: "row"}}>
                    <div key={ingredient.name}>{ingredient.name}</div>
                    <Button disabled={disabled || vegeDisabled} onClick={() => {
                        AddList({name: ingredient.name, category: ingredient.category});
                    }} className="btn-info">Add</Button>
                    </div>
                ))
                }
                </CardBody>
            </Card>

            <Card style={{width:"20vw", minWidth:"10rem"}}>
                <CardTitle>
                    <p>Others: </p>
                </CardTitle>
                <CardBody>
                {
                others.map((ingredient) => (
                    <div style={{display: "flex", flexDirection: "row"}}>
                    <div key={ingredient.name}>{ingredient.name}</div>
                    <Button disabled={disabled || othersDisabled} onClick={() => {
                        AddList({name: ingredient.name, category: ingredient.category});
                    }} className="btn-info">Add</Button>
                    </div>
                ))
                }
                </CardBody>
            </Card>
        </div>

            <p>
                Max: {numerouno}
            </p>
            <p>
                Selected:
            </p>

            {
            SelectedIng.map((ingredient, index) => (
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div key={index}>{ingredient.item.name}</div>
                    <Button onClick={() => {
                        RemoveList(index);
                    }} className="btn-info">Remove</Button>
                </div>
            ))
            }


            <p>
                <Button onClick={() => {
                    const pizza = {Type : props.Title, Ingredients : SelectedIng};
                    context.pizzas = [...context.pizzas, pizza];
                    console.log(context.pizzas);

                    }}
                    className="btn-danger">Order</Button>
            </p>
        </>
     );
}
 
export default Pizza;
  