export interface Contact {
  id: string;
  name: string;
  number: string;
}

export interface CreateUser {
  name: string;
  email: string;
  password: string;
}

export interface Credentials {
  name: string;
  email: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: Credentials;
}
