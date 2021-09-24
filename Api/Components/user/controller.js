// Login            - Email, Passeword                  - POST
// SignUp           - Name, Lastname, Email, Password   - POST
// ShowUser         - Show                              - GET
// Reset_Password   - Email                             - POST
// Update_User      - Id, UserData                      - PUT
// Delete_User      - Id                                - DELETE

import { response } from "../../../network";
import { list, store, find, remove } from "../../../store/dummy";
import { nanoid } from "nanoid";

const USER_TABLE = "users";

export const login = (req, res) => {
  const { email, password } = req.body;
  return response({
    res,
    data: { email, password },
  });
};

export const signUp = async (req, res) => {
  const user = req.body;
  // Creamos la data del campo usuario
  const data = {
    id: nanoid(),
    name: user.name,
    last_name: user.last_name,
    email: user.email,
    password: user.password,
  };
  const users = await store(USER_TABLE, data);
  return response({ res, data: users });
};

export const show = async (req, res) => {
  const { id } = req.params;

  const user = await find(USER_TABLE, id);
  return response({ res, data: user });
};

export const update = (req, res) => {
  const { id } = req.params;
  return response({
    res,
    data: { id },
  });
};

export const destroy = async (req, res) => {
  const { id } = req.params;

  const user = await remove(USER_TABLE, id);

  if (!user) {
    return response({
      res,
      ok: false,
      status: 500,
      data: { error: "User not found" },
    });
  }

  return response({ res, data: { success: "User deleted successfully!" } });
};

// Listar usuarios
export const showAll = async (req, res) => {
  // Aca traigo la lista de usuarios
  const users = await list(USER_TABLE);
  return response({ res, data: users });
};
