# Fix 1 - Outdated Modules:
```javascript
"dotenv": "^8.2.0",
"pg": "^8.5.0",
"supertest": "^6.0.1"
```

# Fix 2 - Added:
```javascript
message: err.message
```
to error handling to report error message and pass test

# Fix 3 - Removed Duplicate:
**In app.js file:**
```javascript
module.exports = app;
```

# Fix 4 - Invalid login rejects user and responds accordingly
 * Did not previously reject login for invalid login attempt, instead it still returned token
 * This was because User.authenticate() was not awaiting.

**Fix:**
add ***await*** before function
auth.js
```javascript
let user = await User.authenticate(username, password);
```

**Implimented Test:**
```javascript
  test("should reject incorrect username/password log in attempt", async function() {
    const response = await request(app)
      .post("/auth/login")
      .send({
        username: "u1",
        password: "incorrectpwd1"
      });
    expect(response.statusCode).toBe(401);
  });
```

# Fix 5 - jwt verification and error throwing
 * jwt.decode should be jwt.verify and thow an error if the payload is not present
 * must send a new expressError() when calling the next function to return 401 error to user.

**Fix:**
/middleware/auth.js
```javascript
  let payload = jwt.verify(token);

  if (!payload) {
    throw Error();
  }
```
*also modified:*

/middleware/auth.js
```javascript
    return next(new ExpressError('Unauthorized attempt', 401));
```

*and added testing to prevent future error:*
