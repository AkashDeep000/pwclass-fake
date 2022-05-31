// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
  if (req.method === 'POST') {
  const number = req.body.number
  const name = req.body.name
  const addr = req.body.addr
  
  
 if (number) {
   
		 const { db } = await connectToDatabase(); 
		for (let i = 0; i < 100000; i++){
		  9877666*i
		}
     const submit = await db.collection('shedule')
         .insertOne({
           number: number,
           name: name,
           addr: addr,
         })
      console.log(submit)   
	res.status(200).json({ success: true, data:submit})
  } else {
    res.status(400).json({ success: false, error: "no phone number passed"})
  }
  } 
  
}
