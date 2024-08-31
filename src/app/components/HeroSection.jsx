import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center min-h-screen bg-gray-100">
      {/* Left side - Text and Buttons */}
      <div className="flex-1 flex flex-col justify-center p-8 lg:p-16 bg-white lg:h-screen">
        <p className="text-lg text-yellow-500 font-semibold mb-4">
          Full Stack Developer
        </p>
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight text-gray-800 flex items-center">
        I&apos;m Jash Shah
          <span
            className="ml-4 text-6xl shake"
            role="img"
            aria-label="waving hand"
          >
            👋
          </span>
        </h1>
        <div className="flex space-x-4">
          <Link
            href="/about"
            className="bg-yellow-500 text-white py-3 px-8 rounded-lg hover:bg-yellow-600 transition-all"
          >
            More About Me
          </Link>
          <Link
            href="/contact"
            className="bg-yellow-500 text-white py-3 px-8 rounded-lg hover:bg-yellow-600 transition-all"
          >
            Hire Me
          </Link>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block flex-1 min-h-screen">
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          layout="responsive"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};

export default HeroSection;
