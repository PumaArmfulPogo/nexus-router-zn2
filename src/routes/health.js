import { Router } from 'express';

const router = Router();
router.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'nexus-router-zn2', maintainer: 'PumaArmfulPogo', timestamp: new Date().toISOString() });
});

export default router;