import { getAllUsers } from "../source/user";

export default {
  Query: {
    users: () => getAllUsers(),
  },
};
