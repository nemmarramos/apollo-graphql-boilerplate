export default `
  type User {
    id: ID!
    email: String
    name: String
    is_activated: Boolean
  }

  type Query {
    users: [User]
  }
`;
