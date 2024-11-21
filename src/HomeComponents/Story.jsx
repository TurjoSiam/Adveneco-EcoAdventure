

const Story = ({ story }) => {

    const { title, photo, details } = story;

    return (
        <div className="flex items-center text-start gap-7 font-spinnaker border border-amber-200 bg-amber-50 mb-5 p-7 rounded-3xl">
            <img className="rounded-xl w-64 cursor-pointer transition-all ease-in hover:scale-105
            " src={photo} alt="photo" />
            <div className="flex flex-col gap-5 items-start">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p>{details}</p>
                <button className="border-2 border-orange-300 px-3 py-1 rounded-xl">Read More</button>
            </div>
        </div>
    );
};

export default Story;