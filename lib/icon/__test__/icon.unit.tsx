import * as renderer from 'react-test-renderer'
import * as React from 'react'
import Icon from '../Icon'

describe('Icon', () => {
  it('can render', () => {
    const json = renderer.create(<Icon name={"react"}/>).toJSON()
    expect(json).toMatchSnapshot()
  })
})
