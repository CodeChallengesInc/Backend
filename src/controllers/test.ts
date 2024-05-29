import { Request, Response } from 'express';
import { GameService } from '../services/gameService';

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const gameService = GameService.getInstance();
export const GAME_TYPE = +(process.env.GAME_TYPE || 0);

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/', (req: Request, res: Response) => {
  if (req.body?.code && req.body?.antName) {
    const gameId = gameService.createTestGame(GAME_TYPE, req.body.antName, req.body.code);
    res.end(gameId);
  }
  res.end();
});

module.exports = router;
