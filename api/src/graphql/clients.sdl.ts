export const schema = gql`
  type Client {
    id: Int!
    name: String!
    description: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    clients: [Client!]! @requireAuth
    client(id: Int!): Client @requireAuth
  }

  input CreateClientInput {
    name: String!
    description: String!
  }

  input UpdateClientInput {
    name: String
    description: String
  }

  type Mutation {
    createClient(input: CreateClientInput!): Client! @requireAuth
    updateClient(id: Int!, input: UpdateClientInput!): Client! @requireAuth
    deleteClient(id: Int!): Client! @requireAuth
  }
`
