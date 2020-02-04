import React from 'react'
import { H1, H2, P, ButtonTest } from '../../assets/themes/routerTags'

const FourthChallenge = (props) => {
    return (
        <React.Fragment>
            <H1>Fourth Challenge</H1>
            <H2>&raquo; The Astronomy Details</H2>
            <P>
                You are one step away from solving the last challenge that will determine the best team to help us save planet Earth.
            </P>
            <br />
            <P>
                You must pay attention to all the details.
            </P>
            <br />
            <P>
                The last question comes from the master astronomer and amateur vexillologist, Mr. Starryheavens himself. You know that our project involves astronomy details, so he just asked a simple question so you can prove to have the astronomical knowledge and investigative research qualities that are needed for the job:
            </P>
            <br />
            <P>
                How many independent countries in America have at least one star in their national flag?
            </P>
            <br />
            <P>
                For example, the U.S.A. flag has 50 stars, so that’s one country for your count - no matter how many stars the flag has, count the country only once. Puerto Rico also has a star in its flag, but since it’s not an independent country, you shouldn’t count it.
            </P>
            <br />
            <P>
                Mr. Starryheavens reckons that there may be ambiguity as to which countries to include, so he provided the list at <a target="_blank" href="https://simple.wikipedia.org/wiki/List_of_countries_by_continents">simple.wikipedia.org/wiki/List_of_countries_by_continents</a> - and he also suggests looking closely and carefully at flags - it’s a tricky question!
            </P>
            <br />
            <ButtonTest>Deploy tool</ButtonTest>
        </React.Fragment>
    )
}

export default FourthChallenge