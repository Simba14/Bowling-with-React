import React from 'react'
import isEven from './isEven'
import {shallow} from 'enzyme'

describe('isEven function', () => {
  it('should return true if even number', () => {
    for(var i = 0; i < 100; i=i+2) {
      expect(isEven(i)).toEqual(true)
    }
  })

  it('should return false if not bonus roll', () => {
    for(var i = 1; i < 100; i=i+2) {
      expect(isEven(i)).toEqual(false)
    }
  })
})
