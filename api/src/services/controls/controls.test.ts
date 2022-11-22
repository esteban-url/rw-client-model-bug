import type { Control } from '@prisma/client'

import {
  controls,
  control,
  createControl,
  updateControl,
  deleteControl,
} from './controls'
import type { StandardScenario } from './controls.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('controls', () => {
  scenario('returns all controls', async (scenario: StandardScenario) => {
    const result = await controls()

    expect(result.length).toEqual(Object.keys(scenario.control).length)
  })

  scenario('returns a single control', async (scenario: StandardScenario) => {
    const result = await control({ id: scenario.control.one.id })

    expect(result).toEqual(scenario.control.one)
  })

  scenario('creates a control', async () => {
    const result = await createControl({
      input: {
        name: 'String',
        description: 'String',
        type: 'String',
        value: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.type).toEqual('String')
    expect(result.value).toEqual('String')
  })

  scenario('updates a control', async (scenario: StandardScenario) => {
    const original = (await control({ id: scenario.control.one.id })) as Control
    const result = await updateControl({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a control', async (scenario: StandardScenario) => {
    const original = (await deleteControl({
      id: scenario.control.one.id,
    })) as Control
    const result = await control({ id: original.id })

    expect(result).toEqual(null)
  })
})
