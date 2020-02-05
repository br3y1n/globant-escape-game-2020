import React, { Component } from 'react'
import { H1, H2, P, Img, ButtonTest } from '../../assets/themes/routerTags'
import keypad from './assets/Images/keypad.jpg'

class SecondChallenge extends Component {

    state = {
        deployTool: false
    }

    _handlerDeployTool = () => {
        this.setState({
            deployTool: true
        })
    }

    render() {
        return (
            <React.Fragment>
                <H1>Second Challenge</H1>
                <H2>&raquo; The Indian Keypad</H2>
                <P>
                    We have been warned that evil supervillain Dr. Heavyrock invented a powerful magnetic ray and used it to deflect a meteorite into the Earth’s path. We have discovered another clue to help you avoid this catastrophe. Will you be able to solve this puzzle?
                </P>
                <P>
                    Please pay attention to all the details below. Only the brightest minds will be able to find the code to disable the magnetic ray.
                </P>
                <P>
                    This enigma comes from our top agent in Pune, Deepak Kumraw. He has a secret panel in his office, with an 8x8 button pad. In order to open the panel, you must press eight buttons, one in each column, from left to right, without ever clicking two buttons in the same row or diagonal.
                </P>
                <P>
                    Good luck with this mission!
                </P>
                <Img src={keypad} />
                <P>
                    To pass Deepak Kumraw's test, you must write an 8 digit octal number, one digit from each column, from left to right, according to the buttons you decided to press. The number must be the highest possible!
                </P>

                {!this.state.deployTool ? <ButtonTest onClick={this._handlerDeployTool}>Deploy tool</ButtonTest> : <H2>Developing...</H2>}

            </React.Fragment>
        )
    }
}

export default SecondChallenge