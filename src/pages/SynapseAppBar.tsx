import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const SynapseAppBar:React.FC = () => {
  return (
    <React.Fragment>
      <Button color='inherit' size='large' component={Link} to='/'>HOME</Button>
      <Button color='inherit' size='large' component={Link} to='/faq'>FAQ</Button>
      <Button color='inherit' size='large' component={Link} to='/demo'>DEMO</Button>
    </React.Fragment>
  )
}

export { SynapseAppBar }
