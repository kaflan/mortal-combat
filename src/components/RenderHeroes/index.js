import React from "react";

const RenderHeroes = ({ heroes, activeHeroId }) => {
    return <section className="container">
        {heroes.map(item => (<div
            className='child'
            key={`${item}`}
        >
            <div className={item === activeHeroId ? "active" : '' }/>
        </div>))}
    </section>;
};

export default RenderHeroes;
