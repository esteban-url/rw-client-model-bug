import type { Client } from '@prisma/client'

import {
  clients,
  client,
  createClient,
  updateClient,
  deleteClient,
} from './clients'
import type { StandardScenario } from './clients.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('clients', () => {
  scenario('returns all clients', async (scenario: StandardScenario) => {
    const result = await clients()

    expect(result.length).toEqual(Object.keys(scenario.client).length)
  })

  scenario('returns a single client', async (scenario: StandardScenario) => {
    const result = await client({ id: scenario.client.one.id })

    expect(result).toEqual(scenario.client.one)
  })

  scenario('creates a client', async () => {
    const result = await createClient({
      input: { name: 'String', description: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a client', async (scenario: StandardScenario) => {
    const original = (await client({ id: scenario.client.one.id })) as Client
    const result = await updateClient({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a client', async (scenario: StandardScenario) => {
    const original = (await deleteClient({
      id: scenario.client.one.id,
    })) as Client
    const result = await client({ id: original.id })

    expect(result).toEqual(null)
  })
})
