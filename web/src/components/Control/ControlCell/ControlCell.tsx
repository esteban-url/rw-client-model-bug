import type { FindControlById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Control from 'src/components/Control/Control'

export const QUERY = gql`
  query FindControlById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Control not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ control }: CellSuccessProps<FindControlById>) => {
  return <Control control={control} />
}
