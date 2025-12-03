export const successResponse = (res: any, message: string, data: any = null, status = 200) => {
  return res.status(status).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (res: any, error: string, status = 400) => {
  return res.status(status).json({
    success: false,
    error,
  });
};
