export function onRequest(context) {
    return new Response("Hello, world!  " + JSON.stringify(context))
  }