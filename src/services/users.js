import fs from 'fs';
import path from 'path';
import { compare, hash } from 'bcryptjs';
const filePath = path.join(process.cwd(), "src", "data", "users.json");

//  getUserData
export function getUserData() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}
//  getUserid
export function getUserId(id) {
    const data = getUserData();
    return data.find(p => p.id === Number(id))
}

export function getByEmail(email) {
    const data = getUserData();
    return data.find((e) => e.email.toLowerCase() === email.toLowerCase()   )
}
export async function verifyPassword(hashPassword, password) {
    const isValid = await compare(password, hashPassword)
    return isValid;
}

// save Data in user details like signup or signin details
export async function saveUserData( email, password) {
    const userFound = getByEmail(email);
    if (userFound) {
        throw new Error("User alredy signin")
    }
    const data = getUserData();

    const hashPassword = await hash(password, 12);
    data.push({
        id: data.length + 1,
        email,
        password: hashPassword,
    })
    fs.writeFileSync(filePath, JSON.stringify(data));
}