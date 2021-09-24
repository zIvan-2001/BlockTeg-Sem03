//Viene a ser nuestro local storage
const db = {
  users: [
    {
      id: "IAQ",
      name: "Ivan",
      last_name: "Antonio Quispe",
      email: "ivan.antonio@tecsup.edu.pe",
      password: "ivan123",
    },
  ],
};

// Aqoi vamos a poner las operacion basicas de un CRUD

export const list = async (table) => {
  return await db[table];
};

export const store = async (table, data) => {
  await db[table].push(data);
  return await list(table);
};

export const find = async (table, id) => {
  //Obtenemos la lista de datos
  const dataList = await list(table);
  // Buscamos por id
  return dataList.find((data) => data.id === id);
};

export const remove = async (table, id) => {
  const dataList = await list(table);
  // Primero debemos encontrar el indice
  const index = dataList.findIndex((data) => data.id === id);

  if (index === -1) {
    return false;
  }

  await db[table].splice(index, 1);
  return true;
};
