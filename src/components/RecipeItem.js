import React from 'react';

export default function RecipeItem(props){
    return (<React.Fragment key={props._id}>
        <div className="card mb-4" >
            <div className="card-body">
                <div className="card-title">
                    {props.title}
                </div>
                <ul>
                    {props.ingredients.map((eachIngredient, index) => {
                        return <li key={index}>{eachIngredient}</li>
                    })}
                </ul>
            </div>
        </div>
        </React.Fragment>);
}