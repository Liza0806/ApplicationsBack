import { Request, Response } from 'express';
import Job from '../models/testTaskModel.js';

const deleteApplication = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { id } = req.params; // Получаем ID из параметров URL

  try {
    const deletedJob = await Job.findByIdAndDelete(id); // Ищем и удаляем по ID

    if (!deletedJob) {
      return res.status(404).json({ error: 'Заявка не найдена' }); // Если заявка не найдена
    }

    return res.status(200).json({ message: 'Заявка успешно удалена' }); // Успех
  } catch (err) {
    console.error('Ошибка при удалении:', err);
    return res.status(500).json({ error: 'Что-то пошло не так при удалении' }); // Ошибка при удалении
  }
};

export default deleteApplication;
