import React from 'react'
// import PropTypes from 'prop-types'

import SimpleNode from './SimpleNode'

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
