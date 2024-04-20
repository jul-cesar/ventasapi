import { prisma } from "../db/config";
import { Usuario } from "../models/usuario";

export const createUser = async (data: Usuario) => {
  const newUser = await prisma.user.create({ data });
  return newUser;
};