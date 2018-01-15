import React from 'react'
import strikeBonus from './strikeBonus'
import {shallow} from 'enzyme'

describe('strikeBonus function', () => {
  it('should return 10 plus the sum of the next two rolls', () => {
    for(var i = 0; i < 11; i++) {
      for(var j = 0; j < 11; j++) {
        const bonus = i + j + 10
        expect(strikeBonus(i, j)).toEqual(bonus)
      }
    }
  })
})
