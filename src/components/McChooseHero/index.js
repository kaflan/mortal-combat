import React from "react";
import RenderHeroes from '../RenderHeroes';
import { heroesArrCreate } from "../../helper";

const defaultHeroLength = 24;

class McChooseHero extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            heroId: 0,
            heroes: heroesArrCreate(defaultHeroLength),
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
        const upArrow = 38;
        const downArrow = 40;
        const leftArrow = 37;
        const rightArrow = 39;
        const confirmThePick = 13;
        const upRow = 18;
        const downRow = 6;
        const step = 1;
        const coordinates = (x) => ((x % l) + l) % l;
        if (keyCode === upArrow) {
            // up arrow
            const currNumber = heroId + upRow;
            this.changeHero(coordinates(currNumber));
        }
        else if (keyCode === downArrow) {
            // down arrow
            const currNumber  = heroId + downRow;
            this.changeHero(coordinates( currNumber));
        }
        else if (keyCode === leftArrow) {
            // left arrow
            const currNumber = heroId - step;
            this.changeHero(coordinates(currNumber));
        }
        else if (keyCode === rightArrow) {
            // right arrow
            const currNumber = heroId + step;
            this.changeHero(coordinates(currNumber));
        }
        else if (keyCode === confirmThePick) {
            // change to the fight screen
            history.push('/battle')
        }
    };
}

export default McChooseHero;
