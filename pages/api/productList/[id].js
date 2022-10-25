// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { DATA } from "../../../lib/productLists";

export default function handler(req, res) {
  res.status(200).json({
    Data: DATA.filter((item) => item.id === parseInt(req.query.id))[0],
  });
}
