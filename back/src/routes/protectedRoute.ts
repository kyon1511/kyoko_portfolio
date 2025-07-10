import express from 'express';
import { verifyFirebaseToken } from '../middleware/verifyFirebaseToken';

const router = express.Router();

// 認証が必要な API
router.get('/me', verifyFirebaseToken, (req, res) => {
  res.json({
    uid: req.user?.uid,
    email: req.user?.email,
  });
});

export default router;
