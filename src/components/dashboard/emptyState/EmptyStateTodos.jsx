import EmptyTodos from '../../../assets/dashboard/empty_todos.svg';

function EmptyStateTodos() {

  const render = () => {
    return (
      <div className="text-center" style={{
        position: 'absolute',
        top: '35%',
        right: '0',
        left: '0'
      }}
      >
        <img src={EmptyTodos} className="Image" width={200} alt="Empty todos" />
        <h1 className="Title-Text mt-10">You don't have todos. Start typing one above.</h1>
      </div>
    );
  };

  return render();
}

export default EmptyStateTodos;