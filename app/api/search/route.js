import Prompt from "@/models/Prompt";
import { connectToDB } from "@/utils/database";


export const POST = async (req, { params }) => {
    try {
        await connectToDB();

        const { search } = await req.json();

        const response = await Prompt.find({
            $or: [
                { prompt: { $regex: search, $options: 'i' } },
                { tag: { $regex: search, $options: 'i' } }
            ]
        }).populate('creator');

        return new Response(JSON.stringify(response), { status: 200 })
    } catch (err) {
        return new Response("No search results", { status: 404 })
    }
}

// {
//     creator: {
//         email: { $regex: search, $options: 'i' },
//         username: { $regex: search, $options: 'i' },
//     }
// }