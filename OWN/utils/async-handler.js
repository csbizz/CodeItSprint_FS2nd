import { CastError, ValidationError } from './error.js';

const MESSAGES = Object.freeze({
  NOID: 'Cannot find given id.',
  IDFORMAT: 'Invalid id format.',
});

// handler를 인자로 받아서 오류처리 해주는 함수
export function asyncHandler(handler) {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (e) {
      if (e instanceof ValidationError) {
        res.status(400).json({ message: e.message });
      } else if (e instanceof CastError) {
        res.status(404).json({ message: MESSAGES.IDFORMAT });
      } else {
        res.status(500).json({ message: e.message });
      }
    }
  };
}
