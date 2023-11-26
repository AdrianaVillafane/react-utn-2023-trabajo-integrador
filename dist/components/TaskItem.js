"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TaskItem = _ref => {
  let {
    task,
    completeTask,
    deleteTask
  } = _ref;
  const handleComplete = () => {
    completeTask(task.id);
  };
  const handleDelete = () => {
    deleteTask(task.id);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "task-item ".concat(task.completed ? 'completed' : '')
  }, /*#__PURE__*/_react.default.createElement("span", null, task.name), /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: handleComplete
  }, "Complete"), /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: handleDelete
  }, "Delete"));
};
var _default = exports.default = TaskItem;