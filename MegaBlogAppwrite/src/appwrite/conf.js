import config from '../config/config';
import {Client ,ID,Query, Storage , Databases} from 'appwrite'

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(config.appUrl)
            .setProject(config.projectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title , slug , featuredImage ,content, status, userId}){
        try {
            return await this.databases.createDocument(
                config.databaseId,
                config.collectionId,
                slug,
                {
                    title,
                    featuredImage,
                    content, 
                    status, 
                    userId
                }
            )
        } catch (error) {
            throw error;
            
        }
    }

    async updatePost(slug , {title , featuredImage ,content, status, userId}){
        try {
            return await this.databases.updateDocument(
                config.databaseId,
                config.collectionId,
                slug,
                {
                    title,
                    featuredImage,
                    content, 
                    status,
                    userId, 
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deletePost(
                config.databaseId,
                config.collectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.databaseId,
                config.collectionId,
                slug
            )
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status" , "active")]){
        try {
            return await this.databases.listDocuments(
                config.databaseId,
                config.collectionId,
                queries,
            )
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.bucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.bucketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.bucketId,
            fileId
        )
    }
}
 

const service = new Service();
export default service;