// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'GET') {
    // res.status(200).json(DATA)
    res.setPreviewData({ title: 'unbelievable' })
    // res.status(200).json('preview mode activate')
    res.redirect('/contact')
  }
}
