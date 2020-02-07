import React, { Component } from 'react'
import { H2, P, ButtonSuccess, Label, Input, DivForm } from '../../../assets/themes/routerTags'
import { findPerfectSquares } from '../../../assets/helpers/findPfSqr'
import { Result } from './result'
import Swal from 'sweetalert2'


class ThirdTool extends Component {
  state = {
    result: null,
    inputWord1: '',
    inputWord2: '',
    inputConvert: ''
  }

  _handleFind = () => {
    const
      { inputWord1, inputWord2, inputConvert } = this.state

    if (inputWord1.trim() !== '' && inputWord2.trim() !== '' && inputConvert.trim() !== '') {

      const
        possibilities = findPerfectSquares(inputWord1, inputWord2, inputConvert)

      if (possibilities.length > 0)
        this.setState({ result: possibilities })

      else {
        this.setState({ result: null })
        Swal.fire({
          title: 'Compatibilities not found',
          text: 'Please, try with other words',
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
      }
    } else
      Swal.fire({
        title: 'Empty fields!',
        text: 'Please, complete all fields to continue',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
  }

  render() {
    const
      { result } = this.state,
      divResult = result ? <Result data={result} /> : null

    return (
      <React.Fragment>
        <H2>&raquo; Tool - Perfect square finder (compatible)</H2>
        <P>
          This tool receives 2 words, where each character will be the equivalent of a digit from 0 to 9.
        </P>
        <P>
          Each word, according to its number of characters will have a number of possibilities in numerical values ​​of perfect squares, that is, if there is a word "HELLO" its numerical value could be the perfect square "12996" or "13225" etc ...
        </P>
        <P>
          Note that the third number is repeated with the fourth, as in the word "HELLO" the letter "L" is repeated in the same positions.
        </P>
        <P>
          This tool will search for perfect squares for each word and will merge them, to find an alphabet of maximum 10 characters and thus encode or convert the value entered in the field "Convert to number".
        </P>
        <DivForm>
          <Label htmlFor='sqrWord1'>Square word 1:</Label>
          <Input type='text' id='sqrWord1' onChange={event => this.setState({ inputWord1: event.target.value })} value={this.state.inputWord1} />
          <Label htmlFor='sqrWord2'>Square word 2:</Label>
          <Input type='text' id='sqrWord2' onChange={event => this.setState({ inputWord2: event.target.value })} value={this.state.inputWord2} />
          <br />
          <br />
          <Label htmlFor='convToNum'><strong>Convert to number:</strong></Label>
          <Input type='text' id='convToNum' onChange={event => this.setState({ inputConvert: event.target.value })} value={this.state.inputConvert} />
        </DivForm>
        <ButtonSuccess onClick={this._handleFind}>Find</ButtonSuccess>
        {divResult}
      </React.Fragment>
    )
  }
}

export default ThirdTool