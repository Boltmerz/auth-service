import models from '../../models';

export default async function getUserByUsername(user) {
  return models.User.create(user);
}
