import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";

const userListService = async () => {
  const userRepository = AppDataSource.getMongoRepository(User);

  const users = userRepository.find();

  return users;
};

export default userListService;
