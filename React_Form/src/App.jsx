function App() {
  return (
<>
<form onSubmit="">
<div className="personal-details border-2 mx-2 my-4">
  <h1 className="mx-2">Personal Details</h1>
  <hr />
  <div className='flex gap-8 my-4'>
    <label htmlFor="name" className='w-36 mx-2'>Name</label>
    <input type="text" placeholder="Enter your name" className="border w-[40rem]" />
  </div>
  <div className='flex gap-8 my-4'>
    <label htmlFor="email" className='w-36 mx-2'>Email</label>
    <input type="email" placeholder="Enter your email" className="border w-[40rem]" />
  </div>
  <div className='flex gap-8 my-4'>
    <label htmlFor="phone" className='w-36 mx-2'>Phone</label>
    <input type="number" placeholder="Enter your Phone number" className="border w-[40rem]" />
  </div>
  <div className='flex gap-8 my-4'>
    <label htmlFor="date" className='w-36 mx-2'>Date of Birth</label>
    <input type="date" placeholder="dd-mm-yyyy" className="border w-[40rem]" />
  </div>
  <div className="flex gap-8 my-4">
    <label htmlFor="gender" className='w-36 mx-2'>Gender</label>
    <div className="flex gap-10">
      <span className='flex gap-2'>
      <input type="radio" />
      <label htmlFor="male">Male</label>
      </span>
      <span className='flex gap-2'>
      <input type="radio" />
      <label htmlFor="female">Female</label>
      </span>
      <span className='flex gap-2'>
      <input type="radio" />
      <label htmlFor="other">Other</label>
      </span>
    </div>
  </div>
  <div className="flex gap-8 my-4">
    <label htmlFor="Aadhar" className='w-36 mx-2'>Aadhaar Card</label>
    <span className='flex gap-2'>
      <input type="file" className="border w-[20rem]"/>
      <input type="file" className="border w-[20rem]"/>
    </span>
  </div>
</div>



{/*  */}

<div className="parent/gaurdian-details border-2 mx-2 my-4">
  <h1 className="mx-2">Parent/ Gaurdian Details</h1>
  <hr />
  <div className='flex gap-8 my-4'>
    <label htmlFor="name" className=' mx-2'>Parent/ Gaurdian <br /> Name</label>
    <input type="text" placeholder="Enter your name" className="border w-[40rem] h-7" />
  </div>
  <div className='flex gap-8 my-4'>
    <label htmlFor="phone" className='mx-2'>Parent/ Gaurdian <br />Phone</label>
    <input type="number" placeholder="Enter your Phone number" className="border w-[40rem] h-7" />
  </div>
</div>

{/*  */}

<div className="Residential-details border-2 mx-2 my-4">
  <h1 className="mx-2">Residential Details</h1>
  <hr />
  <div className='flex gap-8 my-4'>
    <label htmlFor="name" className='mx-2'>Local Address</label>
      <textarea name="localAddress" id="" placeholder='Enter your Local address' className="border w-[40rem] ml-10"></textarea>
  </div>
  <div className='ml-[12rem] flex gap-2'><input type="checkbox" /><label htmlFor="">Permanent address is same as local address</label></div>
  <div className='flex gap-8 my-4'>
    <label htmlFor="phone" className='mx-2'>Permanent Address</label>
    <textarea name="permanentAddress" id="" placeholder='Enter your permanent address' className='border w-[40rem]'></textarea>
  </div>
</div>

{/*  */}

<div className="Education-details border-2 mx-2 my-4">
  <h1 className="mx-2">Education Details</h1>
  <hr />
  <div className='flex gap-8 my-4'>
    <label htmlFor="name" className='w-36 mx-2'>Are you a:-</label>
    <div className="flex gap-10">
      <span className='flex gap-2'>
      <input type="radio" />
      <label htmlFor="male">Student</label>
      </span>
      <span className='flex gap-2'>
      <input type="radio" />
      <label htmlFor="female">Working Professional</label>
      </span>
    </div>
  </div>
  <div className='flex gap-8 my-4'>
    <label htmlFor="qualification" className='w-36 mx-2'>Last Attended Qualification</label>
    <input type="email" placeholder="Enter your email" className="border w-[40rem] h-7" />
  </div>
  <div className='flex gap-8 my-4'>
    <label htmlFor="year" className='w-36 mx-2'>Year</label>
    <input type="number" placeholder="Enter your completion year" className="border w-[40rem]" />
  </div>
  <div className='flex gap-8 my-4'>
    <label htmlFor="date" className='w-36 mx-2'>College / University</label>
    <input type="text" placeholder="College / University" className="border w-[40rem]" />
  </div>
  </div>

{/*  */}

<div className="Course-details border-2 mx-2 my-4">
  <h1 className="mx-2">Course Details</h1>
  <hr />
  <div className='flex gap-8 my-4'>
    <label htmlFor="name" className='w-36 mx-2'>Course</label>
    <select name="courseDetails" id="" className='w-[40rem] border py-1'>
      <option value="select">Select</option>
      <option value="full-Stack">Full-Stack</option>
      <option value="Frontend">Frontend</option>
      <option value="Backend">Backend</option>
      <option value="UI/UX">UI/UX</option>
    </select>
  </div>
  <div className='flex gap-8 my-4'>
    <label htmlFor="" className='mx-2'>How did you come to <br /> know about us?</label>
    <div className="flex gap-10">
      <span className='flex gap-2'>
      <input type="radio" />
      <label htmlFor="student" className='py-3'>Linkedin</label>
      </span>
      <span className='flex gap-2'>
      <input type="radio" />
      <label htmlFor="working-professional" className='py-3'>Google</label>
      </span>
      <span className='flex gap-2'>
      <input type="radio" />
      <label htmlFor="working-professional" className='py-3'>Instagram</label>
      </span>
      <span className='flex gap-2'>
      <input type="radio" />
      <label htmlFor="working-professional" className='py-3'>College TPO</label>
      </span>
      <span className='flex gap-2'>
      <input type="radio" />
      <label htmlFor="working-professional" className='py-3'>Friend</label>
      </span>
    </div>
  
  </div>
  </div>

</form>



</>
  )
}

export default App