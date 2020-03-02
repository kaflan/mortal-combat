import React from "react";
import FontAwesome from "react-fontawesome";
import uuid from "uuid/v4";
import { iconsHashTable } from '../../helper';

class McVSScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
           objects: {
               id1: 0,
               id2: 0,
               id3: 0,
               id4: 0,
               id5: 0,
               id6: 0,
           }
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
        const { objects } = this.state;

        return (<div className="fight">
            <section className="container container__mod">
                {Object.values(objects).map((item) => {
                    return (
                        <div key={uuid()}>
                            <FontAwesome
                                name={iconsHashTable[item]}
                                size="2x"
                            />
                        </div>);
                })}
            </section>
        </div>);
    }
    setChanges = (numKey) => {
        const key = this.state.objects[numKey];
        if(key === 6) {
            this.changeId(numKey, 0);
        } else {
            this.changeId(numKey, key + 1);
        }

    };

    listenerKeys = (e) => {
      const { keyCode } = e;
      const id1  = 'id1',
          id2 = 'id2', id3 = 'id3', id4 = 'id4', id5 = 'id5', id6 = 'id6';
      if (keyCode === 81) {
          // q
          this.setChanges(id1);
      }
      if (keyCode === 87) {
          //w
          this.setChanges(id2)
      }
      if (keyCode === 69) {
          // e
          this.setChanges(id3);
      }
      if (keyCode === 82) {
            // r
          this.setChanges(id4);
      }
      if (keyCode === 84) {
            //t
          this.setChanges(id5);
      }
      if (keyCode === 89) {
            // y
          this.setChanges(id6);
      }

    };
    changeId = (key, value) => {
        const { objects } = this.state;
        this.setState({ objects: {
            ...objects,
            [key]: value
            } });
    };
}


export default McVSScreen;
