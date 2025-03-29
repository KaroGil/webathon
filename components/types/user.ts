export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export const users: User[] = [
  {
    id: "1",
    name: "Ole Brumm",
    email: "OleBrumm@example.com",
    password: "pass123",
  },
  {
    id: "2",
    name: "Johanne Blikberg Herheim",
    email: "johanne@herheim.com",
    password: "123123",
  },
  {
    id: "3",
    name: "Karolina Gil",
    email: "Karo@gil.com",
    password: "123123",
  },
  {
    id: "4",
    name: "Henrik Nilsen-Lømo",
    email: "Henrik@lomo.com",
    password: "123123",
  },
  {
    id: "5",
    name: "Mille Caroline Høeg",
    email: "Mille@hoeg.com",
    password: "123123",
  },
];

export function getUserById(id: string) {
  return users.find((user) => user.id === id);
}
