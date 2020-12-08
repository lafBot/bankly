### Fix 1 - Outdated Modules:
 * pg
 * supertest
 * dotenv

### Fix 2 - Added:
 * "message: err.message" to error handling to report error message and pass test

### Fix 3 - Removed Duplicate:
 * "module.exports = app;" in app.js

### Fix 4 - Invalid login rejects user and responds accordingly
 * Did not previously reject login for invalid login attempt, instead it still returned token  

   // fix #4
  test("should reject incorrect username/password log in attempt", async function() {
    const response = await request(app)
      .post("/auth/login")
      .send({
        username: "u1",
        password: "incorrectpwd1"
      });
    expect(response.statusCode).toBe(401);
    // expect(response.body).toEqual({ token: expect.any(String) });
  });
