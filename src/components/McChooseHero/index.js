import React from "react";
import RenderHeroes from '../RenderHeroes';
import { heroesArrCreate } from "../../helper";

class McChooseHero extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            heroId: 0,
            heroes: heroesArrCreate(24),
        }
    }
    componentDidMount() {
        window.addEventListener("keydown", this.listenerKeys);
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.listenerKeys);
    }
    render() {
        const { heroId, heroes } = this.state;
        return (
            <div>
                <h2>Select your fighter</h2>
                <RenderHeroes heroes={heroes} activeHeroId={heroId} changeHero={this.changeHero} />
            </div>
        )
    }
    changeHero = (heroId) => {
        this.setState({ heroId });
    };
    listenerKeys = (e) => {
        const { heroId, heroes } = this.state;
        const { history } = this.props;
        const { keyCode } = e;
        const l = heroes.length;
        const coordinates = (x) => ((x % l) + l) % l;
        if (keyCode === 38) {
            // up arrow
            this.changeHero(coordinates(heroId + 18));
        }
        else if (keyCode === 40) {
            // down arrow
            this.changeHero(coordinates( heroId + 6));
        }
        else if (keyCode === 37) {
            // left arrow
            this.changeHero(coordinates(heroId - 1));
        }
        else if (keyCode === 39) {
            // right arrow
            this.changeHero(coordinates(heroId + 1));
        }
        else if (keyCode === 13) {
            // change to the fight screen
            history.push('/battle')
        }
    };
}

export default McChooseHero;
