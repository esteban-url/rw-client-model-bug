import type { FindControls } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Controls from 'src/components/Control/Controls'

export const QUERY = gql`
  query FindControls {
    controls {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No controls yet. '}
      <Link
        to={routes.newControl()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ controls }: CellSuccessProps<FindControls>) => {
  return <Controls controls={controls} />
}
