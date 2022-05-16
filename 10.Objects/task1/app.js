const users = [
	{
		username: 'David',
		status: 'online',
		lastActivity: 10
	},
	{
		username: 'Lucy',
		status: 'offline',
		lastActivity: 22
	},
	{
		username: 'Bob',
		status: 'online',
		lastActivity: 104
	}
]

const onlineUsers = users.filter(user => user.status === 'online')
let usersOnlineNames = ''

onlineUsers.forEach((user, index) => {

	usersOnlineNames += user.username
	if (index < onlineUsers.length - 1) {
		usersOnlineNames += ', '
	}
})

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}.`)