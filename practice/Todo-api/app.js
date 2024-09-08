import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import Task from './models/Task.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log('Connected to DB'));

// handler를 인자로 받아서 오류처리 해주는 함수
function asyncHandler(handler) {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (e) {
      if (e.name === 'ValidationError') {
        res.status(400).send({ message: e.message });
      } else if (e.name === 'CastError') {
        res.status(404).send({ message: 'Cannot find given id.' });
      } else {
        res.status(500).send({ message: e.message });
      }
    }
  };
}

// get API
app.get(
  '/tasks',
  asyncHandler(async (req, res) => {
    // sort: oldest - 오래된 순서, 이외는 최신순
    // count: 태스크 개수

    const sort = req.query.sort;
    const count = Number(req.query.count) || 0;

    const sortOption = { createdAt: sort === 'oldest' ? 'asc' : 'desc' };
    const tasks = await Task.find().sort(sortOption).limit(count);

    res.send(tasks);
  })
);

// get ID API
app.get(
  '/tasks/:id',
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const task = await Task.findById(id);

    if (task) res.send(task);
    else res.status(404).send({ message: 'Cannot find given id.' });
  })
);

// post API
app.post(
  '/tasks',
  asyncHandler(async (req, res) => {
    const newTask = await Task.create(req.body);

    res.status(201).send(newTask);
  })
);

// patch API
app.patch(
  '/tasks/:id',
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const task = await Task.findById(id);
    if (task) {
      Object.keys(req.body).forEach((k) => {
        task[k] = req.body[k];
      });
      await task.save();
      res.send(task);
    } else res.status(404).send({ message: 'Cannot find given id.' });
  })
);

// delete API
app.delete(
  '/tasks/:id',
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByIdAndDelete(id);
    if (task) {
      res.sendStatus(204);
    } else res.status(404).send({ message: 'Cannot find given id.' });
  })
);

app.listen(process.env.PORT || 3001, () => console.log('Server Started'));
