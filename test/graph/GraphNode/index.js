import React from 'react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {render} from '@testing-library/react'

chai.use(chaiDOM)

describe('GraphGraphNode', () => {
  it('Render', () => {
    render(<GraphNode />)
    expect(true).to.be.eql(false)
  })
})
