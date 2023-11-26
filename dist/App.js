"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _TaskList = _interopRequireDefault(require("./components/TaskList"));
var _TaskForm = _interopRequireDefault(require("./components/TaskForm"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const App = () => {
  const [tasks, setTasks] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(storedTasks || []);
  }, []);
  const addTask = name => {
    const newTask = {
      id: tasks.length + 1,
      name,
      completed: false
    };
    setTasks([...tasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
  };
  const completeTask = id => {
    const updatedTasks = tasks.map(task => task.id === id ? {
      ...task,
      completed: !task.completed
    } : task);
    setTasks(updatedTasks);
    // Actualizar localStorage si se está utilizando
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    // Actualizar localStorage si se está utilizando
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Task Manager"), /*#__PURE__*/_react.default.createElement(_TaskForm.default, {
    addTask: addTask
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "taskList"
  }, " ", /*#__PURE__*/_react.default.createElement(_TaskList.default, {
    tasks: tasks,
    completeTask: completeTask,
    deleteTask: deleteTask
  })), /*#__PURE__*/_react.default.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "multiline-text"
  }, "Grupo 3: Adriana Villafa\xF1e(21992626),", /*#__PURE__*/_react.default.createElement("br", null), "Viviana Lopez(18445270),", /*#__PURE__*/_react.default.createElement("br", null), "Edmundo Molina(17219543),", /*#__PURE__*/_react.default.createElement("br", null), "Angel Aberbach(18123292) UTN 2023")));
};
var _default = exports.default = App;