import React from 'react'
import isGameOver from './isGameOver'
import {shallow} from 'enzyme'

describe('isGameOver function', () => {
  it('should return false if rolls is less than 19', () => {
    for (var i = 0; i < 19; i++) {
      expect(isGameOver(i)).toEqual(false)
    }
  })

  it('should return false if 19 rolls and is a spare', () => {
    for(var i = 0; i < 9; i++) {
      expect(isGameOver(i, 1)).toEqual(false)
    }
  })
})
