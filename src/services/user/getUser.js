import models from '../../models';

export const getUserByUsername = async (username) => models.User.findOne({ where: { username } });
export const getUserByEmail = async (email) => models.User.findOne({ email });
export const getAllUsers = async () => models.User.findAll();
