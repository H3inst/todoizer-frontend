import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add, Close, Edit, MoreVertical, Trash } from 'grommet-icons';
import { useParams } from 'react-router-dom';

import { TODO_STATUS } from '../../../constants/constants';

import { createTodoAction, deleteTodoAction, editTodoAction } from '../../../features/project/projectTodoActions';
import { getProjectByIdAction } from '../../../features/project/projectActions';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

import DeleteProjectModal from './modals/DeleteProjectModal';
import EditProjectModal from './modals/EditProjectModal';
import EmptyStateTodos from '../emptyState/EmptyStateTodos';

function Project() {
  const wrapperRef = useRef(null);
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const project = useSelector(state => state.project.project);

  const [todoDescription, setTodoDescription] = useState('');
  const [openMenu, setOpenMenu] = useState(false);
  const [editProjectModal, setEditProjectModal] = useState(false);
  const [deleteProjectModal, setDeleteProjectModal] = useState(false);

  useEffect(() => {
    dispatch(getProjectByIdAction(projectId));
  }, [dispatch, projectId]);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenEditProjectModal = () => {
    setEditProjectModal(true);
    handleCloseMenu();
  };

  const handleCloseEditProjectModal = () => {
    setEditProjectModal(false);
  };

  const handleOpenDeleteProjectModal = () => {
    setDeleteProjectModal(true);
    handleCloseMenu();
  };

  const handleCloseDeleteProjectModal = () => {
    setDeleteProjectModal(false);
  };

  const handleOnChange = ({ target }) => {
    setTodoDescription(target.value);
  };

  const handleCreateTodo = (event) => {
    event.preventDefault();
    if (todoDescription.trim().length > 0) {
      dispatch(createTodoAction(projectId, {
        todo_description: todoDescription
      }));
      setTodoDescription('');
    }
  };

  const handleOnChangeTodoStatus = ({ target }, todo) => {
    let todoData = {};
    if (todo.todo_status === TODO_STATUS.undone) {
      todoData.todo_status = TODO_STATUS.done;
    } else if (todo.todo_status === TODO_STATUS.done) {
      todoData.todo_status = TODO_STATUS.undone;
    } else {
      todoData.todo_status = TODO_STATUS.done;
    }
    dispatch(editTodoAction(projectId, todo.todo_id, todoData));
  };

  const handleOnChangeTodoDescription = ({ target }, todo) => {
    let todoData = {
      todo_description: target.value
    };
    if (target.value !== todo.todo_description) {
      dispatch(editTodoAction(projectId, todo.todo_id, todoData));
    }
  };

  const handleDeleteTodo = (todoId) => {
    if (todoId) {
      dispatch(deleteTodoAction(projectId, todoId));
    }
  };

  useOutsideClick(wrapperRef, openMenu, handleCloseMenu);

  const renderProjectOptions = () => {
    return (
      <div className="Dropdown" ref={wrapperRef}>
        <button
          className="IconButton ml-10"
          onClick={handleOpenMenu}
        >
          <MoreVertical />
        </button>
        <div className={`Dropdown-Menu ${openMenu && 'Show-Menu'}`}>
          <div
            className="Dropdown-Menu__Item"
            onClick={handleOpenEditProjectModal}
          >
            <Edit size="15" className="mr-20" />
            Change project name
          </div>
          <div
            className="Dropdown-Menu__Item"
            onClick={handleOpenDeleteProjectModal}
          >
            <Trash size="15" className="mr-20" />
            Delete project
          </div>
        </div>
      </div>
    );
  };

  const renderTodos = () => {
    return (
      <div className="Main-Layout__Todo-List">
        <form onSubmit={handleCreateTodo} className="mb-10">
          <div className="flex">
            <input
              className="Textfield-No-Bg"
              type="text"
              name="todo_description"
              placeholder="Type a new todo here"
              onChange={handleOnChange}
              value={todoDescription}
            />
            <button className="IconButton">
              <Add />
            </button>
          </div>
        </form>
        {project.todos.length > 0 ? project.todos.map((todo, index) => {
          let isDone = todo.todo_status === TODO_STATUS.done;

          return (
            <div key={todo.todo_id} className="Main-Layout__Todo-List__Item">
              <input
                type="checkbox"
                checked={isDone}
                id={`todo_status_${index}`}
                name={`todo_status_${index}`}
                onChange={(e) => handleOnChangeTodoStatus(e, todo)}
              />
              <input
                className="Textfield-No-Bg pl-10"
                type="text"
                defaultValue={todo.todo_description}
                onBlur={(e) => handleOnChangeTodoDescription(e, todo)}
                style={{
                  textDecoration:
                    todo.todo_status === TODO_STATUS.done
                      ? 'line-through'
                      : 'none'
                }}
              />
              <button
                className="IconButton"
                type="submit"
                onClick={() => handleDeleteTodo(todo.todo_id)}
              >
                <Close size="10" />
              </button>
            </div>
          );
        }) : (
          <EmptyStateTodos />
        )}
      </div>
    );
  };

  const render = () => {
    let totalTodos = project.todos.length;
    let doneTodos = project.todos.filter(t => t.todo_status === TODO_STATUS.done).length;

    let completePercentage = totalTodos ? doneTodos / totalTodos * 100 : 0;

    return (
      <div className="Main-Layout">
        <div className="flex align-center">
          <div className="flex-1">
            <h1 className="Title-Text">
              {project.project_name}
            </h1>
            <p className="Parraf-Text text-muted">
              {parseFloat(completePercentage).toFixed(0)}% completed
            </p>
          </div>
          {renderProjectOptions()}
        </div>
        {renderTodos()}
        <EditProjectModal
          isOpen={editProjectModal}
          data={{ projectId, projectName: project.project_name }}
          onClose={handleCloseEditProjectModal}
          width={400}
        />
        <DeleteProjectModal
          isOpen={deleteProjectModal}
          data={projectId}
          onClose={handleCloseDeleteProjectModal}
          width={400}
        />
      </div>
    );
  };

  return render();
}

export default Project;