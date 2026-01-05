import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Job from './models/JobModel.js';
import User from './models/UserModel.js';

try {
  await mongoose.connect(process.env.MONGO_URL);

  // Find existing user or create if not exists
  let user = await User.findOne({ email: 'harshalshinde132@gmail.com' });
  if (!user) {
    user = await User.create({
      name: 'Harshal',
      email: 'harshalshinde132@gmail.com',
      password: '123456', // for testing; it will store raw password
      role: 'admin',
    });
  }

  const jsonJobs = JSON.parse(
    await readFile(new URL('./utils/mockData.json', import.meta.url))
  );

  const jobs = jsonJobs.map((job) => {
    return { ...job, createdBy: user._id };
  });

  await Job.deleteMany({ createdBy: user._id });
  await Job.create(jobs);

  console.log('Success!!!');
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}


// import { readFile } from 'fs/promises';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();

// import Job from './models/JobModel.js';
// import User from './models/UserModel.js';

// try {
//   await mongoose.connect(process.env.MONGO_URL);
//   const user = await User.findOne({ email: 'harshalshinde132@gmail.com' });
//   const jsonJobs = JSON.parse(
//     await readFile(new URL('./utils/mockData.json', import.meta.url))
//   );
//   const jobs = jsonJobs.map((job) => {
//     return { ...job, createdBy: user._id };
//   });
//   await Job.deleteMany({ createdBy: user._id });
//   await Job.create(jobs);
//   console.log('Success!!!');
//   process.exit(0);
// } catch (error) {
//   console.log(error);
//   process.exit(1);
// }
