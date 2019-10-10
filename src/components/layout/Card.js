import React, { Fragment } from 'react'

const Card = () => {
    return (
        <Fragment>
            <div className="card">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text h4">Bulbasaur</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Card