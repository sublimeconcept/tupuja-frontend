export interface UserModel {
    objectId: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    address: string;
    password: string;
    user_type: string[];
    recomendation: string;
    refer: string;
    updatedAt: Date;
    createdAt: Date;
    emailVerified: boolean;

}