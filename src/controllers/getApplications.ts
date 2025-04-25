import { Request, Response } from 'express';
import Job from '../models/testTaskModel.js';

const getApplications = async (req: Request, res: Response): Promise<any> => {
  try {
    debugger
    const jobs = await Job.find();
    debugger
    return res.status(200).json(jobs);
  } catch (err) {
    debugger
    console.error("Error getting applications:", err);
    return res.status(500).json({ error: "Something went wrong while fetching" });
  }
};

export default getApplications;
