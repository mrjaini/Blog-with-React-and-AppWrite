import config from '../config/config'
import {Client , Account , ID} from 'appwrite'

export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client
            .setEndpoint("https://sfo.cloud.appwrite.io/v1")
            .setProject(config.projectId);
        this.account= new Account(this.client);
    }

    async createAccount({email , password}){
        try {
            const userAccount = await this.account.create(ID.unique(), email , password);
            if(userAccount){
                return this.login({email, password})
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email , password}) {
        try {
            return await this.account.createEmailPasswordSession(email , password);
        } catch (error) {
            throw error;
        }
        
    }

    async getCurrent() {
    try {
        const user = await this.account.get();
        console.log("User:", user);
        return user;
    } catch (error) {
        // yaha error throw mat karo, bas null return karo
        console.log("No active session:", error.message);
        return null;
    }
}



    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }

}
const authService = new AuthService();
export default authService