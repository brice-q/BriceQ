const Projects: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 pt-2">
            <div className="max-w-4xl mx-auto text-center">
                {/* Heading */}
                <div className="animate-fade-in-up delay-200 mb-8">
                </div>

                {/* Subtitle */}
                <div className="animate-fade-in-up delay-500 mb-12">
                    <p className="text-xl text-off-white max-w-2xl mx-auto leading-relaxed mb-4">
                        Explore my portfolio of various projects.
                    </p>
                    <p className="text-lg text-off-white">
                        Each project represents a unique challenge and learning experience.
                    </p>
                </div>

                {/* Under Construction Card */}
                <div className="animate-scale-in delay-700">
                    <div className="bg-dark-bg/80 backdrop-blur-sm border border-off-white/20 shadow-xl rounded-3xl p-12 mb-8">
                        <div className="text-6xl mb-6">🚧</div>
                        <h3 className="text-3xl font-display font-bold text-off-white mb-4">
                            Coming Soon
                        </h3>
                        <p className="text-off-white text-lg mb-6 max-w-lg mx-auto">
                            I'm currently working on some exciting projects that will be showcased here.
                            Stay tuned for updates!
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-sm">
                            <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full border border-accent-200">TypeScript</span>
                            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full border border-primary-200">React</span>
                            <span className="bg-warning-100 text-warning-700 px-3 py-1 rounded-full border border-warning-200">Node.js</span>
                            <span className="bg-warning-100 text-warning-700 px-3 py-1 rounded-full border border-warning-200">TailWindCSS</span>
                            <span className="bg-warning-100 text-warning-700 px-3 py-1 rounded-full border border-warning-200">Python</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Projects;