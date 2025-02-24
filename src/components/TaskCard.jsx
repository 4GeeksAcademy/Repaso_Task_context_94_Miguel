export function TaskCard({ task, onEdit, onDelete }) {
    const priorityColors = {
        high: 'bg-red-100 text-red-800',
        medium: 'bg-yellow-100 text-yellow-800',
        low: 'bg-green-100 text-green-800'
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <p className="text-gray-600">{task.description}</p>
                    <span className={`inline-block px-2 py-1 rounded text-sm mt-2 ${priorityColors[task.priority]}`}>
                        {task.priority}
                    </span>
                </div>
                <div className="space-x-2">
                    <button 
                        onClick={() => onEdit(task.id)}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        Edit
                    </button>
                    <button 
                        onClick={() => onDelete(task.id)}
                        className="text-red-600 hover:text-red-800"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}