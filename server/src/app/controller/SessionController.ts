import { Request, Response } from 'express';
import AuthUserService from '../../service/AuthUserService';

class SessionController {
  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;
      const authenticateUser = new AuthUserService();
      const response = await authenticateUser.execute({ email, password });

      return res.json(response);
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }
}
export default new SessionController();