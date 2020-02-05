import React, { Component } from 'react'
import { H1, H2, P, ButtonTest } from '../../assets/themes/routerTags'

class FirstChallenge extends Component {

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
                <H1>First Challenge</H1>
                <H2>&raquo; The French Question</H2>
                <P>
                    You have access the first challenge! You are now one step closer to help us save the planet. In order to destroy the meteorite, you will have to use your best skills to solve this encrypted message from our representative in France, Monsieur Vigenère.
                </P>
                <P>
                    His puzzle requires a simple answer, but the question was encrypted by Vigenère himself… and he won't tell you the key, because it is, after all, a CHALLENGE, nothing less!
                </P>
                <P>
                    IWAW NZFRN JKWBME HZA URMI EYHMXSF HL RPUKVB HV XZTKTUSEI YM MPBFRRO I TIJ CFVF
                </P>
                <P>
                    Good luck! You will need it! Just remember the importance of this mission, what it means to humanity and to our planet Earth!
                </P>

                {!this.state.deployTool ? <ButtonTest onClick={this._handlerDeployTool}>Deploy tool</ButtonTest> : <H2>Developing...</H2>}

            </React.Fragment>
        )
    }
}

export default FirstChallenge