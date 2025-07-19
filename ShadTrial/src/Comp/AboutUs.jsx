import React from 'react';

const AboutUs = () => {
  return (
    <div 
        id='about'
        className="bg-white text-gray-800">
      {/* Hero Section */}
      

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto pt-24 px-4 space-y-12 grid sm:grid-cols-2 grid-cols-1">
        <div className=" text-center">
          <h2 className="text-3xl font-bold text-yellow-600">Our Mission</h2>
          <p className="mt-4 text-gray-600 text-lg">
            To deliver high-quality, cost-effective construction services while maintaining professionalism, integrity, and fairness in our relationships.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-yellow-600">Our Vision</h2>
          <p className="mt-4 text-gray-600 text-lg">
            To be the leading construction company known for innovation, reliability, and excellence in every project we undertake.
          </p>
        </div>
      </section>

      {/* Core Values */}
      {/* <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {['Integrity', 'Quality', 'Safety', 'Innovation', 'Teamwork', 'Sustainability'].map((value) => (
              <div key={value} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-yellow-700">{value}</h3>
                <p className="mt-2 text-gray-600">  
                  We uphold {value.toLowerCase()} in every step of our construction process.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-yellow-600">Why Choose Us</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            With over a decade of experience, our expert team combines craftsmanship with modern techniques to deliver exceptional results—on time and within budget.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
