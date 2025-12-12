import type {Context} from "@netlify/functions";

export default async (req:Request,context:Context)=>{
    const url = new URL(req.url);
    if(!url.searchParams.has('count')) {
        return new Response("Hello. You found the Malcolm Ipsum API endpoint!",{
            status: 200,
            headers: {
                "Content-Type": "text/plain"
            }
        });
    } else {
        const count = Number(url.searchParams.get('count'));
        return new Response(`Generated ${count} paragraphs of Malcolm Ipsum`, {
                status: 200,
                headers: {
                    "Content-Type": "text/plain"
                }
            });
    }
    

}