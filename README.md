# Mongoose Media

## Description

This is the backend code for a social media application, using MongoDB, Express.js, and Mongoose ODM. In the walkthrough video it will show how to use this backend application in Insomnia. Using the API routes you will be able to use the CRUD operations for users and thoughts. You will also be able to post and delete reactions and friends from thoughts or users.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

N/A

## Usage

This code is used for the backend of a social media application. Using Insomnia you are able to Create, Read, Update, and Delete Users or Thoughts from the database following the API routes. Each User may have thoughts, friends, and reactions on thier or anyone's thought. Follow the video to get a better view of the application.

## Credits

N/A

## License

Please refer to the [MIT](https://opensource.org/licenses/MIT) LICENSE.

## Mock Up

Here is a walkthrough video showing the application working in Insomnia. [Walkthrough Video](https://drive.google.com/file/d/1yrASECubX99xd0eD7IuaBRDjeXss8zXV/view)
