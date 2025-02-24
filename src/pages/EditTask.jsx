import { useNavigate } from "react-router-dom";

export function EditTask() {
    const { getTask, updateTask } = useContext(TaskContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const task = getTask(id);

    const handleSubmit = (taskData) => {
        updateTask(parseInt(id), taskData);
        navigate('/tasks');
    };

    if (!task) {
        return <div>Task not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Edit Task</h1>
            <div className="max-w-md mx-auto">
                <TaskForm 
                    initialData={task} 
                    onSubmit={handleSubmit} 
                    buttonText="Update Task" 
                />
            </div>
        </div>
    );
}