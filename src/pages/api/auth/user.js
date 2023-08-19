// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { saveUserData } from "@/services/users";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(404).json();
  }

  const { email, password } = req.body;
  try {
    saveUserData(email, password);
    return res.status(201).json();
  } catch (error) {
    return res.status(400).send({ message: error });
  }
}
