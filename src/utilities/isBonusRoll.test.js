import React from 'react'
import isBonusRoll from './isBonusRoll'
import {shallow} from 'enzyme'

describe('isBonusRoll function', () => {
  it('should return true if bonus roll', () => {
    expect(isBonusRoll(20)).toEqual(true)
  })

  it('should return false if not bonus roll', () => {
    for(var i = 0; i < 20; i++) {
      expect(isBonusRoll(i)).toEqual(false)
    }
  })
})
