### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  > Json Web Tokens are a method of authentication which utilizes encoding and a signature to authenticate that the appropriate user is making a request and granted permissions.

- What is the signature portion of the JWT?  What does it do?
  > The signature portion is the important part that is used to verify that the user has the correct signature.  This signature that was originally created on the server-side, must match when the user sends the request.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  > Yes, the payload can be decoded, but this should not contain sensitive information.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  > When a user logs in with valid information, a JWT is created on the server with a specific signature, then returned and stored as a cookie.  Whenever the logged-in user makes a request to the server, the server checks to ensure that the JWT signature matches the one given out.  If it does, the request will be accepted.  If it does not match, permission requested is denied.

- Compare and contrast unit, integration and end-to-end tests.
  > Unit tests: Testing smaller units of an application for proper data processing.  Quicker and cheaper.
  > Integration testing:  Tests the combination of multiple functions and their processes connected to each other.  More expensive.
  > End-to-end: Tests user scenarios from start to finish by inputting data as a user would on the front end and checking for validation and proper data retrieval.

- What is a mock? What are some things you would mock?
  > You can mock (or simulate) a user's behavior to test the functionality within your webpage or webapp.

- What is continuous integration?
  > The addition of frequent updates to a repository as opposed to infrequent, larger launches.  This requires automated testing to ensure an update does not break any functionality.

- What is an environment variable and what are they used for?
  > They are variables that are to be used for a server's application and can be stored in a single file to preserve confidentiality (when using things such as secret keys or api keys).  They can be stored in a .env file when using npm's dotenv module.

- What is TDD? What are some benefits and drawbacks?
  > Test Driven Development starts with writing tests, and then writing the code until it passes the tests.

- What is the value of using JSONSchema for validation?
  > JSONSchema can ensure that the user is entering the correct data type, and required data for submission.

- What are some ways to decide which code to test?
  > First, decide what kind of testing you will be doing.  Then, determine what would be the quickest/cheapest way to test the functionality without sacrificing any necessary tests.

- What are some differences between Web Sockets and HTTP?
  > Web Sockets provide a direct connection between the server and user.  Any server updates for the users are directly processed, whereas HTTP requires the page to be reloaded or a request to be made to show any server changes.

- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?
  > In regards to web-based development, I found Express to be more enjoyable to use.  Everything seemed a little more streamlined.  However, I would rather pursue python in order to have a wider range of applications.


### Start Time
12/03/2020 09:55am

### End Time
12/