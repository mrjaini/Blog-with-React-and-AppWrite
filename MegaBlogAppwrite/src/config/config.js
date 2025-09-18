const config ={
    appUrl:String(import.meta.env.VITE_APP_URL),
    databaseId : String(import.meta.env.VITE_PROJECT_ID),
    collectionID : String(import.meta.env.VITE_DATABASE_ID),
    bucketId : String(import.meta.env.VITE_COLLECTION_ID),
    projectId : String(import.meta.env.VITE_BUCKET_ID)
}
export default config;