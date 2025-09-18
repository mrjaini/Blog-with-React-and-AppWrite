const config ={
    appUrl:String(import.meta.env.VITE_APP_URL),
    projectId : String(import.meta.env.VITE_PROJECT_ID),
    databaseID : String(import.meta.env.VITE_DATABASE_ID),
    collectionID : String(import.meta.env.VITE_COLLECTION_ID),
    bucketId : String(import.meta.env.VITE_BUCKET_ID)
}
export default config;