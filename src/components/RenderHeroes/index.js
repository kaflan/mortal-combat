import React from "react";

const RenderHeroes = ({ heroes, activeHeroId }) => {
    return <section className="container">
        {heroes.map(item => (<div
            className={item.id === activeHeroId ? "child active" : 'child' }
            key={item.id} id={item.id}
        />))}
    </section>;
};

export default RenderHeroes;
