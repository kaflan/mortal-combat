import React from "react";
import FontAwesome from "react-fontawesome";
import { iconsArr } from '../../helper';

class McVSScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
           items: [0, 0, 0, 0, 0, 0]
        }
    }
    componentDidMount() {
        const { history } = this.props;
        window.addEventListener("keydown", this.listenerKeys);
        setTimeout(() => {
            history.push('/game-over');
        }, 10000);
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.listenerKeys);
    }
    render() {
        const { items } = this.state;

        return (<div className="fight">
            <section className="container container__mod">
                {items.map((item, index) => {
                    const name = iconsArr[item];
                    return (
                        <div key={`${index}`}>
                            <FontAwesome
                                name={name}
                                size="2x"
                            />
                        </div>);
                })}
            </section>
        </div>);
    }
    setChanges = (indexInArray) => {
        const currNumber = this.state.items[indexInArray];
        const nextNumber = currNumber + 1;
        const currRow = 6;
        const defaultValue  = 0;
        if(currNumber === currRow) {
            this.changeId(indexInArray, defaultValue);
        } else {
            this.changeId(indexInArray, nextNumber);
        }

    };

    listenerKeys = (e) => {
      const { keyCode } = e;

      if (keyCode === 81) {
          // q
          const indexInArray = 0;
          this.setChanges(indexInArray);
      }
      if (keyCode === 87) {
          //w
          const indexInArray = 1;
          this.setChanges(indexInArray);
      }
      if (keyCode === 69) {
          // e
          const indexInArray = 2;
          this.setChanges(indexInArray);
      }
      if (keyCode === 82) {
            // r
          const indexInArray = 3;
          this.setChanges(indexInArray);
      }
      if (keyCode === 84) {
            //t
          const indexInArray = 4;
          this.setChanges(indexInArray);
      }
      if (keyCode === 89) {
            // y
          const indexInArray = 5;
          this.setChanges(indexInArray);
      }

    };
    changeId = (indexInArray, value) => {
        const { items } = this.state;
        const changeItemInAr = items.reduce((prev, curr, index) => {
            if (indexInArray === index) {
                return prev.concat(value);
            }
            return prev.concat(curr);
        }, []);
        this.setState({
            items: changeItemInAr
        })
    };
}


export default McVSScreen;
