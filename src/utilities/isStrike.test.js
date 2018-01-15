import React from 'react'
import isStrike from './isStrike'
import {shallow} from 'enzyme'

describe('isStrike function', () => {
  it('should return true if strike', () => {
    expect(isStrike(10)).toEqual(true)
  })

  it('should return false if not strike', () => {
    for(var i = 0; i < 10; i++) {
      expect(isStrike(i)).toEqual(false)
    }
  })
})
