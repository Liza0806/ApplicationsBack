import { Request, Response } from 'express';
import Job from '../models/testTaskModel.js';

const updateApplication = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params; 
  const updateData = req.body; 

  try {
    const updatedJob = await Job.findByIdAndUpdate(id, updateData, {
      new: true, 
      runValidators: true, 
    });

    if (!updatedJob) {
      return res.status(404).json({ error: 'отклик не найден' }); 
    }

    return res.status(200).json(updatedJob); 
  } catch (err) {
    console.error('Ошибка при обновлении:', err);
    return res.status(500).json({ error: 'Что-то пошло не так при обновлении' }); 
  }
};

export default updateApplication;
