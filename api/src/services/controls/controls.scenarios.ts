import type { Prisma, Control } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ControlCreateArgs>({
  control: {
    one: {
      data: {
        name: 'String',
        description: 'String',
        type: 'String',
        value: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        description: 'String',
        type: 'String',
        value: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Control, 'control'>
