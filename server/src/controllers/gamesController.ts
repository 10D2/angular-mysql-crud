import { Request, Response } from 'express';
import pool from '../database';

class GamesController{

   public async list (req: Request, res: Response){
     const games= await pool.query('SELECT * FROM games')

        res.json(games)
   }

   public async getOne(req: Request, res: Response): Promise <any> {
      const { id } = req.params
      const games= await pool.query('SELECT * FROM games WHERE id = ?', [id])
      console.log('Longitud:', games.lenght )
      if(games.lenght === undefined){
         return res.json(games[0])
      }else {
            res.status(404).json({text: 'The game doesnt exists'})
      }
      
   }
   
   public async create (req: Request, res: Response):Promise< void> {
      await pool.query('INSERT INTO games set ?', [req.body])
      res.json({Mesage: 'Game save'})
   }
   
   public async  update ( req: Request, res: Response): Promise<void> {
      const {id}= req.params

      console.log('BODY: ',[req.body, id])
      await pool.query(`UPDATE games SET ? WHERE id = ?`, [req.body, id])

      res.json({text: `The game was updated: ${req.params.id}`})
   }
   
   public async  delete( req: Request, res: Response): Promise<void> {

      const {id} = req.params
     const game = await pool.query('DELETE FROM games WHERE id = ?', [id])

      res.json({text: `Se eliminó elemento número: ${req.params.id}`})
   }




}

export const gamesController =new GamesController()

// export default gamesController



