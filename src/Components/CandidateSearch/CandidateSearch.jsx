import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
export default function CandidateSearch() {
  const [Candidates, setCandidates] = useState([

    {
        "id": 1,
        "name": "John Smith",
        "location": "NewYork",
        "jobRole": "Software Engineer",
        "experience": "5 years",
        "skills": ["JavaScript", "Python", "React"]

      },
      {
        "id": 2,
        "name": "Jane Doe",
        "location": "SanFrancisco",
        "jobRole": "UX Designer",
        "experience": "3 years",
        "skills": ["UI/UX Design", "Adobe XD", "Prototyping"]

      },
      {
        "id": 3,
        "name": "Michael Johnson",
        "location": "London",
        "jobRole": "Data Scientist",
        "experience": "7 years",
        "skills": ["Python", "Machine Learning", "Data Analysis"]
      
      },
      {
        "id": 4,
        "name": "Emily Brown",
        "location": "Toronto",
        "jobRole": "Marketing Manager",
        "experience": "4 years",
        "skills": ["Digital Marketing", "Social Media", "SEO"]

      },
      {
        "id": 5,
        "name": "David Wilson",
        "location": "Sydney",
        "jobRole": "Project Manager",
        "experience": "6 years",
        "skills": ["Agile Methodologies", "Scrum", "Team Management"]

      }
]);

const [LaterCandidates, setLaterCandidates]=useState([])
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const locationValue = e.target.location.value.toLowerCase();
    setLocation(locationValue);
  };

  const handleRatingChanged = (newRating, candidateId) => {
    const updatedCandidates = Candidates.map(candidate => {
      if (candidate.id === candidateId) {
        return {
          ...candidate,
          rating: newRating
        };
      }
      return candidate;
    });
    setCandidates(updatedCandidates);
    
  };

  let addToLater=(candidate)=>{
    toast("Candidate has been added to later rankings for evaluation!");
    setLaterCandidates([...LaterCandidates,candidate])
  }
  return (
  <>
   <ToastContainer />
  <div>
      <form onSubmit={handleSubmit} className='text-center container mx-auto mt-14 bg-white shadow-lg p-10'>
        <div className='flex md:flex-row flex-col justify-center gap-5'>
          <input type='search' name='location' placeholder='Search Location Or Job Roles' className='input input-bordered w-full' />
          <button className='btn bg-slate-800 text-white'>Search</button>
        </div>
      </form>

      <div className='grid md:grid-cols-3 grid-cols-1 mt-40 gap-10'>
        {Candidates.filter(
          (candidate) =>
          (!location) ||
            (candidate.location && candidate.location.toLowerCase() === location) ||
            (candidate.jobRole && candidate.jobRole.toLowerCase() === location)
        ).map((candidate) => (
          <div className='card mx-auto md:w-96 bg-base-100 shadow-xl' key={candidate.id}>
            <div className='card-body'>
<div className='text-right '>               <button className='btn bg-green-500 text-white' onClick={()=>addToLater(candidate)}>Add to Later</button></div>
              <h2 className='card-title'>{candidate.name}</h2>
              <p>{candidate.jobRole}</p>
              <p>{candidate.location}</p>
              <p>{candidate.experience}</p>
              <p>{candidate.skills}</p>
              <p>Average Rating: {candidate.rating}/ 5</p>
              <ReactStars
                count={5}
                value={candidate.rating}
                onChange={(newRating) => handleRatingChanged(newRating, candidate.id)}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  



  <div className='  mt-64'>
    <h1 className='text-center text-slate-700 text-4xl'>Later <span className='text-green-600 font-bold'>Rankings</span></h1>

  <div className='grid md:grid-cols-3 grid-cols-1 mt-20 gap-10'>
        {LaterCandidates.map((candidate) => (
          <div className='card mx-auto md:w-96 bg-base-100 shadow-xl' key={candidate.id}>
            <div className='card-body'>
              <h2 className='card-title'>{candidate.name}</h2>
              <p>{candidate.jobRole}</p>
              <p>{candidate.location}</p>
              <p>{candidate.experience}</p>
              <p>{candidate.skills}</p>
            
            </div>
          </div>
        ))}
      </div>
  </div>









  
  </>
  );
}
