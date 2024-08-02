import { Response, Request, NextFunction } from "express";
import { AnyZodObject } from "zod";

// Este middleware é usado para validar os dados de entrada das requisições HTTP no Express usando um schema do Zod. Se os dados da requisição (body, query ou params) não forem válidos de acordo com o schema fornecido, o middleware responde com um status 400 e os erros de validação. Se os dados forem válidos, a requisição continua para o próximo middleware ou rota.
const validade =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
    } catch (e: any) {
      return res.status(400).send(e.errors);
    }
  };

export default validade;
