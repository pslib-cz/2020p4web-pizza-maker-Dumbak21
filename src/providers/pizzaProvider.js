import {createContext} from "react";

const initialState = {pizzas: [], maxIng: 4, 
    ingredients: [{name: "pork cut", category: "Meat"},
        {name: "chicken", category: "Meat"},
        {name: "Presuto", category: "Salami"},
        {name: "Eidam", category: "Cheese"},
        {name: "Tomato", category: "Vegetable"}    
    ]};

export const IngredientsContext = createContext(initialState);

export const pizzaProvider = ({children, ...rest}) => {
    return(
        <>
            <IngredientsContext.Provider>
                {children}
            </IngredientsContext.Provider>
        </>
    )
}