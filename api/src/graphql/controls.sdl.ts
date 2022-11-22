export const schema = gql`
  type Control {
    id: Int!
    name: String!
    description: String!
    type: String!
    value: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    controls: [Control!]! @requireAuth
    control(id: Int!): Control @requireAuth
  }

  input CreateControlInput {
    name: String!
    description: String!
    type: String!
    value: String!
  }

  input UpdateControlInput {
    name: String
    description: String
    type: String
    value: String
  }

  type Mutation {
    createControl(input: CreateControlInput!): Control! @requireAuth
    updateControl(id: Int!, input: UpdateControlInput!): Control! @requireAuth
    deleteControl(id: Int!): Control! @requireAuth
  }
`
