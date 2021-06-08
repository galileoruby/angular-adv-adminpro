export class Usuario {
    constructor(
        public email: String,
        public nombre: string,
        public google: Boolean,
        public password?: string,
        public img?: String,
        public uid?: string,
        public role?: string,
    ) { }
}