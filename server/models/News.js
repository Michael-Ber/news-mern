import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
    {
        source: {
            type: Object
        },
        author: {
            type: String
        },
        title: {
            type: String
        },
        desscription: {
            type: String
        },
        url: {
            type: String
        },
        urlToImage: {
            type: String
        },
        publishedAt: {
           type: String 
        },
        content: {
            type: String
        }
    }
);

export default mongoose.model('News', NewsSchema)