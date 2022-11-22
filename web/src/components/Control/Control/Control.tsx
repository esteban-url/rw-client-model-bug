
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteControlMutationVariables, FindControlById } from 'types/graphql'

const DELETE_CONTROL_MUTATION = gql`
  mutation DeleteControlMutation($id: Int!) {
    deleteControl(id: $id) {
      id
    }
  }
`

interface Props {
  control: NonNullable<FindControlById['control']>
}

const Control = ({ control }: Props) => {
  const [deleteControl] = useMutation(DELETE_CONTROL_MUTATION, {
    onCompleted: () => {
      toast.success('Control deleted')
      navigate(routes.controls())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteControlMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete control ' + id + '?')) {
      deleteControl({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Control {control.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{control.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{control.name}</td>
            </tr><tr>
              <th>Description</th>
              <td>{control.description}</td>
            </tr><tr>
              <th>Type</th>
              <td>{control.type}</td>
            </tr><tr>
              <th>Value</th>
              <td>{control.value}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(control.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(control.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editControl({ id: control.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(control.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Control
