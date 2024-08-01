export type UserAddress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string,
    }
}

export type CompanyType = {
    name: string,
    catchPhrase: string,
    bs: string
}

export type UserType = {
    id: string,
    name: string,
    username: string,
    email: string,
    address: UserAddress,
    phone: string,
    website: string,
    company: CompanyType
}

export const getUsers = async (): Promise<UserType[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json() as UserType[]
    return users
}

export const getUserById = async (id: string): Promise<UserType> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json() as UserType
    return user
}

export const getUserByEmail = async (email: string): Promise<UserType[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)
    const user = await response.json() as UserType[]
    return user
}