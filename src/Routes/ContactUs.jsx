

const ContactUs = () => {
    return (
        <form className="card-body w-11/12 md:w-8/12 lg:w-4/12 mx-auto my-10">
            <h1 className="text-3xl font-bold mb-5">Get in touch with us</h1>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Write your queries</span>
                </label>
                <input type="text" placeholder="" name="queries" className="h-28 input input-bordered" required />
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
};

export default ContactUs;