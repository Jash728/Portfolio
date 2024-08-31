import Link from "next/link";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-2xl bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Contact Me</h1>
        <p className="text-lg text-gray-600 mb-8">
          I'd love to hear from you. You can reach out to me using the following contact details:
        </p>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Name:</h2>
          <p className="text-gray-700">Jash Shah</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Number:</h2>
          <p className="text-gray-700">+91 7016866790</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Email:</h2>
          <p className="text-gray-700">
            <a href="mailto:shahjash2809@gmail.com" className="text-yellow-500 hover:text-yellow-600 transition-colors">
              shahjash2809@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="bg-yellow-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-600 transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
