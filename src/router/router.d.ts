export interface SwitchRoutes {
    root: string;
    detail: string;
    rickAndMorty: string;
}

export interface Routes extends Omit<SwitchRoutes, "detail"> {
    detail: (login: string) => string;
}