import { render } from '@redwoodjs/testing/web'

import ClientPage from './ClientPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

mockGraphQLQuery('FindClientById', () => {
  return {
    client: {
      __typename: 'Client',
      id: 1,
      name: 'test name',
      description: 'test description',
      createdAt: '2022-11-22T19:52:31.808Z',
      updatedAt: '2022-11-22T19:52:31.808Z',
    },
  }
})

describe('ClientPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ClientPage id={1} />)
    }).not.toThrow()
  })
})
