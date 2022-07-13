import {Request, Response} from 'express';
import {authenticate} from "./db-data";




export function loginUser(req: Request, res: Response) {

  console.log("User login attempt ...");

  const {email, password} = req.body;

  const user = authenticate(email, password);

  if (user) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      res.status(200).json({email: user.email});
=======
    res.status(200).json({email: user.email});
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
    res.status(200).json({email: user.email});
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
=======
    res.status(200).json({email: user.email});
>>>>>>> a46e1ede5065993676a1e08de1e9346e57b6b30c
  }
  else {
    res.sendStatus(403);
  }

}
