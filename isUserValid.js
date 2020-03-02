function isUserValid (email, pwd) {
  const users = [
    // {firstName:'test', email:'1@1', password: '1'},
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]

  let user

  for (let index = 0; index < users.length; index++) {
    if (users[index].email === email && users[index].password === pwd) {
      user = users[index]
      break
    }
  }

  if (user) return user.firstName
  else return false
}

module.exports = isUserValid
