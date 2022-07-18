import EmptyTodos from '../../../assets/dashboard/empty_todos.svg';

function EmptyStateTodos() {

  const render = () => {
    return (
      <div className="text-center" style={{
        marginTop: 40,
        marginBottom: 20
      }}
      >
        <img src={EmptyTodos} className="Image" width={300} alt="Empty todos" />
        <h1 className="Title-Text mt-10">You don't have todos. Start typing one above.</h1>
      </div>
    );
  };

  return render();
}

export default EmptyStateTodos;