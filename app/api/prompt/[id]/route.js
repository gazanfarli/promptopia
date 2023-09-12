import Prompt from "@/models/Prompt";
import { connectToDB } from "@/utils/database";

export const GET = async (req, { params }) => {
    const { id: promptId } = params;
    try {
        await connectToDB()

        const prompt = await Prompt.findById(promptId);

        if (!prompt) {
            return new Response('Prompt not found', { status: 404 })
        }

        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        return new Response(`Failed to get prompt id ${promptId}`, { status: 500 })
    }
} 

export const PATCH = async (req, { params }) => {
    const { id: promptId } = params;
    const { prompt, tag } = await req.json();

    try {
        await connectToDB()
        // find existing prompt, if not return 404
        const existingPrompt = await Prompt.findById(promptId);
        if (!prompt) {
            return new Response('Prompt not found', { status: 404 })
        }
        // update prompt
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save();

        return new Response(JSON.stringify(existingPrompt), { status: 200 })
    } catch (error) {
        return new Response(`Failed to update prompt id ${promptId}`, { status: 500 })
    }
} 

export const DELETE = async (req, { params }) => {
    const { id: promptId } = params;
    try {
        await connectToDB()

        await Prompt.findByIdAndRemove({ _id: promptId });

        return new Response({}, { status: 204 })
    } catch (error) {
        return new Response(`Failed to delete prompt id ${promptId}`, { status: 500 })
    }
} 