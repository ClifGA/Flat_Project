import {useState} from 'react'


const Careers = () => {
    const [search, setSearch] = useState('software');
    const [jobs, setJobs] = useState([]);
  
const handleSearch = async (e) => {
const url = `https://jsearch.p.rapidapi.com/search?query=${search}&page=1&num_pages=1`;
const options = {
	method: 'GET',
	headers: {
	
	}
};
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    setJobs(result);
} catch (error) {
	console.error(error);
}
 }
 const renderJobs = () => {
    if (jobs.data && jobs.data.length > 0) {
      return jobs.data.map((job, index) => (
        <div key={index}  className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <span className="text-green-500">
                <svg className="h-5 fill-current" viewBox="0 0 24 24">
                    <path
                        d="M12 4a4 4 0 014 4c0 2.21-1.79 4-4 4s-4-1.79-4-4a4 4 0 014-4m0 10c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4z"></path>
                </svg>
            </span>
            <span className="tracking-wide">Job Title: {job.job_title}</span>
        </div>
        <div className="text-gray-700">
            <div className="grid md:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Company</div>
                    <div className="px-4 py-2">{null ? 'N/A' : job.employer_name}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Location</div>
                    <div className="px-4 py-2">{null ? 'N/A' : job.job_city}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Salary</div>
                    <div className="px-4 py-2">{null ? 'N/A' : job.job_min_salary}$ - {null ? 'N/A' : job.job_max_salary}$</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Posted</div>
                    <div className="px-4 py-2">{job.job_posted_at_datetime_utc}</div>
                </div>
                <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Description</div>
                <div className="px-4 py-2">
                    <p className="text-sm text-gray-600 max-h-16 overflow-hidden">
                    {job.job_description}
                    </p>
                </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Requirements</div>
                    <div className="px-4 py-2">{job.requirements}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Benefits</div>
                    <div className="px-4 py-2">{job.benefits}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Job Type</div>
                    <div className="px-4 py-2">{job.job_employment_type}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Experience</div>
                    <div className="px-4 py-2">{job.experience}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Industry</div>
                    <div className="px-4 py-2">{job.industry}</div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Link</div>
                    <div className="px-4 py-2">
                        <a className='text-blue-800 hover:text-blue-500 hover:underline cursor-pointer font-bold text-sm '
                        href={job.job_apply_link} target='_blank' rel='noreferrer'>
                            <svg
                                className="h-5 w-5 text-blue-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                >
                                <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
      ));
    } else {
      return <p>No jobs found.</p>;
    }
  };
  
  return (
    <div className="container mx-auto my-5 p-5">
    <div className="md:flex no-wrap md:-mx-2">
      <div className="w-full md:w-3/12 md:mx-2ma">
        <div className="">
            <input className='w-full border border-gray-300 rounded-md py-1 px-2'
                type='text'
            placeholder='Search Bar'
            onChange={(e) => setSearch(e.target.value)} 
            />
            <button className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={handleSearch}>Search</button>
          <div className="image overflow-hidden">
          </div>
        </div>
      </div>
      <div className="w-full md:w-9/12 mx-2 h-64">
        <div className="bg-white p-3 border-t-4 border-green-400">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
            <span className="text-green-500">
              <svg
                className="h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L9 3H3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H15L12 0Z"
                  fill="none"
                />
                <path
                  className="heroicon-ui"
                  d="M12 0L9 3H3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H21C22.6569 21 24 19.6569 24 18V6C24 4.34315 22.6569 3 21 3H15L12 0ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z"
                />
              </svg>
            </span>
            <span className="tracking-wide">Jobs Available</span>
          </div>
          {renderJobs()}
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mt-3">
            <span className="text-green-500">
              <svg
                className="h-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="heroicon-ui"
                  d="M12 13H7v5h5v2H5V10h2v1h5v2zm7-7h-5V6h5v5zm0 7h-5v5h5v-5zm-7-7H7V6h5v5z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Careers