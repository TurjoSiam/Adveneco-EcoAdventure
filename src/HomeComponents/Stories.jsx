import { useEffect, useState } from "react";
import Story from "./Story";
import 'animate.css';

const Stories = () => {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch('/stories.json')
        .then(res => res.json())
        .then(data => setStories(data))
    }, [])
    console.log(stories);

    return (
        <div className="w-10/12 mx-auto md:my-20 text-center space-y-3 md:space-y-7 animate__animated animate__fadeInRight">
            <h2 className="text-3xl font-extrabold">"Adventures Worth Remembering"</h2>
            {
                stories.map(story => <Story key={story.id} story={story}></Story>)
            }
        </div>
    );
};

export default Stories;