import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const INSTAGRAM_TOKEN = Deno.env.get("INSTAGRAM_ACCESS_TOKEN");

    if (!INSTAGRAM_TOKEN) {
      return new Response(
        JSON.stringify({
          error: "Instagram access token not configured",
          posts: []
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=8&access_token=${INSTAGRAM_TOKEN}`
    );

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }

    const data = await response.json();

    const posts = data.data?.map((post: any) => ({
      id: post.id,
      image: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
      link: post.permalink,
      caption: post.caption || '',
      timestamp: post.timestamp,
    })) || [];

    return new Response(
      JSON.stringify({ posts }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600",
        },
      }
    );
  } catch (error) {
    console.error("Instagram API error:", error);

    return new Response(
      JSON.stringify({
        error: error.message,
        posts: []
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
