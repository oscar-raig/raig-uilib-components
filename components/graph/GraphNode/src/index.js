import React from 'react'
// import PropTypes from 'prop-types'

import SimpleNode from './SimpleNode'
// eslint-disable-next-line no-unused-vars
const listOfNodes = [
  {
    name: 'Sobirania tecnològica',
    url: 'http://sobtec.cat'
  },
  {
    name: 'La directa',
    url: 'https://directa.cat'
  }
]
export default function GraphNode() {
  const node = {
    name: 'oscar'
  }
  return (
    <div className="raig-GraphGraphNode">
      <h1>GraphNode</h1>
      <SimpleNode node={node} keyId="myKey" />
    </div>
  )
}

GraphNode.displayName = 'GraphNode'
GraphNode.propTypes = {}
