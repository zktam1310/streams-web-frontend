export interface IUser {
    id: string,
    name: string,
    email: string,
}

export interface IClient {
    id: string,
    name: string,
    title: string,
    email?: string,
    phone?: string,
    budget: number,
    type: string,
    status: IClientStatus[],
    updated_at: number
}

export interface IClientStatus {
    title: string,
    result: string,
    remarks?: string,
    updated_at: number
}
