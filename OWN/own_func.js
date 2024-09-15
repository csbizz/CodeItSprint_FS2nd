// 3자리마다 ,를 삽입해주는 함수
function priceFunc(p) {
  if (typeof p !== 'number') return 'NaN';
  return p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// handler를 인자로 받아서 오류처리 해주는 함수, mongoose 버전
function asyncHandler_mongoose(handler) {
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

// handler를 인자로 받아서 오류처리 해주는 함수, Prisma 버전
function asyncHandler(handler) {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (e) {
      if (
        e.name === 'StructError' ||
        e instanceof Prisma.PrismaClientValidationError
      ) {
        res.status(400).send({ message: e.message });
      } else if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        res.status(404).send({ message: 'Cannot find given id.' });
      } else {
        res.status(500).send({ message: e.message });
      }
    }
  };
}

export { priceFunc, asyncHandler };
