// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { DATA } from "../productLists";

export default function handler(req, res) {
  res.status(200).json({ Data: DATA });
}
