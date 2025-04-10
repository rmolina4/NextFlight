export default function Login() {
    return <div>
        <h1 className="text-2xl text-blue-500 p-2 mt-1"><a href="/">NextFlight</a></h1>
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col justify-center items-center border-solid border-2 p-5 rounded-lg">
                <h1 className="text-2xl text-blue-500">Login</h1>
                <form className="flex flex-col gap-4 mt-5">
                    <input type="text" placeholder="Username" className="border p-2 rounded" />
                    <input type="password" placeholder="Password" className="border p-2 rounded" />
                    <button type="submit" className="bg-blue-300 py-2 px-4 rounded-full hover:cursor-pointer">Login</button>
                </form>
                <p className="mt-4 text-sm">Don't have an account? <a href="/signup" className="text-blue-500">Signup</a></p>
            </div>
        </div>
    </div>;
}