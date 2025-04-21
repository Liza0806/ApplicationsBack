import mongoose from 'mongoose';

    
const testTaskModel = new mongoose.Schema({
  required: { type: Boolean, required: true },
  sentDate: { type: String }, // ISO string
  status: {
    type: String,
    enum: ["Отправлено", "Принято", "Проверяется", "Не принято"],
  },
}, { _id: false });

export const jobSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  position: { type: String, required: true },
  company: { type: String, required: true },
  trust: {
    type: String,
    enum: ["Норм", "Стрем", "Подозрительно", "хз"],
    required: true,
  },
  salary: { type: mongoose.Schema.Types.Mixed }, // может быть строкой или числом
  source: { type: String, required: true },
  employmentType: {
    type: String,
    enum: ["Полная", "Частичная", "Стажировка", "Контракт"],
    required: true,
  },
  workFormat: {
    type: String,
    enum: ["Удалёнка", "Офис", "Гибрид"],
    required: true,
  },
  appliedDate: { type: String, required: true },
  status: {
    type: String,
    enum: [
      "Откликнулся", "Пригласили на интервью", "Прошёл HR",
      "Прошёл тех", "Прошёл все интервью", "Ожидание ответа",
      "Оффер", "Отказ", "Не откликнулся"
    ],
    required: true,
  },
  replyReceived: { type: Boolean, required: true },
  testTask: testTaskModel,
  requirements: [{ type: String }],
  notes: { type: String },
  link: { type: String },
}, { timestamps: true });

export default mongoose.model('Job', jobSchema);
