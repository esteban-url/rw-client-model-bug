import { render } from '@redwoodjs/testing/web'

import Client from './Client'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Client', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Client
          client={{
            id: 1,
            name: 'test name',
            description: 'test description',
            createdAt: '2022-11-22T13:13:13',
            updatedAt: '2022-11-22T17:17:17',
          }}
        />
      )
    }).not.toThrow()
  })
})
