import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Control/ControlsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteControlMutationVariables, FindControls } from 'types/graphql'

const DELETE_CONTROL_MUTATION = gql`
  mutation DeleteControlMutation($id: Int!) {
    deleteControl(id: $id) {
      id
    }
  }
`

const ControlsList = ({ controls }: FindControls) => {
  const [deleteControl] = useMutation(DELETE_CONTROL_MUTATION, {
    onCompleted: () => {
      toast.success('Control deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteControlMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete control ' + id + '?')) {
      deleteControl({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Value</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {controls.map((control) => (
            <tr key={control.id}>
              <td>{truncate(control.id)}</td>
              <td>{truncate(control.name)}</td>
              <td>{truncate(control.description)}</td>
              <td>{truncate(control.type)}</td>
              <td>{truncate(control.value)}</td>
              <td>{timeTag(control.createdAt)}</td>
              <td>{timeTag(control.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.control({ id: control.id })}
                    title={'Show control ' + control.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editControl({ id: control.id })}
                    title={'Edit control ' + control.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete control ' + control.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(control.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ControlsList
