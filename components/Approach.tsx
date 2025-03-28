import { Zap } from "lucide-react";

const Approach = () => {
  return (
    <div className="bg-bg-primary py-10">
      <div className="w-7xl mx-auto   rounded-xl p-8 text-center transition-all duration-700 relative overflow-hidden ">
        {/* background */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-primary/20" />

        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full">
              <Zap size={24} className="text-primary" />
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-text-primary">
            My Development Approach
          </h3>
          <p className="text-white/70 max-w-3xl mx-auto">
            I approach development with a focus on clean, maintainable code and
            responsive design. My experience with modern JavaScript frameworks
            enables me to build modern applications from concept to deployment,
            always prioritizing clean code , performance and user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Approach;
