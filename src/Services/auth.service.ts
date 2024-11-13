export class AuthService {
  async login(request: Object) {
    console.log("in Auth service ===========");
    console.log(request);
  }
}

export const AuthServices = new AuthService();
