exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'IHU',
      age: 85,
      email: 'IHU@gmail.com'
    })
  }
}