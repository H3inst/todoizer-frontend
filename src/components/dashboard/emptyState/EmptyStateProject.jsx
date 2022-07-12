import EmptySvg from '../../../assets/dashboard/empty_project.svg';

function EmptyStateProject() {

  const render = () => {
    return (
      <div className="flex-1 flex flex-column justify-center align-center">
        <img src={EmptySvg} alt="Empty" className="Image" width={250} />
        <h1 className="mt-30 Title-Text text-center" style={{ maxWidth: 400 }}>
          Whoops! You don't have tasks yet. Start creating lists.
        </h1>
      </div>
    )
  }

  return render();
}

export default EmptyStateProject;
