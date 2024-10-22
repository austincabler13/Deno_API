import { serve } from "https://deno.land/std@0.113.0/http/server.ts";
import { dashboard } from "./index.html";

const handler = async (req: Request): Promise<Response> => {
  const apiData = {
    message: "Hello from Deno API!"
  };

  if (req.url === "/api") {
    return new Response(JSON.stringify(apiData), {
      headers: { "content-type": "application/json" }
    });
  }

  return new Response(dashboard, {
    headers: { "content-type": "text/html" }
  });
};

console.log("Server running on http://localhost:3030");
await serve(handler, { port: 3030 });
