export default eventHandler(async (event) => {

  const { pathname } = getRouterParams(event)

  console.log(pathname);

  return hubBlob().serve(event, 'img/' + pathname)
})