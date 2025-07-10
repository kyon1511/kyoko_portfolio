
import { RequestHandler } from 'express';
import admin from '../utils/firebase-admin';

export const verifyFirebaseToken: RequestHandler =  (req,res,next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
     res.status(401).json({ error: '認証トークンがありません' });
     return;  
    }

  const idToken = authHeader.split('Bearer ')[1];

   admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken;
      next();
    })
    .catch(() => {
      res.status(401).json({ message: 'トークンの検証に失敗しました' });
    });
};