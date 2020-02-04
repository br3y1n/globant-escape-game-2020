import React from 'react'
import { H1, H2, P, ButtonTest } from '../../assets/themes/routerTags'

const FirstChallenge = () => {
    return (
        <React.Fragment>
            <H1>First Challenge</H1>
            <H2>&raquo; The French Question</H2>
            <P>
                You have access the first challenge! You are now one step closer to help us save the planet. In order to destroy the meteorite, you will have to use your best skills to solve this encrypted message from our representative in France, Monsieur Vigenère.
            </P>
            <br />
            <P>
                His puzzle requires a simple answer, but the question was encrypted by Vigenère himself… and he won't tell you the key, because it is, after all, a CHALLENGE, nothing less!
            </P>
            <br />
            <P>
                IWAW NZFRN JKWBME HZA URMI EYHMXSF HL RPUKVB HV XZTKTUSEI YM MPBFRRO I TIJ CFVF
            </P>
            <br />
            <P>
                Good luck! You will need it! Just remember the importance of this mission, what it means to humanity and to our planet Earth!
            </P>
            <br />
            <ButtonTest>Deploy tool</ButtonTest>
        </React.Fragment>
    )
}

export default FirstChallenge