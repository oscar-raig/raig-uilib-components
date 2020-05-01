import React from 'react'
import PropTypes from 'prop-types'
export default function SingleNode({node, keyId}) {
  const handleClick = event => {
    // eslint-disable-next-line no-console
    console.log('handleClick  ')
    // eslint-disable-next-line no-console
    console.log(event)
  }
  return (
    <p>
      <button key={keyId} onClick={handleClick}>
        {node.name}
      </button>
    </p>
  )
}

SingleNode.displayName = 'SingleNode'
SingleNode.propTypes = {
  node: PropTypes.object,
  keyId: PropTypes.string
}
