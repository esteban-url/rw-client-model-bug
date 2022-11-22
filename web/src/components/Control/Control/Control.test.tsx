import { render } from '@redwoodjs/testing/web'

import Control from './Control'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Control', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Control
          control={{
            id: 1,
            name: 'test name',
            type: 'test type',
            createdAt: '2022-11-22T13:13:13',
            updatedAt: '2022-11-22T17:17:17',
            description: 'test description',
            value: 'test value',
          }}
        />
      )
    }).not.toThrow()
  })
})
