import type { EditControlById, UpdateControlInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ControlForm from 'src/components/Control/ControlForm'

export const QUERY = gql`
  query EditControlById($id: Int!) {
    control: control(id: $id) {
      id
      name
      description
      type
      value
      createdAt
      updatedAt
    }
  }
`
const UPDATE_CONTROL_MUTATION = gql`
  mutation UpdateControlMutation($id: Int!, $input: UpdateControlInput!) {
    updateControl(id: $id, input: $input) {
      id
      name
      description
      type
      value
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ control }: CellSuccessProps<EditControlById>) => {
  const [updateControl, { loading, error }] = useMutation(
    UPDATE_CONTROL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Control updated')
        navigate(routes.controls())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateControlInput,
    id: EditControlById['control']['id']
  ) => {
    updateControl({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Control {control?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ControlForm control={control} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
