"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _TaskItem = _interopRequireDefault(require("./TaskItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TaskList = _ref => {
  let {
    tasks,
    completeTask,
    deleteTask
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "task-list"
  }, tasks.map(task => /*#__PURE__*/_react.default.createElement(_TaskItem.default, {
    key: task.id,
    task: task,
    completeTask: completeTask,
    deleteTask: deleteTask
  })));
};
var _default = exports.default = TaskList;