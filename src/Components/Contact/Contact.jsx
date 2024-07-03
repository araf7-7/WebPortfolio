
const Contact = () => {
    return (
        <div name='About' className="pt-10 min-h-screen px-10">
            <h1 className="text-4xl inline font-bold border-b-4">About</h1>
            <div className="mx-auto w-full max-w-md mt-20">
                <div className="rounded-lg bg-transparent border-2 border-yellow-300 px-10 pb-10 pt-8 shadow-md ">
                    <div className="mb-6">
                        <h2 className="text-center text-2xl font-bold">Contact Us</h2>
                        <p className="text-center text-zinc-500 dark:text-zinc-400">We&apos;d love to hear from you!</p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2 text-sm bg- text-zinc-700 dark:text-zinc-400">
                            <label className="block font-bold" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="h-10 w-full bg-transparent rounded border px-3 text-sm leading-tight focus:outline-none dark:border-zinc-700"
                                id="name"
                                placeholder="Your Name"
                                name="name"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                            <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-400" htmlFor="_email">
                                Email
                            </label>
                            <input
                                className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none dark:border-zinc-700"
                                id="_email"
                                placeholder="example@gmail.com"
                                name="email"
                                type="email"
                            />
                        </div>
                        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                            <label className="block font-bold" htmlFor="_message">
                                Message
                            </label>
                            <textarea
                                className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none dark:border-zinc-700"
                                id="_message"
                                placeholder="what's in your mind"
                                name="message"
                            />
                        </div>
                        <button className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Submit</button>
                    </form>

                </div>
            </div>
           
        </div>
    );
};

export default Contact;