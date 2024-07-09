import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div>
          {/* Header */}
          <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-3xl font-bold">MindBloom</h1>
              <nav className="flex">
                <Link to={"/blogs"}><div className="text-white mx-2">Home</div></Link>
                <Link to={"/signin"}><div className="text-white mx-2">Login</div></Link>
                
              </nav>
            </div>
          </header>
    
          {/* Hero Section */}
          <section className="bg-blue-500 text-white p-20 text-center">
            <h2 className="text-4xl font-bold">Welcome to MindBoom</h2>
            <p className="mt-4 text-xl">Sharing insights and stories of your journey</p>
          </section>
    
          {/* Featured Posts */}
          <section className="container mx-auto p-10">
            <h3 className="text-2xl font-bold mb-6">Featured Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Post 1 */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-bold">Golang High-Performance Programming EP3: Memory Alignment</h4>
                <p className="mt-2 text-gray-600">While I love creating projects from scratch, the reality is often that I inherit projects. Sometimes, it’s to join a team and extend the capabilities of the current codebase...</p>
                <Link to={"/blog/39b83588-af7c-43ce-a87f-23ec79fd1716"}><a href="" className="text-blue-500 mt-4 block">Read more</a></Link>
              </div>
              {/* Post 2 */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-bold">React Blog</h4>
                <p className="mt-2 text-gray-600">ast week we hosted React Conf 2024, a two-day conference in Henderson, Nevada where 700+ attendees gathered in-person to discuss the latest in UI engineering...</p>
                <Link to={"blog/8da350e8-8616-45bf-a01b-71925709e4c0"}><a href="" className="text-blue-500 mt-4 block">Read more</a></Link>
              </div>
              {/* Post 3 */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-bold">Everything About NodeJS 22: New Features and Latest Updates</h4>
                <p className="mt-2 text-gray-600">Quick Summary The Node.js development team has raised the bar of efficiency to the next level with the latest version of NodeJS. As with previous versions, this time...</p>
                <Link to={"blog/f2638966-e0a7-4b56-9bf5-7b436ad7b78f"}><a href="" className="text-blue-500 mt-4 block">Read more</a></Link>
              </div>
            </div>
          </section>
    
          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
              <p>&copy; 2024 My Blog. All rights reserved.</p>
              <div className="flex gap-x-10 justify-center">
              <a href="https://www.linkedin.com/in/ayush-srivastava-198502219/" className="text-blue-500 mt-4 block">Linkedin</a>
              <a href="https://github.com/ayush11122" className="text-blue-500 mt-4 block">Github</a>
              <a href="https://twitter.com/ayush_11122" className="text-blue-500 mt-4 block">Twitter/X</a>
              </div>
            </div>
          </footer>
        </div>
      );
}

export default Welcome