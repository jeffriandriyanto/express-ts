import { Request, Response } from "express";

interface IController<T> {
  index(req: Request, res: Response): T;
  create(req: Request, res: Response): T;
  show(req: Request, res: Response): T;
  update(req: Request, res: Response): T;
  delete(req: Request, res: Response): T;
}

export default IController;