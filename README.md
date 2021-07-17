# JWT Authorization API

![](https://img.shields.io/github/license/1mpossible-code/jwt-authorization?color=green)

Express jwt authorization API  created in educational purposes.

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Credits](#credits)
* [License](#license)

----

## Description

App that implements authorization with [JWT](https://jwt.io/) token.

It uses [bcryptjs](https://www.npmjs.com/package/bcryptjs) to hash and verify passwords,
[joi](https://www.npmjs.com/package/joi) to validate data,
[jwt](https://jwt.io/) as an authorization token and [mongoDB](https://www.mongodb.com/)
([mongoose](https://www.npmjs.com/package/mogoose)) as a database.

## Installation

### Dependencies:

* [docker-compose](https://docs.docker.com/compose/)
* [npm](https://www.npmjs.com/)

```shell
# Clone repo
git clone https://github.com/1mpossible-code/jwt-authorization
# Cd into it
cd jwt-authorization
# Install packages
npm install
# Copy .env.example and edit it optionally
cp .env.example .env
# Compose up
docker-compose up
```

> You will have api on http://localhost:3000/api/

## Usage

All routes described here:

|Method|Route|Params|Description|
|:----:|-----|:----:|-----------|
POST | /api/user/register | {name: String, email: String, password: String} | Register new user. Return new created user's id.
POST | /api/user/login | {email: String, password: String} | Login user. Create and return new JWT token.
GET | /api/test | Header: `Authorization: Bearer {token}` | Test token is valid or no token at all. If valid return _id, name, email and date of creation of current user.

## Contributing

Feel freely to contribute this project. [Issues](https://github.com/1mpossible-code/jwt-authorization/issues)
and [PRs](https://github.com/1mpossible-code/jwt-authorization/pulls) are welcome!

## Credits

You can mail to `linme00p@gmail.com` to contact the author

# License

Copyright © 2021 [1mpossible-code](https://github.com/1mpossible-code). This project
is [GPLv3](https://www.https://www.gnu.org/licenses/gpl-3.0.htmlgnu.org/licenses/gpl-3.0) licensed.
