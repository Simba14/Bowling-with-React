import React from 'react'
import getFrameIndex from './getFrameIndex'
import {shallow} from 'enzyme'

describe('getFrameIndex function', () => {
  it('should return the index of the last element in an array', () => {
    for (var i = 1; i < 11; i++) {
      let array = new Array(i)
      let index = i - 1
      expect(getFrameIndex(array)).toEqual(index)
    }
  })
})
