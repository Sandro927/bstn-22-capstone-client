
# GG - Gathering Gamers

GG is a social media platform geared towards gamers. Users can share posts, like and comment on posts and view others users profiles.
On the User Profile page users can see the games their friends play, and their usersnames for each platform. They can see a list of their friends, and even their most recent post.



## API Reference

### /users Requests

#### Create New User

```http
  POST /register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Your name |
| `username` | `string` | **Required**. Your username |
| `password` | `string` | **Required**. Your password(encrypted) |
| `avatar` | `string` | Your user avatar. Defaults to master chief. |



#### Login as user
```http
  POST /login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your username |
| `password` | `string` | **Required**. Your password(encrypted) |



#### Gets current user data
```http
  GET /current
```


#### Gets user Avatar
```http
  GET /:userId
```

Response 

```http
{
    "userAvatar": "avatar_url
}
   
```

#### Updates user Avatar
```http
  PUT /:userId
```


#### Gets user profile data
```http
  GET /:userId/profile
```

Response 

```http
{
    "user_avatar": "user_avatar",
    "origin_username": "origin_username",
    "discord_username": "discord_username",
    "steam_username": "steam_username",
    ...
}
```

#### adds user profile data
```http
  POST /:userId/profile
```

#### updates user profile data
```http
  PUT /:userId/profile
```




### /posts Requests

#### Gets Posts

```http
  GET /
```


#### Create New Post

```http
  POST /
```


#### Increment Post likes

```http
  PUT /:postId/like
```

#### get comments on a post

```http
  GET /:postId/comment
```

#### Create comment on a post

```http
  POST /:postId/comments
```

#### like a comment on a post

```http
  PUT /:postId/comments/:commentId/like
```

#### Get a single users posts

```http
  GET /:userId
```












## Tech Stack

**Client:** React, SCSS, Chart.js, timeago.js

**Server:** Node, Express, Knex.js, mysql, bcrypt 


## Features

- Login/Signup with username and password
- post text content
- liking posts
- commenting on posts
- liking comments
- Viewing user profiles
- Setting content on profiles for others to view (including usernames)


## Run Locally

#### Open in Separate Explorers

Clone the server

```bash
  git clone https://github.com/Sandro927/bstn-22-capstone-server.git
```

Clone the client

```bash
  git clone https://github.com/Sandro927/bstn-22-capstone-client.git
```

Install dependencies

```bash
  npm install
```

To Start the server

```bash
  node server
```

To Start the client

```bash
  npm start
```
## Roadmap

- Complete Dashboard

- Add photo upload functionality

- Add functionality to add friends

- Add private messaging functionality

- Add video upload functionality

- implement passport.js

 


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

I ran into several obstacles when building this project. The first one was the design phase. This was the first real
project that I had to design from scratch and that was definitely a struggle, as I kept changing the design and second
guessing. It got easier as I started to look at other websites for design cues instead of trying to make everythign up
myself. The second obstacle I ran into was images, I though using multer to upload images to a server would be easier and
more practical, but it's not realistic in terms of scalability. I will likely rework the site with Next.js to make this easier.