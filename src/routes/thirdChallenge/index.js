import React, { Component } from 'react'
import { H1, H2, P, ButtonTest } from '../../assets/themes/routerTags'
import { findPerfectSquares } from '../../assets/helpers/findPfSqr'

class ThirdChallenge extends Component {
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
                <H1>Third Challenge</H1>
                <H2>&raquo; The Mexican Squares</H2>
                <P>
                    The meteorite is still on its way! We need to stop it! In order to destroy it, Globant's Air & Space Puzzle Unit (G. A. S. P.) needs the brightest minds to solve the 3rd challenge.
                </P>
                <P>
                    Our main researcher in Mexico City, Dr. Todaslascifras, wants you to find the combination to his safe box, and he left you a philosophical clue:
                </P>
                <P>
                    "If a REGULATION is square, and a RULE is also square, then the key is to IGNORE ALL." Each upper case letter should stand for a different digit, and the missing combination would then be a nine digits long number; can you find it? "Square" means a perfect square.
                </P>

                {!this.state.deployTool ? <ButtonTest onClick={this._handlerDeployTool}>Deploy tool</ButtonTest> : <H2>Developing...</H2>}
                
            </React.Fragment >
        )
    }
}

export default ThirdChallenge