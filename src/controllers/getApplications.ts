import { Request, Response } from 'express';
import Job from '../models/testTaskModel.js';

const getApplications = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const jobs = await Job.find();
    return res.status(200).json(jobs);
  } catch (err) {
    console.error('Ошибка при получении:', err);
    return res.status(500).json({ error: 'Что-то пошло не так при получении' });
  }
};

export default getApplications;
