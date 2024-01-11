declare global {
  interface User {
    id: string;
    email: string;
    name: string | null;
    username: string | null;
    image: string | null;
  }

  module "next-auth" {
    interface Session {
      user: User;
    }
  }
}
