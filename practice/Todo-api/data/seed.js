import mongoose from 'mongoose';
import data from './mock.js';
import Task from '../models/Task.js';
import * as dotenv from 'dotenv';

dotenv.config();
mongoose.connect(process.env.DATABASE_URL);

await Task.deleteMany({}); // 인자로 삭제 조건을 전달
await Task.insertMany(data); // 인자로 삽입할 데이터를 전달

mongoose.connection.close();
