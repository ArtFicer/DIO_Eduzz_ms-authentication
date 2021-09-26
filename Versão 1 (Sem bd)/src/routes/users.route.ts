import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const usersRoute = Router();
const OK = StatusCodes.OK;
const CREATED = StatusCodes.CREATED;

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: "Pedro" }];

  res.status(OK).json({ users: users });
});

usersRoute.get(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const users = [{ uuid }];

    res.status(OK).json({ users: users });
  }
);

usersRoute.post("/users", (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  console.log(body);

  res.status(CREATED).json({ body });
});

usersRoute.put(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const body = req.body;
    const uuid = req.params.uuid;

    console.log(body);
    res.status(OK).json({ uuid, body });
  }
);

usersRoute.delete(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(OK).json({ uuid, info: "Apagado" });
  }
);

export default usersRoute;
