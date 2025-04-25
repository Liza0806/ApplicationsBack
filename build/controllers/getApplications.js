import Job from '../models/testTaskModel.js';
const getApplications = async (req, res) => {
    try {
        const jobs = await Job.find();
        return res.status(200).json(jobs);
    }
    catch (err) {
        console.error('Ошибка при получении:', err);
        return res.status(500).json({ error: 'Что-то пошло не так при получении' });
    }
};
export default getApplications;
//# sourceMappingURL=getApplications.js.map