import { expect } from 'chai';
import { getAllUsers } from '../app/graphql/source/user';

describe('GraphQL Data Source', () => {
  describe('Users Function', () => {
    it('fetch all users', () => {
      return getAllUsers()
      .then((getAllUsersRes) => {
        expect(getAllUsersRes).to.be.an('array');
      })
    });
  });
});
