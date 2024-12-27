export function onRequestGet(context){
    return new Response(
      JSON.stringify({ success: true, message: JSON.stringify(context) }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
};
