import React from 'react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {render} from '@testing-library/react'

chai.use(chaiDOM)

describe('FormUser', () => {
  it('Render', () => {
    render(<FormUser />)
    expect(true).to.be.eql(false)
  })
})
