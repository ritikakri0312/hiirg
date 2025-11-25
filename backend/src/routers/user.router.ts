import { Router } from "express";
import { sample_users } from "../data";

const router = Router();

// Helper to create a "fake" token (don't use in production)
function createToken(user: any) {
  // simple fake token for demo: base64 of email + timestamp
  return Buffer.from(`${user.email}:${Date.now()}`).toString("base64");
}

// Register route - uses in-memory sample_users
router.post("/register", (req, res) => {
  try {
    const { name, email, password, address } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send({ message: "Name, email and password required" });
    }

    // check email already exists
    const exists = sample_users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      return res.status(400).send({ message: "User already exists" });
    }

    // create new user object (in-memory only)
    const newUser = {
      id: (sample_users.length + 1).toString(),
      name,
      email,
      password, // plain text for demo only
      address: address || "",
      isAdmin: false,
    };

    sample_users.push(newUser);

    // return user info + fake token (match frontend expectations)
    const token = createToken(newUser);
    return res.status(201).send({
      ...{ name: newUser.name, email: newUser.email, isAdmin: newUser.isAdmin },
      token,
    });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).send({ message: "Internal server error" });
  }
});

// Login route - check in-memory users
router.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: "Email and password required" });
    }

    const user = sample_users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!user) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    const token = createToken(user);

    return res.send({
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).send({ message: "Internal server error" });
  }
});

export default router;
