import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ControlForm from 'src/components/Control/ControlForm'

import type { CreateControlInput } from 'types/graphql'

const CREATE_CONTROL_MUTATION = gql`
  mutation CreateControlMutation($input: CreateControlInput!) {
    createControl(input: $input) {
      id
    }
  }
`

const NewControl = () => {
  const [createControl, { loading, error }] = useMutation(
    CREATE_CONTROL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Control created')
        navigate(routes.controls())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateControlInput) => {
    createControl({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Control</h2>
      </header>
      <div className="rw-segment-main">
        <ControlForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewControl
