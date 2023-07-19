export const STATUS = {
  new_order: {
    status: "new_order",
    name: "Новый заказ",
    style: "badge-info",
  },
  in_progress: {
    status: "in_progress",
    name: "Заказ в работе",
    style: "badge-warning",
  },
  done: {
    status: "done",
    name: "Выполнен",
    style: "badge-success",
  },
  accepted: {
    status: "accepted",
    name: "Принят заказчиком",
    style: "badge-primary",
  },
  canceled: {
    status: "canceled",
    name: "Отклонен",
    style: "badge-danger",
  },
  arbitration: {
    status: "arbitration",
    name: "Арбитраж",
    style: "badge-danger",
  },
  archive: {
    status: "archive",
    name: "Архив",
    style: "badge-secondary",
  },
  default: {
    status: null,
    name: "-",
    style: "badge-light",
  },
  reset: {
    status: "",
    name: "Сброс",
    style: "badge-light",
  },
};
