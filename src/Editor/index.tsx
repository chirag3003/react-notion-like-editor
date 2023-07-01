
const Editor = () => {
    return (
        <div className={"max-w-2xl w-full p-5 rounded"}>
            <div className="w-full text-5xl font-bold" contentEditable={true}>Heading</div>
        </div>
    );
};

export default Editor;