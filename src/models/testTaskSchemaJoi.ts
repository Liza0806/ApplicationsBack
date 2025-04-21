import Joi from "joi";

const testTaskSchemaJoi = Joi.object({
  required: Joi.boolean().required(),
  sentDate: Joi.string().isoDate(),
  status: Joi.string().valid(
    "Отправлено",
    "Принято",
    "Проверяется",
    "Не принято"
  ),
});

const jobApplicationSchema = Joi.object({
  id: Joi.string().required(),
  position: Joi.string().required(),
  company: Joi.string().required(),
  trust: Joi.string().valid("Норм", "Стрем", "Подозрительно", "хз").required(),
  salary: Joi.alternatives().try(Joi.string(), Joi.number()),
  source: Joi.string().required(),
  employmentType: Joi.string()
    .valid("Полная", "Частичная", "Стажировка", "Контракт")
    .required(),
  workFormat: Joi.string().valid("Удалёнка", "Офис", "Гибрид").required(),
  appliedDate: Joi.string().isoDate().required(),
  status: Joi.string()
    .valid(
      "Откликнулся",
      "Пригласили на интервью",
      "Прошёл HR",
      "Прошёл тех",
      "Прошёл все интервью",
      "Ожидание ответа",
      "Оффер",
      "Отказ",
      "Не откликнулся"
    )
    .required(),
  replyReceived: Joi.boolean().required(),
  testTask: testTaskSchemaJoi,
  requirements: Joi.array().items(Joi.string()).required(),
  notes: Joi.string().allow("", null),
  link: Joi.string().uri().allow("", null),
});

export default jobApplicationSchema;
