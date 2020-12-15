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

**Fix:**
auth.js
```javascript
return next(new ExpressError('Unauthorized attempt', 401));
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

# Fix 5 - auth.js /middleware
 * Does not have jwt.verify?
 * Error handling does not display message?