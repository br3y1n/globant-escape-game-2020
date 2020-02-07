import React from 'react'
import { P, H3, H4, DivForm, Ul, Li } from '../../../../assets/themes/routerTags'


export const Result = (props) => {
  return (
    <DivForm>
      <H3><strong>Results: ({props.data.length})</strong></H3>
      <Ul>
        {props.data.map((val, idx) =>
          <Li key={idx} style={{ paddingBottom: '30px' }}>
            <H4>Result - {idx + 1}</H4>
            <div style={{ display: 'inline-table' }}>
              <Ul>
                <Li><strong>Word 1:</strong> </Li>
                <Li><strong>Word 2:</strong> </Li>
                <Li><strong>Convert:</strong> </Li>
              </Ul>
            </div>
            <div style={{ display: 'inline-table', paddingLeft: '10px' }}>
              <p >{val.word1ToNum}</p>
              <p >{val.word2ToNum2}</p>
              <p >{val.convert}</p>
            </div>
          </Li>
        )}
      </Ul>
    </DivForm>
  )
}