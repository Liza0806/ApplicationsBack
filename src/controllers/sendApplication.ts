import { Request, Response } from 'express';
import Job from '../models/testTaskModel'; 
import jobApplicationSchema from '../models/testTaskSchemaJoi';

 const sendApplication = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { error } = jobApplicationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const existing = await Job.findOne({ id: req.body.id });
    if (existing) {
      return res.status(409).json({ error: 'Заявка с таким ID уже существует' });
    }

    const newJob = new Job(req.body);
    await newJob.save();

    return res.status(201).json(newJob);
  } catch (err) {
    console.error('Ошибка при сохранении:', err);
    return res.status(500).json({ error: 'Что-то пошло не так при сохранении' });
  }
};
export default sendApplication;