export class User {
    constructor(
        public email: string,
        public name: string,
        private password: string) {}

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password;
    }
}

export const users: {[key: string]: User} = {
    'dandan@gmail.com' : new User('dandan@gmail.com', 'Daniel', 'dandan'),
    'josi@gmail.com' : new User('josi@gmail.com', 'Josie', 'josijosi')
}
